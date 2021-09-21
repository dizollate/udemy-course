import styles from "./Advantages.module.css";
import { IAdvantages } from "./Advantages.props";
import cn from "classnames";
import { Card } from "..";
import OkayIcon from "./okay.svg";
import { priceRu } from "../../helpers/helpers";

export const Advantages = ({
  advantages
}: IAdvantages): JSX.Element => {
  return (
    <>
      {advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <OkayIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline}/>
          <div className={styles.description}>{a.description}</div>
        </div>
      ))}
    </>
  );
};
