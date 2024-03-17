import { FileRankPair } from "@/domain/composeDiagram/type/FileRankNumber";
import { PlayerType } from "@/domain/composeDiagram/type/Player";

export interface MoveFromBoard {
  player: PlayerType,
  from: FileRankPair,
  to: FileRankPair,
  promotion: boolean
}
