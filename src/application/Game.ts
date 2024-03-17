import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { Kifu } from "@/domain/kifu/model/Kifu";
import { DiagramService } from "@/domain/service/composeDiagram/DiagramService";
import { KifuService } from "@/domain/service/kifu/KifuService";

export class Game {
  public kifu: Kifu;

  public diagram: Diagram;

  constructor() {
    this.kifu = KifuService.kifu;
    this.diagram = DiagramService.diagram;
  }
}
