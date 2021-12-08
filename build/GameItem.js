export default class GameItem {
    xPosition;
    yPosition;
    image;
    constructor(xPos, yPos, img) {
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.image = img;
    }
    getXPosition() {
        return this.xPosition;
    }
    setXPosition(xPos) {
        this.xPosition = xPos;
    }
    getYPosition() {
        return this.yPosition;
    }
    setYPosition(yPos) {
        this.yPosition = yPos;
    }
    getImage() {
        return this.image;
    }
    setImage(img) {
        this.image = img;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPosition, this.yPosition);
    }
}
//# sourceMappingURL=GameItem.js.map