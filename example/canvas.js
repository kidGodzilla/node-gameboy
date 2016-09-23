'use strict';

const fs = require('fs');
const Gameboy = require('../');
const Canvas = require('canvas');

const gameboy = new Gameboy(new Canvas(160, 144));
gameboy.loadCart(fs.readFileSync('./roms/opus5.gb'));
gameboy.powerOn();


let i = 0;

gameboy.screen.on('frame', (canvas) => {
    if (++i % 60) return;
    fs.writeFile(`./screenshot/${i / 60}.png`, canvas.toBuffer());
});
