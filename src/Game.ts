import Bird from './Bird.js';
import Block from './Block.js';
import Obstacle from './Obstacle.js';

export default class Game {
  // Properties for game elements
  private obstacles: Obstacle[];

  private bird: Bird;

  private score: number;

  // Property to keep track of the current block speed
  private blockSpeed = 5;

  // Properties for canvas and keyboard
  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  /**
   * Initialize the Game
   *
   * @param canvasId the id of the canvas
   */
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = 600;
    this.ctx = this.canvas.getContext('2d');
    this.obstacles = [];
    this.score = 0;

    this.bird = this.insertHzBird();
    console.log(this.bird);

    this.loop();
  }

  /**
   * Method for the Game Loop
   */
  private loop = () => {
    this.increaseGravity();
    this.insertExtraBlock();
    this.increaseBlockSpeed();
    this.blockOutOfCanvas();
    this.bird.handleKeyBoard();

    this.move();
    this.draw();

    const collidesWithBlock = this.bird.collidesWithBlocks(this.obstacles);
    const collidesWithSide = this.bird.collidesWithCanvas(this.canvas);

    if (collidesWithBlock || collidesWithSide) {
      // The game loop ends on game over (the requestAnimationFrame is no longer called).
      // Draw the game over text as last frame.
      this.drawGameOver();
    } else {
      this.score += 1;
      requestAnimationFrame(this.loop);
    }
  };

  /**
   * Increase gravity (the downward motion of the HZ bird) every few frames
   */
  private increaseGravity() {
    if (this.score % 8 === 0) {
      this.bird.setYSpeed(1);
    }
  }

  /**
   * Every few frames, insert a new block in the playing field
   */
  private insertExtraBlock() {
    if (
      this.score === 0 || this.score % Math.round(500 / this.blockSpeed) === 0
    ) {
      this.obstacles.push(this.createBlock());
    }
  }

  /**
   * Create a new block which can be added to the playing field
   *
   * @returns The block
   */
  private createBlock(): Obstacle {
    const image = Game.loadNewImage('./assets/block.png');
    return new Block('Block', this.canvas.width, 0, this.blockSpeed, image, this.canvas);
  }

  /**
   * Every few frames, increase the speed of the blocks so the game becomes harder
   */
  private increaseBlockSpeed() {
    if (this.score % 400 === 0) {
      this.blockSpeed += 2;
      this.obstacles.forEach((block) => {
        block.setXSpeed(this.blockSpeed);
      });
    }
  }

  /**
   * Method to determine of a block has fully left the window and remove it from the array.
   */
  private blockOutOfCanvas() {
    this.obstacles.forEach((block, index) => {
      if (block.getXPosition() + block.getImage().width < 0) {
        this.obstacles.splice(index, 1);
      }
    });
  }

  /**
   * Draw the game over screen
   */
  private drawGameOver() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // write the current score
    this.writeTextToCanvas(
      `Game over! Your score is: ${this.score}`,
      40,
      this.canvas.width / 2,
      this.canvas.height / 2,
    );
  }

  /**
   * Method to create the HZ bird object
   *
   * @returns returns a HZ bird
   */
  private insertHzBird(): Bird {
    const image = Game.loadNewImage('./assets/logo.png');
    return new Bird(100, this.canvas.height / 2, image);
  }

  /**
   * Method to move the HZ bird and blocks
   */
  private move() {
    this.bird.move();
    this.obstacles.forEach((block) => {
      block.move();
    });
  }

  /**
   * Draws all the necessary elements to the canvas
   */
  private draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.bird.draw(this.ctx);
    this.drawBlocks();

    // write the current score
    this.writeTextToCanvas(
      `Score is: ${this.score}`,
      40,
      this.canvas.width / 2,
      40,
    );
  }

  /**
   * Method to draw all the blocks
   */
  private drawBlocks() {
    this.obstacles.forEach((block) => {
      block.draw(this.ctx);
    });
  }

  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param fontSize - Font size in pixels
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param alignment - Where to align the text
   * @param color - The color of the text
   */
  public writeTextToCanvas(
    text: string,
    fontSize: number = 20,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = 'center',
    color: string = 'red',
  ): void {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Method to load an image
   *
   * @param source the source
   * @returns HTMLImageElement - returns an image
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  /**
   * Returns a random number between min and max
   *
   * @param min - lower boundary
   * @param max - upper boundary
   * @returns a random number between min and max
   */
  public static randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }
}
