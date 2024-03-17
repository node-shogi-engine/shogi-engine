import { Game } from "@/application/Game";
import { DiagramPresenter } from "./DiagramPresenter";

export default class GamePresenter {
  private game: Game;

  constructor() {
    this.game = new Game();
  }

  private get diagram() {
    return this.game.diagram;
  }

  public showDiagram2D() {
    DiagramPresenter.show(this.diagram);
  }

  public diagramJson() {

  }

  public addMove() {

  }
}
