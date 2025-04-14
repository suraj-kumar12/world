import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();

  return (
    <div className="cloak__wrapper">
      <div className="cloak__container">
        <div className="info">
          <h1>404</h1>
          <h2>We can't find that page</h2>
          <p>
            We're fairly sure that page used to be here, but it seems to have
            gone missing. We do apologize on its behalf.
          </p>
          <NavLink to="/" className="btn-content">
            Go to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
