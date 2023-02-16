import { PieceOnBoard } from "@/domain/composeDiagram/model/pieceWrapper/PieceOnBoard";
import { PieceOnStand } from "@/domain/composeDiagram/model/pieceWrapper/PieceOnStand";
import { FileRankPair } from "@/domain/composeDiagram/type/FileRankNumber";
import { PieceMoveFrom } from "@/domain/pieceMove/type/PieceMoveFrom";
import { PlayerType } from "@/domain/composeDiagram/type/Player";

export interface Move {
  player: PlayerType;
  from: PieceMoveFrom;
  to: FileRankPair;
  piece: PieceOnStand | PieceOnBoard;
  promotion?: boolean;
}
