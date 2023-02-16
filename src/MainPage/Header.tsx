import React from "react";
import styled from "styled-components";
import Button from "../GlobalComp/Button";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>CODELAB.</Logo>
          <Nav>
            <NavigationCon>
              <Navigation>Home</Navigation>
              <Navigation>About</Navigation>
              <Navigation>Contact</Navigation>
              <Navigation>Services</Navigation>
            </NavigationCon>
            <ButtonCon>
              <Button
                tx="Sign Up"
                cl="white"
                bg="orange"
                wd="150px"
                ht="50px"
                hcl="black"
                hwd="scale(1.05)"
                bd=""
                mg=""
                br="7px"
                pd=""
                fw="400"
                cu="pointer"
              />
              <Button
                tx="Log In"
                cl="black"
                bg="white"
                wd="150px"
                ht="50px"
                hcl="orange"
                hwd="scale(1.05)"
                bd=""
                mg="20px"
                br="7px"
                pd=""
                fw="400"
                cu="pointer"
              />
            </ButtonCon>
            <Menu>
              <AiOutlineMenu />
            </Menu>
          </Nav>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Menu = styled.div`
  cursor: pointer;
  display: none;
  margin-right: 20px;
  @media screen and (max-width: 960px) {
    display: block;
    font-size: 17px;
    font-weight: 500;
  }
`;

const ButtonCon = styled.div`
  display: flex;
  margin-right: 20px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavigationCon = styled.div`
  display: flex;
`;

const Navigation = styled.div`
  margin-right: 30px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  width: 85%;
`;

const Logo = styled.div`
  cursor: pointer;
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
  font-size: 30px;
  font-weight: 500;
  padding-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 80px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0px 15px; */
`;
