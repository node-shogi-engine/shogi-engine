import { Diagram } from "../../composeDiagram/model/Diagram";
import { Kifu } from "../../kifu/Kifu";
import { Move } from "../../pieceMove/type/Move";
import { MoveFromBoard } from "../../pieceMove/model/MoveFromBoard";
import { MoveFromStand } from "../../pieceMove/model/MoveFromStand";
import { ShogiBoardService } from "./ShogiBoardService";
import { PLAYER_OPPOSITION } from "../../composeDiagram/const/PlayerOpposition";
import { PieceOnBoard } from "../../composeDiagram/model/pieceWrapper/PieceOnBoard";

export class DiagramService {
  static diagram: Diagram = DiagramService.getInitialDiagram();

  static getInitialDiagram(): Diagram {
    const InitialShogiBoard = ShogiBoardService.factory();
    return new Diagram(InitialShogiBoard);
  }

  static generateDiagramFromKifu(
    kifu: Kifu,
    cursor: number | null = null,
  ): Diagram {
    const sliceArguments = [0];
    if (cursor && cursor <= kifu.history.length) {
      sliceArguments.push(cursor);
    }
    const history = kifu.history.slice(...sliceArguments);
    const diagram = kifu.initialDiagram;
    history.forEach((move) => {
      DiagramService.moved(diagram, move);
    });
    return diagram;
  }

  static moved(diagram: Diagram, move: Move): Diagram {
    if (move.player !== diagram.turn) {
      throw Error(
        `Turn unmatched, current Turn is ${
          diagram.turn
        }, passed move's player is ${move.player as string}`,
      );
    }
    if (move instanceof MoveFromBoard) {
      return DiagramService.movedFromBoard(diagram, move);
    }
    if (move instanceof MoveFromStand) {
      return DiagramService.movedFromStand(diagram, move);
    }
    throw Error("Argument move was not a instanceof Move. Something Wrong.");
  }

  private static movedFromBoard(
    diagram: Diagram,
    move: MoveFromBoard,
  ): Diagram {
    const squareContent = {
      from: diagram.getSquareContent(move.from),
      to: diagram.getSquareContent(move.to),
    };
    // from に駒がいない場合、エラー
    if (!squareContent.from) {
      throw Error(
        `There is no piece in file:${move.from[0]}, rank:${move.from[1]}`,
      );
    }
    // from の駒
    const pieceInFrom = squareContent.from.moveOut();
    // to に駒がいる場合、駒を取る
    if (squareContent.to) {
      const piece = squareContent.to.beToken();
      const otherPlayer = PLAYER_OPPOSITION[squareContent.to.master];
      diagram.pieceStandPair[otherPlayer].takePiece(piece);
    }
    // to に駒を移動
    const pieceOnBoard = new PieceOnBoard(pieceInFrom, move.player);
    diagram.setSquareContentWithPiece(move.to, pieceOnBoard);
    // from を空に
    diagram.setSquareContentToNull(move.from);
    // 手番進行
    diagram.turnProgress();
    return diagram;
  }

  private static movedFromStand(
    diagram: Diagram,
    move: MoveFromStand,
  ): Diagram {
    const squareContent = {
      to: diagram.getSquareContent(move.to),
    };
    // to に駒がいる場合、エラー
    if (squareContent.to) {
      throw Error(
        `There is a piece of ${squareContent.to.pieceType} in file:${move.to[0]}, rank:${move.to[1]}`,
      );
    }
    // from から駒を取得、手駒をへらす
    const pieceInFrom = move.from.releasePiece(move.piece.type);
    // to に駒を置く
    const pieceOnBoard = new PieceOnBoard(pieceInFrom, move.player);
    diagram.setSquareContentWithPiece(move.to, pieceOnBoard);
    // 手番進行
    diagram.turnProgress();
    return diagram;
  }
}
