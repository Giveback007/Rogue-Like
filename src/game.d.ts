interface dict<T> { [id: string]: T }

interface hexagon {
    pos: string; // 'x-y'
    x: number;
    y: number;
    type: 'wall' | 'corridor';

    room: room['id'];
    character: character['id'];
}

interface character {
    id: string;
    type: 'hero' | 'door';
}

interface room {
    id: string;
}

interface GameGrid {
    positions: dict<hexagon>
    rooms: dict<room>;
    characters: dict<character>;
}
