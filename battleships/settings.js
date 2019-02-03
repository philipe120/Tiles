const grey = "rgb(128, 128, 128)";
const red = "rgb(255, 0, 0)";

let game = {
    end: false,
    turn: 1,
    currentPlayer: 1, // 1 or 2
    get targetPlayer() {
        return game.currentPlayer == 1 ? 2 : 1;
    },
    get listShips() {
        return Object.keys(this.ships);
    },
    ships: {
        carrier: {
            length: 5,
        },
        battleship: {
            length: 4,
        },
        cruiser: {
            length: 3,
        },
        submarine: {
            length: 3,
        },
        destroyer: {
            length: 2,
        },
    },
    player1: {
        name: "",
        isHuman: true, // should always be true
        field: [],
        fleet: {
            carrier: 5,
            battleship: 4,
            cruiser: 3,
            submarine: 3,
            destroyer: 2,
        },
    },
    player2: {
        name: "",
        isHuman: true,
        field: [],
        fleet: {
            carrier: 5,
            battleship: 4,
            cruiser: 3,
            submarine: 3,
            destroyer: 2,
        }
    },
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