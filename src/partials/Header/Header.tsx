import React from "react";
import classes from "./Header.module.scss";
import { HeaderLink } from "./HeaderLink/HeaderLink";

export const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderTitle}>Tasks App</div>
      <nav className="m-auto">
        <HeaderLink url="/">Home</HeaderLink>
        <HeaderLink url="/about">About</HeaderLink>
        <HeaderLink url="/stats">Stats</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;


