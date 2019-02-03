/* globals game, grey, red */

$(document).ready(function() {
    $('#info').hide();
    $('#reports').hide();
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
    $('#reports').show();

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
    switch (game.cursor.action) {
        case 'placing':
            if (typeof game.iterateShips === 'undefined') game.iterateShips = 0;
            placement(parseInt($(this).attr('data-x')), parseInt($(this).attr('data-y')));
            break;
        case 'aiming':
            if (shoot(parseInt($(this).attr('data-x')), parseInt($(this).attr('data-y')))) {
                game.cursor.action = false;
                setTimeout(function() {
                    game.currentPlayer = game.currentPlayer == 1 ? 2 : 1;
                    loadField(game.targetPlayer);
                    $('#info-main').text(`Player ${game.currentPlayer}, fire!`);
                    $('#info-small').text("Click on any empty tile to fire at your enemy's fleet!");
                    game.cursor.action = 'aiming';
                }, 1000);
            }
            if (game.end) {
                game.cursor.action = false;
                $('#info-main').text(`PLAYER ${game.currentPlayer} wins!`);
                $('#info-small').text(`The final ship of player ${game.targetPlayer}'s has been sunk!`);
                $('#reports').append(`Player ${game.currentPlayer} is victorious!`);
                setTimeout(function() {
                    location.reload();
                }, 5000);
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
            // 'cursor': 'default',
        });
        $('[selected]').each(function() {
            game[`player${game.currentPlayer}`].field[$(this).attr('data-x')][$(this).attr('data-y')] = game.listShips[game.iterateShips];
        });
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
        $('#info-small').css('color', 'black');
        let targetData = game[`player${game.targetPlayer}`].field[x][y];
        if (targetData) {
            // if shot lands on a ship
            game[`player${game.targetPlayer}`].field[x][y] = 'hit';
            $targetCell.css('background-color', red);
            $('#info-small').text("Enemy ship hit!");
            game[`player${game.targetPlayer}`].fleet[targetData]--;
            if(game[`player${game.targetPlayer}`].fleet[targetData] == 0) {
                delete game[`player${game.targetPlayer}`].fleet[targetData];
                $('#reports').append(`<p>Player ${game.targetPlayer}'s ${targetData} has been sunk!<p>`);
                // if last ship is destroyed
                if (Object.keys(game[`player${game.targetPlayer}`].fleet).length == 0) {
                    game.end = true;
                    return false;
                }
            }
        } else {
            // if shot lands in water
            $targetCell.text("miss");
            game[`player${game.targetPlayer}`].field[x][y] = 'miss';
            $('#info-small').text("Shot lands harmlessly into the ocean...");
        }
        return true;
    } else {
        $('#info-small').css('color', 'red').text("Cannot shoot here!");
        console.log("Invalid shot position!");
        return false;
    }
}