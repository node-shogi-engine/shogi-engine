import { Diagram } from "./Diagram";
import { Move } from "./type/Move";

export class Kifu {
  constructor(
    public readonly initialDiagram: Diagram,
    private moveHistory: Move[] = [],
  ) {}

  get history(): Move[] {
    return this.moveHistory;
  }

  public addMove(move: Move) {
    this.moveHistory.push(move);
  }
}
