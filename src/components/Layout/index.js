import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as IconBack } from "../../static/icon-arrow-back.svg";
import { ReactComponent as IconTopGaga } from "../../static/icon-topbar-gaga.svg";

/////////// Style ///////////
const NavBar = styled.nav`
  background: #ffffff;
  box-shadow: 0 6px 12px 0 rgba(35, 50, 87, 0.08);
  border-radius: 0 0 28px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #a2a9bb;
  font-weight: 600;

  a {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .icon-top-gaga {
    margin-right: 20px;
  }
`;

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
        <IconTopGaga className="icon-top-gaga" />
      </NavBar>
      <Container>{props.children}</Container>
    </Fragment>
  );
};

export default Layout;
