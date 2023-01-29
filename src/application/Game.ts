import { Diagram } from "../domain/model/Diagram";
import { Kifu } from "../domain/model/Kifu";
import { KifuService } from "../domain/service/KifuService";
import { DiagramPresenter } from "../presentation/DiagramPresenter";

export class Game {
  private kifu: Kifu;

  private currentDiagram: Diagram;

  constructor() {
    this.kifu = KifuService.getInitialKifu();
    this.currentDiagram = this.kifu.initialDiagram;
  }

  public showDiagram(): string {
    return DiagramPresenter.show(this.currentDiagram);
  }

  public showShogiBoard() {
    return this.currentDiagram.shogiBoard;
  }
}
