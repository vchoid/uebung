var Feld = function (x, y) {
    "use strict";
    this.x = x;
    this.y = y;
    this.isMine = Math.random() > 0.25;
    return this;
};

function update(storage) {
    "use strict";
    window.console.log(storage.felder);
}

(function () {
    "use strict";
    var storage = {
        felder: [],
        score: 0,
        mineCount: 0
    };

    storage.felder.push(new Feld(0, 1));
    storage.felder.push(new Feld(0, 2));
    storage.felder.push(new Feld(0, 3));
    storage.felder.push(new Feld(0, 4));
    storage.felder.push(new Feld(0, 5));
    storage.felder.push(new Feld(0, 6));
    storage.felder.push(new Feld(0, 7));

    setInterval(function () {
        update(storage);
    }, 500);
}
());