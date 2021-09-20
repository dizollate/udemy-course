import { ReactNode } from "react";
import { HhData } from "../../interfaces/topPage.interface";

export interface IHhData extends HhData{
  children?: ReactNode;
}