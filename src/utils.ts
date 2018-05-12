
// min and max inclusive
export const random = 
    (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

// export const uiId = () => (Date.now().toString(36) + Math.random().toString(36)).substr(2, 5);
export function uiId() {
    return Math.random() + '';
    // const char4 = () => 
}
export const hexagon = (x: number, y: number): hexagon => 
    ({ pos: `${x}-${y}`, x, y, type: null, room: null, character: null })

export const clone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj))

// fill not supported by ie11
export const array = <T>(len: number, val: T = null) => Array(len).fill(0).map(() => val);

export const array2D = <T>(x: number, y: number, val: T = null) => array(x, array(y, val));

export function grid(len: number, hgt: number) {
    const hexArr = array2D(len, hgt, hexagon);
    hexArr.map((row, x) => row.map((f, y) => f(x, y)));
    // let renderedLen = 0;

    // const withRooms = addRooms(arr2d);
    // const roomsCntd = connectRooms(withRooms);
    // return populateGrid(roomsCntd);
}

// export 

const g = grid(300, 60);
g
