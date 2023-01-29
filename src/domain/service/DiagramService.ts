import { Diagram } from "../model/Diagram";
import { Player } from "../value/Player";
import { Kifu } from "../model/Kifu";
import { Move } from "../model/type/Move";
import { MoveFromBoard } from "../model/MoveFromBoard";
import { MoveFromStand } from "../model/MoveFromStand";
import { ShogiBoardService } from "./ShogiBoardService";

export class DiagramService {
  static getInitialDiagram(): Diagram {
    const InitialShogiBoard = ShogiBoardService.factory();
    return new Diagram(Player.Sente, InitialShogiBoard);
  }

  static generateDiagramFromKifu(kifu: Kifu, cursor: number | null = null) {
    if (cursor) {
      return;
    }
    let diagram = kifu.initialDiagram;
    const diagramService = new DiagramService();
    kifu.history.forEach((move) => {
      diagram = diagramService.moved(diagram, move);
    });
  }

  public moved(diagram: Diagram, move: Move): Diagram {
    if (move.player !== diagram.currentTurn) {
      throw Error(
        `Turn unmatched, current Turn is ${diagram.currentTurn}, passed move's player is ${move.player}`,
      );
    }
    if (move instanceof MoveFromBoard) {
      return this.movedFromBoard(diagram, move);
    }
    if (move instanceof MoveFromStand) {
      return this.movedFromStand(diagram, move);
    }
    throw Error(
      "Argument move was not a instanceof Move. Something Wrong.",
    );
  }

  private movedFromBoard(diagram: Diagram, move: MoveFromBoard): Diagram {
    return diagram;
  }

  private movedFromStand(diagram: Diagram, move: MoveFromStand): Diagram {
    return diagram;
  }

  // private static _deploy_pieces_into_shogi_board(
  //   piecess: PiecesInShogiBoardAsArray,
  // ) {
  //   const shogi_board: ShogiBoard = new ShogiBoardFactory().create_shogi_board();
  //   piecess.map((pieces: (Piece | null)[], i) => {
  //     pieces.map((piece: Piece | null, j) => {
  //       if (piece) {
  //         const f = i + 1;
  //         const r = j + 1;
  //         shogi_board[f][r].put_piece(piece);
  //       }
  //     });
  //   });
  //   return shogi_board;
  // }
}
