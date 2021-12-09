import GameItem from './GameItem.js';

export default abstract class Obstacle extends GameItem {
  private xSpeed: number;

  private type: string;

  private canvas: HTMLCanvasElement;

  /**
   * Initialise Obstacle.
   *
   * @param type Type of Obstacle
   * @param xSpeed X Speed of obstacle
   * @param xPos X Position of Obstacle
   * @param yPos Y Position of Obstacle
   * @param img Image of Obstacle
   * @param canvas Canvas
   */
  public constructor(
    type: string,
    xSpeed: number,
    xPos: number,
    yPos: number,
    img: HTMLImageElement,
    canvas: HTMLCanvasElement,
  ) {
    super(xPos, yPos, img);
    this.type = type;
    this.xSpeed = xSpeed;
    this.canvas = canvas;
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
   * Getter for x Speed.
   *
   * @returns x Speed
   */
  public getXSpeed(): number {
    return this.xSpeed;
  }

  public abstract move(): void;

  /**
   * Getter for Type.
   *
   * @returns String containing the type of the Obstacle
   */
  public getType(): string {
    return this.type;
  }
}
