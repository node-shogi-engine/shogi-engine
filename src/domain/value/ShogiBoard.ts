import { SquareContent } from "../type/SquareContent";

export interface ShogiBoard {
  [key: number]: { [key: number]: SquareContent };
}
