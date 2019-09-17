import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import Dash from "../Dash";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import ProjectsPage from "../Projects";
import ClientsPage from "../Clients";
import TeamPage from "../Team";
import AboutPage from "../About";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.DASH} component={Dash} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.PROJECTS} component={ProjectsPage} />
      <Route path={ROUTES.CLIENTS} component={ClientsPage} />
      <Route path={ROUTES.TEAM} component={TeamPage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
