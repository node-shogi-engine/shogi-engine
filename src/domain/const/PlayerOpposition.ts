import { PlayerType } from "../type/Player";
import { Player } from "../value/Player";

interface PlayerOpposition {
  Sente: PlayerType;
  Gote: PlayerType;
}

export const PLAYER_OPPOSITION: PlayerOpposition = {
  Sente: Player.Gote,
  Gote: Player.Sente,
};
