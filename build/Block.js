import Game from './Game.js';
import GameItem from './GameItem.js';
export default class Block extends GameItem {
    xSpeed;
    constructor(xPos, yPos, xSpeed, img, canvas) {
        super(xPos, yPos, img);
        this.xSpeed = xSpeed;
        const randomNumber = Game.randomNumber(0, 1);
        if (randomNumber === 0) {
            this.yPosition = 0;
        }
        else {
            this.yPosition = canvas.height - this.image.height;
        }
    }
    setXSpeed(xSpeed) {
        this.xSpeed = xSpeed;
    }
    move() {
        this.xPosition -= this.xSpeed;
    }
}
//# sourceMappingURL=Block.js.map