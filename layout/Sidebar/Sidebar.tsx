import { Menu } from "../Menu/Menu";
import { ISidebar } from "./Sidebar.props";
import Logo from '../logo.svg';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Search } from "../../components";

export const Sidebar = ({ className, ...props }: ISidebar): JSX.Element => {
  return (
    <section {...props} className={cn(styles.sidebar, className)}>
      <Logo className={styles.logo}/>
      <Search />
      <Menu />
    </section>
  );
};
