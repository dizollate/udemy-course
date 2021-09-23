import { IFooter } from "./Footer.props";
import styles from "./Footer.module.css";

export const Footer = ({ ...props }: IFooter): JSX.Element => {
  return (
    <footer {...props}>
      <div className={styles.content}>
        <span className={styles.rights}>
          OwlTop © 2020 - 2021 Все права защищены
        </span>
        <div className={styles.agreement_privacy}>
          <span className={styles.agreement}>Пользовательское соглашение</span>
          <span className={styles.privacy}>Политика конфиденциальности</span>
        </div>
      </div>
    </footer>
  );
};
