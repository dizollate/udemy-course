import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode;
  size?: 's' | 'm';
  color: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
  className?: string;
}