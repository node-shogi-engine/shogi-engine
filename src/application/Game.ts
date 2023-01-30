import { Diagram } from "../domain/model/Diagram";
import { Kifu } from "../domain/model/Kifu";
import { DiagramService } from "../domain/service/DiagramService";
import { KifuService } from "../domain/service/KifuService";
import { DiagramPresenter } from "../presentation/DiagramPresenter";

export class Game {
  private kifu: Kifu;

  private diagram: Diagram;

  constructor() {
    this.kifu = KifuService.kifu;
    this.diagram = DiagramService.diagram;
  }

  public showDiagram(): string {
    return DiagramPresenter.show(this.diagram);
  }
}
