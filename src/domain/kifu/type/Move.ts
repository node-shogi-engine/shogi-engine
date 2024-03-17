import { MoveFromBoard } from "@/domain/pieceMoveArea/model/MoveFromBoard";
import { MoveFromStand } from "@/domain/pieceMoveArea/model/MoveFromStand";

export type Move = MoveFromBoard | MoveFromStand;
