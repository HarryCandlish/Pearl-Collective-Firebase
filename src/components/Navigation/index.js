import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";

import navStyles from "../../modules/nav.module.scss";

import { AuthUserContext } from "../Session";

const Navigation = ({ authUser }) => (
  <div>
    {" "}
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <div>
    <ul className={navStyles.list}>
      <Link to={ROUTES.PROJECTS}>
        <li>Projects</li>
      </Link>
      <Link to={ROUTES.CLIENTS}>
        <li>Clients</li>
      </Link>
      <Link to={ROUTES.TEAM}>
        <li>Team</li>
      </Link>
      <Link to={ROUTES.ABOUT}>
        <li>About</li>
      </Link>
    </ul>
  </div>
);

export default Navigation;
