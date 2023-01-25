import { Player } from "./Player";
import { PlayerType } from "../type/Player";

const SwapTurnMap = new Map<PlayerType, PlayerType>([
  [Player.Sente, Player.Gote],
  [Player.Gote, Player.Sente],
]);

export class Turn {
  constructor(private currentTurn: PlayerType) {}

  get current_turn(): PlayerType {
    return this.currentTurn;
  }

  public advance() {
    const nextTurn = SwapTurnMap.get(this.currentTurn);
    if (nextTurn) {
      this.currentTurn = nextTurn;
    }
    throw Error("Turn.advance method was faild. Something went wrong.");
  }
}
