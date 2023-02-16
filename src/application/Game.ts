import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { Kifu } from "@/domain/kifu/Kifu";
import { DiagramService } from "@/domain/service/composeDiagram/DiagramService";
import { KifuService } from "@/domain/service/kifu/KifuService";
import { DiagramPresenter } from "@/presentation/DiagramPresenter";

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
