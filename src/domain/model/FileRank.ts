import { FILE_RANK_NUMBER_LIST } from "../const/FileRankNumber";
import { FileRankNumber, FileRankPair } from "../type/FileRankNumber";

export class FileRank {
  static get numbers(): number[] {
    return FILE_RANK_NUMBER_LIST.map((_, i) => 1 + i);
  }

  static is_in_file_rank_number(
    file_number: number,
    rank_number: number,
  ): boolean {
    const numbers: number[] = FILE_RANK_NUMBER_LIST.map((n) => n as number);
    if (!numbers.includes(file_number)) {
      return false;
    }
    if (!numbers.includes(rank_number)) {
      return false;
    }
    return true;
  }

  static castNumberToFileRank(number: number): FileRankNumber {
    const numbers: number[] = FILE_RANK_NUMBER_LIST.map((n) => n as number);
    const index = numbers.indexOf(number);
    if (index < 0) {
      throw Error(
        `The number "${number}" is not in range of file rank numbers.`,
      );
    }
    return FILE_RANK_NUMBER_LIST[index];
  }

  static map<T>(func: (file: FileRankNumber, rank: FileRankNumber) => T): T[] {
    const resultArray: T[] = [];
    FILE_RANK_NUMBER_LIST.forEach((file) => {
      FILE_RANK_NUMBER_LIST.forEach((rank) => {
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

  static forEach<T>(
    func: (file: FileRankNumber, rank: FileRankNumber) => T,
  ): void {
    FILE_RANK_NUMBER_LIST.forEach((file) => {
      FILE_RANK_NUMBER_LIST.forEach((rank) => {
        func(file, rank);
      });
    });
  }

  static find(
    func: (file: FileRankNumber, rank: FileRankNumber) => boolean,
  ): FileRankPair[] | null {
    const hit: FileRankPair[] = [];
    FILE_RANK_NUMBER_LIST.forEach((file) => {
      FILE_RANK_NUMBER_LIST.forEach((rank) => {
        const result = func(file, rank);
        if (result) {
          hit.push([file, rank]);
        }
      });
    });
    return hit.length > 0 ? hit : null;
  }
}
