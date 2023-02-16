import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { Kifu } from "@/domain/kifu/Kifu";
import { Move } from "@/domain/pieceMove/type/Move";
import { DiagramService } from "@/domain/service/composeDiagram/DiagramService";

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
