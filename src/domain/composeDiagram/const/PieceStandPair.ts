import { PieceStand } from "@/domain/composeDiagram/model/PieceStand";
import { Player } from "@/domain/composeDiagram/value/Player";
import { PieceStandPair } from "@/domain/composeDiagram/type/PieceStandPair";

export const INITIAL_PIECE_STAND_PAIR: PieceStandPair = {
  Sente: new PieceStand(Player.Sente),
  Gote: new PieceStand(Player.Gote),
};
