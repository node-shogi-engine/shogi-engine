import { Player } from "../../../../composeDiagram/value/Player";
import { SquarePosition } from "../../../../composeDiagram/value/SquarePosition";
import { moveAreaTest } from "./_helper";

/**
 * テストケース: (fike,rank)
 *  1,1
 *  5,5
 *  3,8
 *
 *  王・飛車・角は移動範囲判定に先後関係なし
 */
test("get PieceMove test as \"Bishop\"", () => {
  const pieceType = "Bishop";
  // 1,1
  const currentPosition = new SquarePosition(1, 1);
  const playerType = Player.Sente;
  const expected: Array<any> = [
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 9],
  ];
  const expectedLength: number = expected.length;
  const { moveArea, moveAreaAsPair } = moveAreaTest(
    pieceType,
    playerType,
    currentPosition,
  );
  expect(moveArea.length).toEqual(expectedLength);
  const expectedPair = [
    [],
  ];
  expect(moveAreaAsPair).toEqual(expectedPair);
});

test.skip("get PieceMove test as \"Bishop\"", () => {
  const pieceType = "Bishop";
  // 5,5
  const currentPosition = new SquarePosition(5, 5);
  const playerType = Player.Sente;
  const expected = [
    [4, 4],
    [3, 3],
    [2, 2],
    [1, 1],
    //
    [4, 6],
    [3, 7],
    [2, 8],
    [1, 9],
    //
    [6, 4],
    [7, 3],
    [8, 2],
    [9, 1],
    //
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 9],
  ];
  const expectedLength: number = expected.length;
  const { moveArea, moveAreaAsPair } = moveAreaTest(
    pieceType,
    playerType,
    currentPosition,
  );
  expect(moveArea.length).toEqual(expectedLength);
  const expectedPair = [
    [],
  ];
  expect(moveAreaAsPair).toEqual(expectedPair);
});

test.skip("get PieceMove test as \"Bishop\"", () => {
  const pieceType = "Bishop";
  // 3,8
  const currentPosition = new SquarePosition(3, 8);
  const playerType = Player.Sente;
  const expected = [
    [2, 7],
    [1, 6],
    //
    [2, 9],
    //
    [4, 7],
    [5, 6],
    [6, 5],
    [7, 4],
    [8, 3],
    [9, 2],
    //
    [4, 9],
  ];
  const expectedLength: number = expected.length;
  const { moveArea, moveAreaAsPair } = moveAreaTest(
    pieceType,
    playerType,
    currentPosition,
  );
  expect(moveArea.length).toEqual(expectedLength);
  const expectedPair = [
    [],
  ];
  expect(moveAreaAsPair).toEqual(expectedPair);
});
