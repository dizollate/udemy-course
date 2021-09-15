import { FunctionComponent } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ILayout } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <body className={styles.body}>{children}</body>
      <Footer className={styles.footer} />
    </div>
  );
};

export const WithLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
