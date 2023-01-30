import { FileRankPair } from "../type/FileRankNumber";
import { PlayerType } from "../type/Player";
import { PieceOnBoard } from "./PieceOnBoard";

export class MoveFromBoard {
  constructor(
    public readonly player: PlayerType,
    public readonly from: FileRankPair,
    public readonly to: FileRankPair,
    public readonly piece: PieceOnBoard,
    public readonly promotion: boolean,
  ) {}
}
