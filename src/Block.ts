import GameItem from './GameItem.js';

export default class Block extends GameItem {
  private xSpeed: number;

  /**
   * Moves the block
   */
  public move(): void {
    this.yPosition += this.xSpeed;
  }
}
