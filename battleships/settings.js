const grey = "rgb(92, 92, 92)";
const red = "rgb(255, 0, 0)";
const black = "rgb(0, 0, 0)";

function* getShipsGenerator() {
    yield { ship: 'carrier', length: 5, done: false, };
    yield { ship: 'battleship', length: 4, done: false, };
    yield { ship: 'cruiser', length: 3, done: false, };
    yield { ship: 'submarine', length: 3, done: false, };
    return { ship: 'destroyer', length: 2, done: true, };
}

let game = {
    end: false,
    currentPlayer: 1, // 1 or 2
    get targetPlayer() {
        return !(game.currentPlayer - 1) + 1;
    },
    ships: getShipsGenerator(),
    field: {
        height: 10,
        width: 10,
        clear() {
            $('#battlefield td').css('background-color', 'rgb(113, 113, 243)').empty();
        },
    },
    cursor: {
        action: false, // 3 possible values - placing, aiming, false
        direction: 'vertical', // 2 possible values - vertical, horizontal
        rotate(key) {
            switch (key) {
                case 'w':
                case 's':
                    game.cursor.direction = 'vertical';
                    break;
                case 'a':
                case 'd':
                    game.cursor.direction = 'horizontal';
                    break;
            }
            console.log("Cursor rotated.");
        },
        isClear(x, y, distance, direction) {
            switch (direction) {
                case 'vertical':
                    if (y - distance + 1 < 0) return false;
                    for (let i = y; i > y - distance; i--) {
                        if ($(`[data-x=${x}][data-y=${i}]`).css('background-color') == grey) return false;
                        else $(`[data-x=${x}][data-y=${i}]`).attr('selected', true);
                    }
                    break;
                case 'horizontal':
                    if (x + distance > game.field.width) return false;
                    for (let i = x; i < x + distance; i++) {
                        if ($(`[data-x=${i}][data-y=${y}]`).css('background-color') == grey) return false;
                        else $(`[data-x=${i}][data-y=${y}]`).attr('selected', true);
                    }
                    break;
            }
            return true;
        },
    },
};

let player = {
    1: {
        name: "",
        isHuman: true, // should always be true
        field: [],
        fleet: {
            carrier: {
                health: 5,
                hitboxes: [],
            },
            battleship: {
                health: 4,
                hitboxes: [],
            },
            cruiser: {
                health: 3,
                hitboxes: [],
            },
            submarine: {
                health: 3,
                hitboxes: [],
            },
            destroyer: {
                health: 2,
                hitboxes: [],
            },
        },
    },
    2: {
        name: "",
        isHuman: true,
        field: [],
        fleet: {
            carrier: {
                health: 5,
                hitboxes: [],
            },
            battleship: {
                health: 4,
                hitboxes: [],
            },
            cruiser: {
                health: 3,
                hitboxes: [],
            },
            submarine: {
                health: 3,
                hitboxes: [],
            },
            destroyer: {
                health: 2,
                hitboxes: [],
            },
        },
    },
};