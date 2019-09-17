import React from "react";

import { withAuthorization } from "../Session";

const Dash = () => (
  <div>
    <h1>Personal Dash</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Dash);
