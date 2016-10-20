'use strict';

/**
 * Tests:
 *
 * Passed
 * - /cpu_instrs/individual/01-special.gb
 * - /cpu_instrs/individual/03-op sp,hl.gb
 * - /cpu_instrs/individual/04-op r,imm.gb
 * - /cpu_instrs/individual/05-op rp.gb
 * - /cpu_instrs/individual/06-ld r,r.gb
 * - /cpu_instrs/individual/07-jr,jp,call,ret,rst.gb
 * - /cpu_instrs/individual/08-misc instrs.gb
 * - /cpu_instrs/individual/09-op r,r.gb
 * - /cpu_instrs/individual/10-bit ops.gb
 * - /cpu_instrs/individual/11-op a,(hl).gb
 *
 * Failed
 * - /cpu_instrs/individual/02-interrupts.gb
 * - /instr_timing/instr_timing.gb
 */

const fs = require('fs');
const cart = fs.readFileSync('./roms/opus5/opus5.gb');
const bios = fs.readFileSync('./support/bios.bin');
const Gameboy = require('../');


const gameboy = new Gameboy(cart);
gameboy.powerOn();

// let i = 0;
// gameboy.gpu.on('frame', (canvas) => {
//     if (++i % 60) return;
//     fs.writeFile(`./screenshot/${i / 60}.png`, canvas.toBuffer());
// });
