import { PieceStand } from "@/domain/composeDiagram/model/PieceStand";
import { FileRankPair } from "@/domain/composeDiagram/type/FileRankNumber";
import { PlayerType } from "@/domain/composeDiagram/type/Player";

export interface MoveFromStand {
  player: PlayerType,
  from: PieceStand,
  to: FileRankPair
}
