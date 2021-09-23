import { IHeader } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import Logo from "../logo.svg";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Header = ({ className, ...props }: IHeader): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.35,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        ease: "easeIn",
        duration: 0.35,
      },
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon
        appearance="white"
        icon="menu"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar className={styles.menuSidebar} />
        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};
