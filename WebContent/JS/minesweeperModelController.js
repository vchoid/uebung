
// generate table --------------------------------------------------
function genTable(tx, ty) {
    'use strict';
    var i,
        j,
        tRow,
        tData,
        tdID,
        text,
        create = function (tag) {
            return document.createElement(tag);
        };
    for (i = 0; i < tx; i++) {
        tRow = create('tr');
        document.getElementById('tbody').appendChild(tRow);
        for (j = 0; j < ty; j++) {
            tData = create('td');
            tData.setAttribute('id', 'R' + (i + 1) + 'D' + (j + 1));
            tRow.appendChild(tData);
        }
    }
}
//-------------------------------------------------------------------

function spreadMines(mines) {
    'use strict';

    
}

// timer -------------------------------------------------
var c = 0, t,  timer_is_on = 0, pTimeTag;
function timedCount() {
    'use strict';
    var pTimeTag = document.getElementById('timer');
    pTimeTag.innerHTML = c;
    c++;
    t = setTimeout(function () {timedCount(); }, 1000);
}
function startCount() {
    'use strict';
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}
// --------------------------------------------------------

// startet den Timer und generiert die Bombenverteilung
function initGame() {
    'use strict';
    startCount();
    spreadMines(10);
}








