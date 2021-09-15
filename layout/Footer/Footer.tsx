import { IFooter} from "./Footer.props";
//import styles from './Footer.module.css';

export const Footer = ({ ...props }: IFooter): JSX.Element => {
  return <footer {...props}>Footer</footer>;
};
