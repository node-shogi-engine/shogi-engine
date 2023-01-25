import { PieceType } from "../type/Piece";
import { PieceTypes } from "../const/PieceTypes";

const NotPromotablePieceTypes: PieceType[] = ["King", "Gold"];
const PromotableMap: { [key: string]: boolean } = Object.fromEntries(
  PieceTypes.map((type) => (NotPromotablePieceTypes.includes(type) ? [type, false] : [type, true])),
);

const PieceInitialMap: { [key: string]: string } = {
  King: "K",
  Gold: "G",
  Rook: "R",
  Bishop: "B",
  Silver: "S",
  kNight: "N",
  Lance: "L",
  Pawn: "P",
};

export class Piece {
  public readonly isPromotable: boolean;

  public readonly typeInitial: string;

  constructor(
    public readonly type: PieceType,
    private isPromoted: boolean = false,
  ) {
    this.isPromotable = PromotableMap[this.type];
    // exception
    if (!this.isPromotable && this.is_promoted) {
      throw new Error(
        `This piece type can not promotion. Piece type: "${this.type}"`,
      );
    }
    this.typeInitial = PieceInitialMap[this.type];
  }

  get is_promoted(): boolean {
    return this.isPromoted;
  }

  public promotion(): void {
    if (this.isPromotable) {
      this.isPromoted = true;
    }
  }
}
