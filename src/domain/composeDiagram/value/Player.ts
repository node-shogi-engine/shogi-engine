import { PlayerTypeList } from "@/domain/const/Player";
import { PlayerType } from "@/domain/composeDiagram/type/Player";

export class Player {
  static readonly Sente: PlayerType = PlayerTypeList[0];

  static readonly Gote: PlayerType = PlayerTypeList[1];

  constructor(public readonly type: PlayerType) {}
}
