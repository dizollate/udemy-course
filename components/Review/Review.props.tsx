import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReviewModel } from "../../interfaces/product.interface";

export interface IReview extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  review: ReviewModel;
}