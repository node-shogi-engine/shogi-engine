import { Diagram } from "../model/Diagram";
import { Kifu } from "../model/Kifu";
import { DiagramService } from "./DiagramService";

export class KifuService {
  static getInitialKifu(): Kifu {
    const kifu = new Kifu(DiagramService.getInitialDiagram());
    return kifu;
  }

  static getDiagram(kifu: Kifu): Diagram {
    let diagram: Diagram = kifu.initialDiagram;
    const diagramService = new DiagramService();
    kifu.history.forEach((move) => {
      diagram = diagramService.moved(diagram, move);
    });
    return diagram;
  }

  // get steps(): number {
  //   return this.moveHistory.length;
  // }

  // get last_move(): Move | null {
  //   if (this.steps < 1) {
  //     return null;
  //   }
  //   return this.moveHistory.at(-1) as Move;
  // }
}
