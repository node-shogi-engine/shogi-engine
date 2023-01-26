import { FileRankNumberList } from "../const/FileRankNumber";
import { FileRankNumber, FileRankPair } from "../type/FileRankNumber";

export class FileRank {
  static get numbers(): number[] {
    return FileRankNumberList.map((_, i) => 1 + i);
  }

  static is_in_file_rank_number(
    file_number: number,
    rank_number: number,
  ): boolean {
    const numbers: number[] = FileRankNumberList.map((n) => n as number);
    if (!numbers.includes(file_number)) {
      return false;
    }
    if (!numbers.includes(rank_number)) {
      return false;
    }
    return true;
  }

  static cast_number_to_file_rank(number: number): FileRankNumber {
    const numbers: number[] = FileRankNumberList.map((n) => n as number);
    const index = numbers.indexOf(number);
    if (index < 0) {
      throw Error(
        `The number "${number}" is not in range of file rank numbers.`,
      );
    }
    return FileRankNumberList[index];
  }

  static map<T>(func: (file: FileRankNumber, rank: FileRankNumber) => T): T[] {
    const resultArray: T[] = [];
    FileRankNumberList.forEach((file) => {
      FileRankNumberList.forEach((rank) => {
        const result = func(file, rank);
        resultArray.push(result);
      });
    });
    // for (let file of FileRank.numbers) {
    //   for (let rank of FileRank.numbers) {
    //     const result = func(file, rank);
    //     result_array.push(result);
    //   }
    // }
    return resultArray;
  }

  static find(
    func: (file: FileRankNumber, rank: FileRankNumber) => boolean,
  ): FileRankPair[] | null {
    const hit: FileRankPair[] = [];
    FileRankNumberList.forEach((file) => {
      FileRankNumberList.forEach((rank) => {
        const result = func(file, rank);
        if (result) {
          hit.push([file, rank]);
        }
      });
    });
    return hit.length > 0 ? hit : null;
  }
}
