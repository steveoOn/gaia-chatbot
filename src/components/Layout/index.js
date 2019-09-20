import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as IconBack } from "../../static/icon-arrow-back.svg";
import { ReactComponent as IconTopGaga } from "../../static/icon-topbar-gaga.svg";

/////////// Style ///////////
const NavBar = styled.nav``;

const Container = styled.div``;

/////////// Components ///////////
const Layout = props => {
  return (
    <Fragment>
      <NavBar>
        <Link to="/">
          <IconBack />
        </Link>
        盖雅精灵
        <IconTopGaga />
      </NavBar>
      <Container>{props.children}</Container>
    </Fragment>
  );
};

export default Layout;
