import { Diagram } from "./Diagram";
import { Move } from "../type/Move";

export class Kifu {
  constructor(
    public readonly initialDiagram: Diagram,
    private moveHistory: Move[] = [],
  ) {}

  get history(): Move[] {
    return this.moveHistory;
  }

  // service へ
  get diagram(): Diagram {
    const diagram = this.initialDiagram;
    this.moveHistory.forEach((move) => {
      diagram.moved(move);
    });
    return diagram;
  }

  get steps(): number {
    return this.moveHistory.length;
  }

  get last_move(): Move | null {
    if (this.steps < 1) {
      return null;
    }
    return this.moveHistory.at(-1) as Move;
  }

  public add_move(move: Move) {
    this.moveHistory.push(move);
  }
}
