import { PieceStand } from "../model/PieceStand";
import { Player } from "../value/Player";
import { PieceStandPair } from "../type/PieceStandPair";

export const INITIAL_PIECE_STAND_PAIR: PieceStandPair = {
  Sente: new PieceStand(Player.Sente),
  Gote: new PieceStand(Player.Gote),
};
