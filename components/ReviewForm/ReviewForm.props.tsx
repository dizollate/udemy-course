import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ProductModel } from "../../interfaces/product.interface";

export interface IReviewForm
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string;
}
