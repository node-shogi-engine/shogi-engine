import { PieceType } from "../../../../composeDiagram/type/PieceClasses";
import { PlayerType } from "../../../../composeDiagram/type/Player";
import { SquarePosition } from "../../../../composeDiagram/value/SquarePosition";
import { PieceMoveAsPlain } from "../../../../service/PieceMove/PieceMoveAsPlain";

export function moveAreaTest(
  piece_type: PieceType,
  piece_master: PlayerType,
  currnetPosition: SquarePosition,
  // expect: number[][],
) {
  // PieceMove 生成
  const pieceMove = new PieceMoveAsPlain(
    piece_type,
    currnetPosition,
    piece_master,
  );
  const moveArea: SquarePosition[] = pieceMove.getCanMoveArea();
  // テストの容易性のため、SquarePosition を FileRankPair 型にする
  const moveAreaAsPair: number[][] = moveArea.map(
    (square_position) => square_position.pair,
  );
  // console.dir(moveAreaAsPair);
  // 期待する SquarePosition[] の長さを比較
  return { moveArea, moveAreaAsPair };
  // expect(moveArea.length).toEqual(expect.length);
  // 期待する FileRankPair との比較、配列として比較
  // if (expect.length > 0) {
  //   moveAreaAsPair.forEach((file_rank_pair, i) => {
  //     expect(file_rank_pair).toEqual(expect[i]);
  //   });
  // }
}
