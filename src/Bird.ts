import Block from './Block.js';
import GameItem from './GameItem.js';
import KeyboardListener from './KeyboardListener.js';

export default class Bird extends GameItem {
  private ySpeed: number;

  private keyBoardListener: KeyboardListener;

  /**
   * @param xPos X Position of Bird
   * @param yPos Y Position of Bird
   * @param img Image of bird.
   */
  public constructor(xPos: number, yPos: number, img: HTMLImageElement) {
    super(xPos, yPos, img);
    this.ySpeed = 1;
    this.keyBoardListener = new KeyboardListener();
  }

  /**
   * Set the speed on the y-axis
   *
   * @param ySpeed speed on the y-axis
   */
  public setYSpeed(ySpeed: number): void {
    this.ySpeed += ySpeed;
  }

  /**
   * Get the speed on the y-axis
   *
   * @returns the speed on the y-axis
   */
  public getYSpeed(): number {
    return this.ySpeed;
  }

  /**
   * Method that moves the bird.
   */
  public move(): void {
    this.yPosition += this.ySpeed;
  }

  /**
   * Method that handles the keyboard input for bird.
   */
  public handleKeyBoard(): void {
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
      this.yPosition -= 12;
      this.ySpeed = 1;
    }
  }

  /**
   * Checks if the player collides with block elements.
   *
   * @param blocks block item
   * @returns True if the bird collides with a block element
   *          False if the bird doen't hit any blocks.
   */
  public collidesWithBlocks(blocks: Block[]): boolean {
    let collides: boolean = false;
    blocks.forEach((block) => {
      if (
        this.xPosition < block.getXPosition() + block.getImage().width
        && this.xPosition + this.image.width > block.getXPosition()
        && this.yPosition < block.getYPosition() + block.getImage().height
        && this.yPosition + this.image.height > block.getYPosition()
      ) {
        console.log('Collision with block!');
        collides = true;
      }
    });
    return collides;
  }

  /**
   * Checks if the player collides with the canvas border.
   *
   * @param canvas canvas.
   * @returns True if the player collides with the canvas borders
   *          False if the player doens't collide with the canvas borders.
   */
  public collidesWithCanvas(canvas: HTMLCanvasElement): boolean {
    if (
      this.yPosition < 0 || this.yPosition + this.image.height > canvas.height
    ) {
      console.log('Collision with side!');
      return true;
    }

    return false;
  }
}
