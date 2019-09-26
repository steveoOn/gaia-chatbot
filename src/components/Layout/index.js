import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { ReactComponent as IconBack } from "../../static/icon-arrow-back.svg";
import { ReactComponent as IconTopGaga } from "../../static/icon-topbar-gaga.svg";

/////////// Components ///////////
const Layout = props => {
  return (
    <Fragment>
      <nav>
        <Link to="/">
          <IconBack />
        </Link>
        盖雅精灵
        <IconTopGaga className="icon-top-gaga" />
      </nav>
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
