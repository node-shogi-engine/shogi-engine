import { RookMoveArea } from "@/domain/pieceMove/model/PieceClasses/RookMoveArea";
import { BishopMoveArea } from "@/domain/pieceMove/model/PieceClasses/BishopMoveArea";
import { kNightMoveArea } from "@/domain/pieceMove/model/PieceClasses/kNightMoveArea";
import { LanceMoveArea } from "@/domain/pieceMove/model/PieceClasses/LanceMoveArea";
import { PieceType } from "@/domain/composeDiagram/model/Piece";
import { PIECE_CLASS_MOVES } from "@/domain/pieceMove/const/PieceClassMoves";
import { IPieceMoveArea } from "@/domain/pieceMove/interface/PieceMoveAsPlain";

export class PieceMoveAreaFactory {
  private static makeClass(pieceType: PieceType): IPieceMoveArea {
    const isOneSquarePiece = Object.keys(
      OneSquareMoveArea.OneSquareMoveArea,
    ).includes(pieceType);
    if (pieceType) {
      return new OneSquareMoveArea(pieceType);
    }
    if (pieceType == "Rook") {
      return new RookMoveArea();
    }
    if (pieceType == "Bishop") {
      return new BishopMoveArea();
    }
    if (pieceType == "Lance") {
      return new LanceMoveArea();
    }
    if (pieceType == "kNight") {
      return new kNightMoveArea();
    }
    throw Error(`The value "${pieceType}" is not included in piece type list.`);
  }

  static factory(pieceType: PieceType): IPieceMoveArea {
    const pieceMoveArea: IPieceMoveArea = this.makeClass(pieceType);
    return pieceMoveArea;
  }
}
