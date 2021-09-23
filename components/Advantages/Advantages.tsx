import styles from "./Advantages.module.css";
import { IAdvantages } from "./Advantages.props";
import OkayIcon from "./okay.svg";

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
