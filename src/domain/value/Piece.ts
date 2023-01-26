import { assert } from "console";
import { PieceType } from "../type/Piece";
import { PieceClasses } from "./PieceType";

// const NotPromotablePieceTypeList: PieceType[] = [
//   PieceClasses.King,
//   PieceClasses.Gold,
// ];
const PromotableMap: { [key: string]: boolean } = {
  [PieceClasses.King]: false,
  [PieceClasses.Gold]: false,
  [PieceClasses.Rook]: true,
  [PieceClasses.Bishop]: true,
  [PieceClasses.Silver]: true,
  [PieceClasses.kNight]: true,
  [PieceClasses.Lance]: true,
  [PieceClasses.Pawn]: true,

};

const PieceInitialMap: { [key: string]: string } = {
  [PieceClasses.King]: "K",
  [PieceClasses.Gold]: "G",
  [PieceClasses.Rook]: "R",
  [PieceClasses.Bishop]: "B",
  [PieceClasses.Silver]: "S",
  [PieceClasses.kNight]: "N",
  [PieceClasses.Lance]: "L",
  [PieceClasses.Pawn]: "P",
};

export class Piece {
  public readonly isPromotable: boolean;

  public readonly typeInitial: string;

  private isReversed: boolean = false;

  constructor(public readonly type: PieceType) {
    this.isPromotable = PromotableMap[this.type];
    this.typeInitial = PieceInitialMap[this.type];
  }

  get isPromoted(): boolean {
    return this.isReversed;
  }

  public promotion(): void {
    assert(
      this.isPromotable && !this.isReversed,
      `This Piece can not promote, isPromotable: ${String(
        this.isPromotable,
      )}, isPromoted: ${String(this.isReversed)}`,
    );
    this.isReversed = true;
  }

  public beTaken(): void {
    this.isReversed = false;
  }
}
