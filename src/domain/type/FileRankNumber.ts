import { FileRankNumberList } from "../const/FileRankNumber";

export type FileRankNumber = (typeof FileRankNumberList)[number];
export type FileRankPair = [FileRankNumber, FileRankNumber];
