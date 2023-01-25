import { PlayerType } from "../type/Player";

export class Player {
  static readonly Sente: PlayerType = "Sente";

  static readonly Gote: PlayerType = "Gote";

  constructor(public readonly type: PlayerType) {}
}
