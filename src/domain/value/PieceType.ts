import { PieceTypeList } from "../const/PieceType";
import { PieceType } from "../type/Piece";

export class PieceClasses {
  static readonly King: PieceType = PieceTypeList[0];

  static readonly Gold: PieceType = PieceTypeList[1];

  static readonly Rook: PieceType = PieceTypeList[2];

  static readonly Bishop: PieceType = PieceTypeList[3];

  static readonly Silver: PieceType = PieceTypeList[4];

  static readonly kNight: PieceType = PieceTypeList[5];

  static readonly Lance: PieceType = PieceTypeList[6];

  static readonly Pawn: PieceType = PieceTypeList[7];
}
