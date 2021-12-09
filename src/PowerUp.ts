import Obstacle from './Obstacle.js';

export default class PowerUp extends Obstacle {
  private ySpeed: number;

  /**
   * @param type a
   * @param xPos a
   * @param yPos a
   * @param ySpeed a
   * @param img a
   * @param canvas a
   */
  public constructor(
    type: string,
    xPos: number,
    yPos: number,
    ySpeed: number,
    img: HTMLImageElement,
    canvas: HTMLCanvasElement,
  ) {
    super(type, ySpeed, xPos, yPos, img, canvas);
  }

  /**
   *
   */
  public move(): void {
    if (
      this.yPosition < 0 || this.yPosition + this.image.height > this.yPosition
    ) {
      this.ySpeed *= -1;
    }

    this.xPosition -= this.getXSpeed();
    this.yPosition += this.ySpeed;
  }
}
