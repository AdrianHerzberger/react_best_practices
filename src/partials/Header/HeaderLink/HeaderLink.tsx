import { NavLink } from "react-router-dom";
import classes from "./HeaderLink.module.scss";
import { ReactNode } from "react";

type HeaderLinkProps = {
  url: string;
  children: ReactNode;
};

export const HeaderLink = ({ children, url }: HeaderLinkProps) => {
  return (
    <NavLink className={classes.HeaderLink + " ml-2 mr-2"} to={url}>
      {children}
    </NavLink>
  );
};

export default HeaderLink;
