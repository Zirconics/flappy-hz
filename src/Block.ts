import Game from './Game.js';
import Obstacle from './Obstacle.js';

export default class Block extends Obstacle {
  /**
   * Initialise Block
   *
   * @param type Type of Obstacle
   * @param xPos X Position of block
   * @param yPos Y Position of block
   * @param xSpeed xSpeed of Block
   * @param img Image of Block
   * @param canvas canvas element
   */
  public constructor(
    type: string,
    xPos: number,
    yPos: number,
    xSpeed: number,
    img: HTMLImageElement,
    canvas: HTMLCanvasElement,
  ) {
    super(type, xSpeed, xPos, yPos, img, canvas);

    // check to see if the blocks are on the top or the bottom of the canvas
    const randomNumber = Game.randomNumber(0, 1);
    if (randomNumber === 0) {
      this.yPosition = 0;
    } else {
      this.yPosition = canvas.height - this.image.height;
    }
  }

  /**
   * Moves the block
   */
  public move(): void {
    this.xPosition -= this.getXSpeed();
  }
}
