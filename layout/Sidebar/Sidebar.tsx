import { ISidebar} from "./Sidebar.props";
//import styles from './Sidebar.module.css';

export const Sidebar = ({ ...props }: ISidebar): JSX.Element => {
  return <section {...props}>Sidebar</section>;
};
