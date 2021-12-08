import GameItem from './GameItem.js';
import KeyboardListener from './KeyboardListener.js';
export default class Bird extends GameItem {
    ySpeed;
    keyBoardListener;
    constructor(xPos, yPos, img) {
        super(xPos, yPos, img);
        this.ySpeed = 1;
        this.keyBoardListener = new KeyboardListener();
    }
    setYSpeed(ySpeed) {
        this.ySpeed += ySpeed;
    }
    getYSpeed() {
        return this.ySpeed;
    }
    move() {
        this.yPosition += this.ySpeed;
    }
    handleKeyBoard() {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
            this.yPosition -= 12;
            this.ySpeed = 1;
        }
    }
    collidesWithBlocks(blocks) {
        let collides = false;
        blocks.forEach((block) => {
            if (this.xPosition < block.getXPosition() + block.getImage().width
                && this.xPosition + this.image.width > block.getXPosition()
                && this.yPosition < block.getYPosition() + block.getImage().height
                && this.yPosition + this.image.height > block.getYPosition()) {
                console.log('Collision with block!');
                collides = true;
            }
        });
        return collides;
    }
    collidesWithCanvas(canvas) {
        if (this.yPosition < 0 || this.yPosition + this.image.height > canvas.height) {
            console.log('Collision with side!');
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=Bird.js.map