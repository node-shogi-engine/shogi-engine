import { PIECE_TYPE_LIST } from "../../const/PieceType";
import { PieceType } from "../type/PieceClasses";

export class PieceClasses {
  static readonly King: PieceType = PIECE_TYPE_LIST[0];

  static readonly Gold: PieceType = PIECE_TYPE_LIST[1];

  static readonly Rook: PieceType = PIECE_TYPE_LIST[2];

  static readonly Bishop: PieceType = PIECE_TYPE_LIST[3];

  static readonly Silver: PieceType = PIECE_TYPE_LIST[4];

  static readonly kNight: PieceType = PIECE_TYPE_LIST[5];

  static readonly Lance: PieceType = PIECE_TYPE_LIST[6];

  static readonly Pawn: PieceType = PIECE_TYPE_LIST[7];

  static readonly PieceInitialMap: { [key: string]: string } = {
    [PieceClasses.King]: "K",
    [PieceClasses.Gold]: "G",
    [PieceClasses.Rook]: "R",
    [PieceClasses.Bishop]: "B",
    [PieceClasses.Silver]: "S",
    [PieceClasses.kNight]: "N",
    [PieceClasses.Lance]: "L",
    [PieceClasses.Pawn]: "P",
  };
}
