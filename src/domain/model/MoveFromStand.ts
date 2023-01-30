import { PieceStand } from "./PieceStand";
import { PlayerType } from "../type/Player";
import { FileRankPair } from "../type/FileRankNumber";
import { PieceOnStand } from "./PieceOnStand";

export class MoveFromStand {
  constructor(
    public readonly player: PlayerType,
    public readonly from: PieceStand,
    public readonly to: FileRankPair,
    public readonly piece: PieceOnStand,
  ) {}
}
