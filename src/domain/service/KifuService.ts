import { Diagram } from "../model/Diagram";
import { Kifu } from "../model/Kifu";
import { Move } from "../model/type/Move";
import { DiagramService } from "./DiagramService";

export class KifuService {
  static kifu: Kifu = new Kifu(DiagramService.diagram);

  static getInitialKifu(): Kifu {
    const kifu = new Kifu(DiagramService.getInitialDiagram());
    return kifu;
  }

  static addMove(move: Move) {
    KifuService.kifu.addMove(move);
  }

  static getDiagram(kifu: Kifu): Diagram {
    return DiagramService.generateDiagramFromKifu(kifu);
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
