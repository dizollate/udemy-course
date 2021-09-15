import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IParagraph extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  children: ReactNode;
  size: 's' | 'm' | 'l';
  bold?: boolean;
}