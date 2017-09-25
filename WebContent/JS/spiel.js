'use strict';

class Renderer {

    constructor(element) {
        this.element = element;
        this.setup();
    }

    setup() {
        let box = document.createElement('div');
        this.box = box;
        box.style.position = 'absolute';
        box.style.top = '20px';
        box.style.left = '20px';
        box.style.backgroundColor = 'red';
        box.style.width = '20px';
        box.style.height = '20px';
        this.element.appendChild(box);

    }
    render(pos) {
        this.box.style.top = pos + 'px';
    }
}

class Box {
    constructor() {
        this.pos = 0;
        this.speed = 0;
    }

    runLoop() {
        this.speed++;
        this.pos += this.speed;
    }

    moveUp() {
        this.speed = -10;
    }
}

class Game {
    constructor(element) {
        this.rend = new Renderer(element);
        this.box = new Box();
        this.element = element;
        this.isRunning = true;
        this.setup();
    }

    setup() {
        this.element.addEventListener('click', () => {
            this.box.moveUp();
        }, false)
    }

    start() {
        let score = 0;
        let timer = setInterval(() => {
            score++;
            this.box.runLoop();
            if (this.box.pos < 0) {
                console.log('Rand oben berüht! Score: ' + score);
                this.isRunning = false;
                clearInterval(timer);
            }
            if (this.box.pos > this.element.clientHeight - 20) {
                console.log('Rand unten berüht! Score: ' + score);
                this.isRunning = false;
                clearInterval(timer);
            }
            if (this.isRunning == true) {
                this.rend.render(this.box.pos);
            }
        }, 25)
        console.log(timer);
    }
}
let game = new Game(document.getElementById('game'));
game.start();