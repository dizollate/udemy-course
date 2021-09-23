
import React from "react";
import {
  Htag,
} from "../components";
import { WithLayout } from "../layout/Layout";

function Error500(): JSX.Element {
 

  return (
    <> 
      <Htag tag='h1'>Ошибка 500</Htag>
    </>
  );
}


export default WithLayout(Error500);