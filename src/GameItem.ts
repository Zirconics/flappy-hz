export default abstract class GameItem {
  protected xPosition: number;

  protected yPosition: number;

  protected image: HTMLImageElement;

  public constructor(xPos: number, yPos: number, img: HTMLImageElement) {
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.image = img;
  }

  public getXPosition(): number {
    return this.xPosition;
  }

  public setXPosition(xPos: number): void {
    this.xPosition = xPos;
  }

  public getYPosition(): number {
    return this.yPosition;
  }

  public setYPosition(yPos: number): void {
    this.yPosition = yPos;
  }

  public getImage(): HTMLImageElement {
    return this.image;
  }

  public setImage(img: HTMLImageElement): void {
    this.image = img;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.xPosition, this.yPosition);
  }

  public abstract move(): void;
}
