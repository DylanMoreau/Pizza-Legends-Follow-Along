class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".gameCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        // map demo
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        }
        image.src = 'images/maps/DemoLower.png';

        // hero position

        const x = 5;
        const y = 6;

        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow, 
                0, 0,   // starting point of left and top crop
                32, 32, // size of cut
                x * 16 - 8, y * 16 - 18,   // place on canvas to draw
                32, 32  // size of character
            )
        }
        shadow.src = 'images/characters/shadow.png';

        // hero character
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero, 
                0, 0,   // starting point of left and top crop
                32, 32, // size of cut
                x * 16 - 8, y * 16 - 18,   // place on canvas to draw
                32, 32  // size of character
            )
        }
        hero.src = 'images/characters/people/hero.png';
    }
}