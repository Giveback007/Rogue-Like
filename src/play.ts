import { array2D, random } from './utils';

const grid = array2D(200, 50);

let renderLen = 0;
let maxLen = grid.length;

function genRoom() {
    const len = random(10, 30);
    const hgt = random(10, 30)
    const room = array2D(len, hgt);

    // room.map((row) => row.map(()))
}
// const x = uiId();
// x
// grid
// maxLen
