import Game from './Game.js';
import GameItem from './GameItem.js';

export default class Block extends GameItem {
  private xSpeed: number;

  /**
   * Initialise Block
   *
   * @param xPos X Position of block
   * @param yPos Y Position of block
   * @param xSpeed xSpeed of Block
   * @param img Image of Block
   * @param canvas canvas element
   */
  public constructor(
    xPos: number,
    yPos: number,
    xSpeed: number,
    img: HTMLImageElement,
    canvas: HTMLCanvasElement,
  ) {
    super(xPos, yPos, img);
    this.xSpeed = xSpeed;

    // check to see if the blocks are on the top or the bottom of the canvas
    const randomNumber = Game.randomNumber(0, 1);
    if (randomNumber === 0) {
      this.yPosition = 0;
    } else {
      this.yPosition = canvas.height - this.image.height;
    }
  }

  /**
   * Setter for block speed.
   *
   * @param xSpeed new value of xSpeed
   */
  public setXSpeed(xSpeed: number): void {
    this.xSpeed = xSpeed;
  }

  /**
   * Moves the block
   */
  public move(): void {
    this.xPosition -= this.xSpeed;
  }
}
