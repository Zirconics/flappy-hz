export default abstract class GameItem {
  protected xPosition: number;

  protected yPosition: number;

  protected image: HTMLImageElement;

  /**
   * Getter for Y Position.
   *
   * @returns the Y Position of the GameItem.
   */
  public getYpos(): number {
    return this.yPosition;
  }

  /**
   * Draws the GameItems.
   *
   * @param ctx Canvas Rendering Context 2D
   */
  public draw(ctx: CanvasRenderingContext2D) {
    this.ctx.drawImage(this.bird.image, this.bird.xPos, this.bird.yPos);
  }

  /**
   * Moves the GameItems
   */
  public move() {
    this.bird.yPos += this.bird.ySpeed;
    this.blocks.forEach((block) => {
      block.xPos -= block.xSpeed;
    });
  }
}
