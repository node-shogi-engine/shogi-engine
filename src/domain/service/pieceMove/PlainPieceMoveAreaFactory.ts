import { RookMoveArea } from "@/domain/pieceMoveArea/model/PieceClasses/RookMoveArea";
import { BishopMoveArea } from "@/domain/pieceMoveArea/model/PieceClasses/BishopMoveArea";
import { kNightMoveArea } from "@/domain/pieceMoveArea/model/PieceClasses/kNightMoveArea";
import { LanceMoveArea } from "@/domain/pieceMoveArea/model/PieceClasses/LanceMoveArea";
import { PieceType } from "@/domain/composeDiagram/type/PieceClasses";
import { IPieceMoveArea } from "@/domain/pieceMoveArea/interface/IPieceMoveArea";
import { OneSquareMoveArea } from "@/domain/pieceMoveArea/model/PieceClasses/OneSquareMoveArea";

export class PieceMoveAreaFactory {
  private static makeClass(pieceType: PieceType): IPieceMoveArea {
    const isOneSquarePiece = Object.keys(
      OneSquareMoveArea.OneSquareMoveArea,
    ).includes(pieceType);
    if (isOneSquarePiece) {
      return new OneSquareMoveArea(pieceType);
    }
    if (pieceType === "Rook") {
      return new RookMoveArea();
    }
    if (pieceType === "Bishop") {
      return new BishopMoveArea();
    }
    if (pieceType === "Lance") {
      return new LanceMoveArea();
    }
    if (pieceType === "kNight") {
      return new kNightMoveArea();
    }
    throw Error(`The value "${pieceType}" is not included in piece type list.`);
  }

  static factory(pieceType: PieceType): IPieceMoveArea {
    const pieceMoveArea: IPieceMoveArea = this.makeClass(pieceType);
    return pieceMoveArea;
  }
}
