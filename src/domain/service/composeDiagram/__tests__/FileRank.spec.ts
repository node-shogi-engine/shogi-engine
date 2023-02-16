import { FileRankService } from "@/domain/service/composeDiagram/FileRankService";

test("FileRank isInFileRankNumber method test", () => {
  expect(FileRankService.isInFileRankNumber(1, 1)).toBe(true);
  expect(FileRankService.isInFileRankNumber(1, 9)).toBe(true);
  expect(FileRankService.isInFileRankNumber(9, 9)).toBe(true);
  expect(FileRankService.isInFileRankNumber(1, 0)).toBe(false);
  expect(FileRankService.isInFileRankNumber(0, 1)).toBe(false);
  expect(FileRankService.isInFileRankNumber(10, 9)).toBe(false);
  expect(FileRankService.isInFileRankNumber(9, 10)).toBe(false);
});
