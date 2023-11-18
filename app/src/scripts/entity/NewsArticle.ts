import {NewsContents} from "./NewsContents.ts";

export interface NewsArticle {
    date: Date,
    contents: NewsContents[],
}
