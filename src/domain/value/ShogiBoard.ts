import { Square } from "../type/Square";

export interface ShogiBoard {
  [key: number]: { [key: number]: Square };
}
