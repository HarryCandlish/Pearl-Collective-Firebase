import React from "react";

import landingStyles from "../../modules/landing.module.scss";

import pearl from "../../images/pearl.png";

const Landing = () => (
  <div>
    <div className={landingStyles.box}>
      <div>
        <img className={landingStyles.pearlImage} src={pearl} alt="pearls" />
        <h1 className={landingStyles.mainHeader}>Pearl Collective</h1>
      </div>
    </div>
    <h1 className={landingStyles.market}>
      Helping Non-Profits, Small Businesses, Volunteer Organisations get Ahead,
      Helping
    </h1>
    <p className={landingStyles.paragraph}>
      Helping Non-Profits, Small Businesses, Volunteer Organisations get Ahead
      Helping Non-Profits.
    </p>
  </div>
);

export default Landing;
