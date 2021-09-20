import { Menu } from "../Menu/Menu";
import { ISidebar } from "./Sidebar.props";
import Logo from '../logo.svg';
import styles from './Sidebar.module.css';
import cn from 'classnames';

export const Sidebar = ({ ...props }: ISidebar): JSX.Element => {
  return (
    <section {...props} className={styles.sidebar}>
      <Logo className={styles.logo}/>
      <div>Search</div>
      <Menu />
    </section>
  );
};
