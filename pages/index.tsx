import { GetStaticProps } from "next";
import styles from "./index.module.css";
import { Htag, Paragraph } from "../components";
import { WithLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Htag tag="h2">Эта страница находится в разработке!</Htag>
        <Paragraph size="m">
          Чтобы увидеть первую версию приложения, нажмите на меню справа и
          выберете подходящие вам курсы!
        </Paragraph>
      </div>
    </main>
  );
}

export default WithLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
