import { FunctionComponent, useState, KeyboardEvent, useRef } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { ILayout } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";
import styles from "./Layout.module.css";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";
import cn from "classnames";

const Layout = ({ children }: ILayout): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
    useState<boolean>(false);

  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplayed(false);

  };

  return (
    <div className={styles.wrapper}>
      <a
        onFocus={() => setIsSkipLinkDisplayed(true)}

        tabIndex={1}
        className={cn(styles.skipLink, {
          [styles.displayed]: isSkipLinkDisplayed,
        })}
        onKeyDown={skipContentAction}
      >
        Сразу к содержанию
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body} ref={bodyRef} tabIndex={0}>{children}</div>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const WithLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
