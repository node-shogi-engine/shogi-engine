import { Piece } from "../Piece";
import { PieceClasses } from "../../value/PieceClasses";
import { Player } from "../../value/Player";
import { PieceOnBoard } from "../PieceOnBoard";

test("Piece type, promotable test", () => {
  // expect success
  const test1 = () => {
    const piece = new Piece(PieceClasses.King);
    const pieceOnBoard = new PieceOnBoard(piece, Player.Sente);
    return pieceOnBoard;
  };
  expect(test1).not.toThrow();
  // expect exception
  const test2 = () => {
    const piece = new Piece(PieceClasses.King);
    const pieceOnBoard = new PieceOnBoard(piece, Player.Sente);
    pieceOnBoard.promotion();
    return pieceOnBoard;
  };
  expect(test2).toThrow();
});

test("Piece be taken test, then change master", () => {
  const p = new Piece("Pawn", Player.Sente, false);
  expect(p.master).toBe(Player.Sente);
  p.be_taken_by(Player.Gote);
  expect(p.master).toBe(Player.Gote);
  p.be_taken_by(Player.Sente);
  expect(p.master).toBe(Player.Sente);
});

test("Piece equals test", () => {
  const p1 = new Piece("Pawn", Player.Sente, false);
  const p2 = new Piece("Pawn", Player.Sente, false);
  expect(p1.equals(p2)).toBe(true);
});
