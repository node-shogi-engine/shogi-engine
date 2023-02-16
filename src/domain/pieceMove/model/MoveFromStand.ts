import { PieceStand } from "@/domain/composeDiagram/model/PieceStand";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { FileRankPair } from "@/domain/composeDiagram/type/FileRankNumber";
import { PieceOnStand } from "@/domain/composeDiagram/model/pieceWrapper/PieceOnStand";
import { Move } from "@/domain/pieceMove/type/Move";

export class MoveFromStand implements Move {
  constructor(
    public readonly player: PlayerType,
    public readonly from: PieceStand,
    public readonly to: FileRankPair,
    public readonly piece: PieceOnStand,
  ) {}
}
