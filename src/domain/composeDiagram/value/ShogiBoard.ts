import { SquareContent } from "@/domain/composeDiagram/type/SquareContent";

export interface ShogiBoard {
  [key: number]: { [key: number]: SquareContent };
}
