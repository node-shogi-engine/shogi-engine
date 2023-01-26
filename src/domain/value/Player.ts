import { PlayerTypeList } from "../const/Player";
import { PlayerType } from "../type/Player";

export class Player {
  static readonly Sente: PlayerType = PlayerTypeList[0];

  static readonly Gote: PlayerType = PlayerTypeList[1];

  constructor(public readonly type: PlayerType) {}
}
