/* globals game, grey */

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
            // shoot(parseInt($(this).attr('data-x')), parseInt($(this).attr('data-y')));
            break;
    }
}

function placement(x, y) {
    if (game.cursor.isClear(x, y, game.ships[game.listShips()[game.iterateShips]].length, game.cursor.direction)) {
        // if the selected tiles are clear, fill them and move onto placing next ship
        $('#info-small').css('color', 'black').empty();
        $('[selected]').css({
            'background-color': grey,
            'cursor': 'default',
        });
        console.log(`${game.listShips()[game.iterateShips]} placed!`);
        game.iterateShips++;
    } else {
        // if selected tiles are invalid, update help message
        $('#info-small').css('color', 'red').text("Invalid ship position!");
        console.log("Invalid ship position!");
    }
    // deselect all tiles
    $('[selected]').attr('selected', false);
    // end placement phase after last ship is placed
    if (game.iterateShips >= game.listShips().length) {
        game.field.clear();
        game.iterateShips = 0;
        $('#info-main').empty();
        $('#info-small').empty();
        if (game.player2.isHuman && game.currentPlayer == 1) {
            game.currentPlayer = 2;
            $('#info-main').text(`Player ${game.currentPlayer}, place your ships!`);
        } else if (game.currentPlayer == 2) game.cursor.action = false;
    }
}