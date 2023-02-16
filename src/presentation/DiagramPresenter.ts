import { FileRankService } from "@/domain/service/composeDiagram/FileRankService";
import { PIECE_TYPE_LIST } from "@/domain/const/PieceType";
import { Diagram } from "@/domain/composeDiagram/model/Diagram";
import { PieceOnBoard } from "@/domain/composeDiagram/model/pieceWrapper/PieceOnBoard";
import { PieceStand } from "@/domain/composeDiagram/model/PieceStand";
import { SquareContent } from "@/domain/composeDiagram/type/SquareContent";
import { PieceClasses } from "@/domain/composeDiagram/value/PieceClasses";
// helper
import { range, divideArray } from "@/domain/service/utils";
import { ShogiBoard } from "@/domain/composeDiagram/value/ShogiBoard";

const getSquareContentString = (squareContent: SquareContent): string => {
  if (squareContent instanceof PieceOnBoard) {
    return squareContent.initial;
  }
  return "-";
};

const getPieceStandString = (pieceStand: PieceStand): string => {
  const pieceTypeNumberMap: { [key: string]: number } = {};
  PIECE_TYPE_LIST.forEach((pieceType) => {
    const number = pieceStand.getNumberOfPieceType(pieceType);
    pieceTypeNumberMap[pieceType] = number;
  });
  // pieceType ごとに文字列を作成
  const existPieceTypeStringList: string[] = [];
  PIECE_TYPE_LIST.forEach((pieceType) => {
    const number = pieceTypeNumberMap[pieceType];
    if (number > 0) {
      let pieceTypeString = PieceClasses.PieceInitialMap[pieceType];
      pieceTypeString += `=${number}`;
      existPieceTypeStringList.push(pieceTypeString);
    }
  });
  // pieceType ごとの文字列を空文字や改行で連結する
  const divideArrayBy3 = divideArray(existPieceTypeStringList, 3);
  let pieceStandAsString = divideArrayBy3
    .map((stringArray) => stringArray.join(" "))
    .join("\n");
  pieceStandAsString += "\n";
  return pieceStandAsString;
};

const getShogiBoardString = (shogiBoard: ShogiBoard) => {
  let shogiBoardAsString = "";
  // 枠も表示するため、0 ~ 9 でループを回す
  range(0, 10).forEach((i) => {
    // 文字列は上からなので、段の表示は 1 から昇順
    const r = i;
    range(0, 10).forEach((j) => {
      // 文字列は左からなので、筋の表示は 9 から降順
      const f = 9 - j;
      if (r === 0) {
        if (f === 0) {
          shogiBoardAsString += " ";
          return;
        }
        // 筋の番号を表記
        shogiBoardAsString += f;
        return;
      }
      if (f === 0) {
        // 段の番号を表記
        shogiBoardAsString += r;
        return;
      }
      // コマのイニシャルか "-" を表記
      const file = FileRankService.castNumberToFileRank(f);
      const rank = FileRankService.castNumberToFileRank(r);
      const squareContent = shogiBoard[file][rank];
      shogiBoardAsString += getSquareContentString(squareContent);
    });
    shogiBoardAsString += "\n";
  });
  return shogiBoardAsString;
};

export class DiagramPresenter {
  static show(diagram: Diagram) {
    const gotePieceStandString = getPieceStandString(
      diagram.pieceStandPair.Gote,
    );
    const shogiBoardString = getShogiBoardString(diagram.shogiBoard);
    const sentePieceStandString = getPieceStandString(
      diagram.pieceStandPair.Sente,
    );
    return gotePieceStandString + shogiBoardString + sentePieceStandString;
  }
}
