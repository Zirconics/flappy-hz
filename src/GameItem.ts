export default abstract class GameItem {
  protected xPosition: number;

  protected yPosition: number;

  protected image: HTMLImageElement;

  /**
   * Initialise the GameItem.
   *
   * @param xPos X Position of GameItem
   * @param yPos Y Position of GameItem
   * @param img Image of GameItem
   */
  public constructor(xPos: number, yPos: number, img: HTMLImageElement) {
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.image = img;
  }

  /**
   * Getter for X Position
   *
   * @returns X Position of GameItem.
   */
  public getXPosition(): number {
    return this.xPosition;
  }

  /**
   * Setter for X Position.
   *
   * @param xPos new value of X Position.
   */
  public setXPosition(xPos: number): void {
    this.xPosition = xPos;
  }

  /**
   * Getter for Y Position
   *
   * @returns Y Position of GameItem.
   */
  public getYPosition(): number {
    return this.yPosition;
  }

  /**
   * Setter for Y Position
   *
   * @param yPos new value of Y Position
   */
  public setYPosition(yPos: number): void {
    this.yPosition = yPos;
  }

  /**
   * Getter for Image
   *
   * @returns Image of GameItem
   */
  public getImage(): HTMLImageElement {
    return this.image;
  }

  /**
   * Setter for image.
   *
   * @param img new value of image.
   */
  public setImage(img: HTMLImageElement): void {
    this.image = img;
  }

  /**
   * Draw method for the GameItem.
   *
   * @param ctx Canvas Rendering Context 2D
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.xPosition, this.yPosition);
  }

  public abstract move(): void;
}
