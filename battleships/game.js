/* globals game, grey, red */

$(document).ready(function() {
    $('#info').hide();
    $('#launch').click(initialize);
});

function initialize() {
    $('#launch').remove();

    // creates a grid where bottom-left cell is 0,0
    let grid = "<table>";
    for (let y = game.field.height - 1; y >= 0; y--) {
        grid += `<tr>`;
        for (let x = 0; x < game.field.width; x++) {
            grid += `<td data-x='${x}' data-y='${y}'></td>`;
        }
        grid += "</tr>";
    }
    grid += "</table>";
    $('#battlefield').append(grid);

    // creates 2D array representing each player's battlefield
    for (let x = 0; x < game.field.width; x++) {
        game.player1.field.push([]);
        game.player2.field.push([]);
        for (let y = game.field.height - 1; y >= 0; y--) {
            game.player1.field[x].push(false);
            game.player2.field[x].push(false);
        }
    }

    $('#info').show();

    // check for click
    $('#battlefield td').click(clickDetect);

    // check for keypress (indicates rotate)
    $(document).keypress(e => {
        if (['w', 'a', 's', 'd', ].includes(e.key)) game.cursor.rotate(e.key);
    });

    // start placement of ships
    game.cursor.action = 'placing';
    game.currentPlayer = 1;
    $('#info-main').text(`Player ${game.currentPlayer}, place your ships!`);
}

function clickDetect() {
    console.log("Click found at " + $(this).attr('data-x') + "," + $(this).attr('data-y'));
    switch (game.cursor.action) {
        case 'placing':
            if (typeof game.iterateShips === 'undefined') game.iterateShips = 0;
            placement(parseInt($(this).attr('data-x')), parseInt($(this).attr('data-y')));
            break;
        case 'aiming':
            if (shoot(parseInt($(this).attr('data-x')), parseInt($(this).attr('data-y')))) {
                setTimeout(function() {
                    game.currentPlayer = game.currentPlayer == 1 ? 2 : 1;
                    loadField(game.currentPlayer == 1 ? 2 : 1);
                    $('#info-main').text(`Player ${game.currentPlayer}, fire!`);
                    game.cursor.action = 'aiming';
                }, 1000);
            }
            break;
    }
}

function placement(x, y) {
    if (game.cursor.isClear(x, y, game.ships[game.listShips[game.iterateShips]].length, game.cursor.direction)) {
        // if the selected tiles are clear, fill them and move onto placing next ship
        $('#info-small').css('color', 'black').empty();
        // BUG NOTICE: 2nd player can see where player 1 placed ships due to changed cursor
        $('[selected]').css({
            'background-color': grey,
            'cursor': 'default',
        });
        $('[selected]').each(function() {
            game[`player${game.currentPlayer}`].field[$(this).attr('data-x')][$(this).attr('data-y')] = game.listShips[game.iterateShips];
        });
        console.log(`${game.listShips[game.iterateShips]} placed!`);
        game.iterateShips++;
    } else {
        // if selected tiles are invalid, update help message
        $('#info-small').css('color', 'red').text("Invalid ship position!");
        console.log("Invalid ship position!");
    }
    // deselect all tiles
    $('[selected]').attr('selected', false);
    // end placement phase after last ship is placed
    if (game.iterateShips >= game.listShips.length) {
        game.field.clear();
        game.iterateShips = 0;
        $('#info p').empty();
        if (game.player2.isHuman && game.currentPlayer == 1) {
            game.cursor.direction = 'vertical';
            game.currentPlayer = 2;
            $('#info-main').text(`Player ${game.currentPlayer}, place your ships!`);
        } else if (game.currentPlayer == 2) {
            game.cursor.action = 'aiming';
            game.currentPlayer = 1;
            $('#info-main').text(`Player ${game.currentPlayer}, fire!`);
            $('#info-small').text("Click on any empty tile to fire at your enemy's fleet!");
            loadField(2);
        }
    }
}

function loadField(player) {
    game.field.clear();
    for (const [x, row] of game[`player${player}`].field.entries()) {
        for (const [y, cell] of row.entries()) {
            let $cell = $(`[data-x=${x}][data-y=${y}]`);
            switch (cell) {
                case 'hit':
                    $cell.css('background-color', red);
                    break;
                case 'miss':
                    $cell.text('miss');
                    break;
            }
        }
    }
}

function shoot(x, y) {
    const $targetCell = $(`[data-x=${x}][data-y=${y}]`);
    if ($targetCell.css('background-color') != red && $targetCell.text() != 'miss') {
        if (game[`player${game.currentPlayer == 1 ? 2 : 1}`].field[x][y]) {
            game[`player${game.currentPlayer == 1 ? 2 : 1}`].field[x][y] = 'hit';
            $targetCell.css('background-color', red);
        } else {
            $targetCell.text("miss");
            game[`player${game.currentPlayer == 1 ? 2 : 1}`].field[x][y] = 'miss';
        }
        $('#info-small').css('color', 'black').text("Click on any empty tile to fire at your enemy's fleet!");
        game.cursor.action = false;
        return true;
    } else {
        $('#info-small').css('color', 'red').text("Cannot shoot here!");
        console.log("Invalid shot position!");
        return false;
    }
}