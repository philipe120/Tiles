/* globals game, player, grey, red, black, getShipsGenerator */

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
        player[1].field.push([]);
        player[2].field.push([]);
        for (let y = game.field.height - 1; y >= 0; y--) {
            player[1].field[x].push(false);
            player[2].field[x].push(false);
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
    game.currentShip = game.ships.next().value;
    $('#info-main').text(`Player ${game.currentPlayer}, place your ships!`);
}

function clickDetect() {
    const x = parseInt($(this).attr('data-x'));
    const y = parseInt($(this).attr('data-y'));
    switch (game.cursor.action) {
        case 'placing':
            placement(x, y, game.currentShip, game.cursor.direction);
            break;
        case 'aiming':
            if (shoot(x, y)) {
                if (game.currentPlayer == 2) game.turn++;
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
                $('#reports').append(`<p>Player ${game.currentPlayer} is victorious!<p>`);
                setTimeout(function() {
                    location.reload();
                }, 5000);
            }
            break;
    }
}

function placement(x, y, ship, direction) {
    if (game.cursor.isClear(x, y, ship.length, direction)) {
        // if the selected tiles are clear, fill them and move onto placing next ship
        $('#info-small').css('color', 'black').empty();
        $('[selected]').css({'background-color': grey,});
        $('[selected]').each(function() {
            let [x, y] = [parseInt($(this).attr('data-x')), parseInt($(this).attr('data-y')),];
            player[game.currentPlayer].fleet[ship.ship].hitboxes.push([x, y,]);
            player[game.currentPlayer].field[x][y] = ship.ship;
        });
        game.currentShip = game.ships.next().value;
    } else {
        // if selected tiles are invalid, update help message
        $('#info-small').css('color', 'red').text("Invalid ship position!");
        console.log("Invalid ship position!");
    }
    // deselect all tiles
    $('[selected]').attr('selected', false);
    // end placement phase after last ship is placed
    if (ship.done) {
        game.field.clear();
        game.ships = getShipsGenerator();
        game.currentShip = game.ships.next().value;
        $('#info p').empty();
        if (player[2].isHuman && game.currentPlayer == 1) {
            game.cursor.direction = 'vertical';
            game.currentPlayer = 2;
            $('#info-main').text(`Player ${game.currentPlayer}, place your ships!`);
        } else {
            game.cursor.action = 'aiming';
            game.currentPlayer = 1;
            game.turn = 1;
            $('#info-main').text(`Player ${game.currentPlayer}, fire!`);
            $('#info-small').text("Click on any empty tile to fire at your enemy's fleet!");
            loadField(2);
        }
    }
}

function loadField(p) {
    game.field.clear();
    for (const [x, row] of player[p].field.entries()) {
        for (const [y, cell] of row.entries()) {
            let $cell = $(`[data-x=${x}][data-y=${y}]`);
            switch (cell) {
                case 'hit':
                    $cell.css('background-color', red);
                    break;
                case 'miss':
                    $cell.text('miss');
                    break;
                case 'destroyed':
                    $cell.text('X').css('background-color', black);
                    break;
            }
        }
    }
}

function shoot(x, y) {
    const $targetCell = $(`[data-x=${x}][data-y=${y}]`);
    if ($targetCell.css('background-color') != red && $targetCell.text() != 'miss') {
        $('#info-small').css('color', 'black');
        let targetData = player[game.targetPlayer].field[x][y];
        // if shot lands on a ship
        if (targetData) {
            player[game.targetPlayer].fleet[targetData].health--;
            // if shot sinks a ship
            if (player[game.targetPlayer].fleet[targetData].health == 0) {
                for (let [hitX, hitY] of player[game.targetPlayer].fleet[targetData].hitboxes) {
                    player[game.targetPlayer].field[hitX][hitY] = 'destroyed';
                    $(`[data-x=${hitX}][data-y=${hitY}]`).css('background-color', black);
                }
                delete player[game.targetPlayer].fleet[targetData];
                $('#reports').append(`<p>Player ${game.targetPlayer}'s ${targetData} has been sunk!<p>`);
                // if last ship is destroyed
                if (Object.keys(player[game.targetPlayer].fleet).length == 0) {
                    game.end = true;
                    return false;
                }
            // if shot does not sink a ship
            } else {
                player[game.targetPlayer].field[x][y] = 'hit';
                $targetCell.css('background-color', red);
                $('#info-small').text("Enemy ship hit!");
            }
        } else {
            // if shot lands in water
            $targetCell.text("miss");
            player[game.targetPlayer].field[x][y] = 'miss';
            $('#info-small').text("Shot lands harmlessly into the ocean...");
        }
        return true;
    } else {
        $('#info-small').css('color', 'red').text("Cannot shoot here!");
        console.log("Invalid shot position!");
        return false;
    }
}