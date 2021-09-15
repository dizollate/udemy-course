import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>{
  children?: ReactNode;
}