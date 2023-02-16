import { PlayerType } from "@/domain/composeDiagram/type/Player";
import { Player } from "@/domain/composeDiagram/value/Player";

interface PlayerOpposition {
  Sente: PlayerType;
  Gote: PlayerType;
}

export const PLAYER_OPPOSITION: PlayerOpposition = {
  Sente: Player.Gote,
  Gote: Player.Sente,
};
