import React from "react";
import { Link } from "react-router-dom";

const SiteLogo = () => (
  <Link to="/" className="site-logo" aria-label="Santiago 76 home">
    <img
      src="/assets/images/logo/santiago-76-mark.png"
      alt=""
      width="44"
      height="44"
    />
    <span>Santiago 76</span>
  </Link>
);

export default SiteLogo;
