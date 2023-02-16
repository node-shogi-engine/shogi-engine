import { FileRankPair } from "@/domain/composeDiagram/type/FileRankNumber";
import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { PieceOnBoard } from "@/domain/composeDiagram/model/pieceWrapper/PieceOnBoard";
import { Move } from "@/domain/pieceMove/type/Move";

export class MoveFromBoard implements Move {
  constructor(
    public readonly player: PlayerType,
    public readonly from: FileRankPair,
    public readonly to: FileRankPair,
    public readonly piece: PieceOnBoard,
    public readonly promotion: boolean,
  ) {}
}
