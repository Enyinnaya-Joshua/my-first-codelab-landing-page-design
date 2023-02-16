import React from "react";
import styled from "styled-components";
import { MdFacebook } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <Container>
        <Wrapper>
          <FirstCol>
            <Logo>CODELAB.</Logo>
            <Icons>
              <ul>
                <li>
                  <MdFacebook />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <BsGithub />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <BsYoutube />
                </li>
                <li>
                  <AiFillLinkedin />
                </li>
              </ul>
            </Icons>
          </FirstCol>
          <SecondCol>
            <ColOne>
              <ul>
                <li>
                  <b>Discover Talent</b>
                </li>
                <li>For Companies</li>
                <li>Enterprise</li>
                <li>Case studies</li>
              </ul>
            </ColOne>
            <ColTwo>
              {" "}
              <ul>
                <li>
                  <b>Find Work</b>
                </li>
                <li>For Technologists</li>
                <li>Learning Community</li>
                <li>Leadership Program</li>
                <li>Resources</li>
              </ul>
            </ColTwo>
            <ColThree>
              {" "}
              <ul>
                <li>
                  <b>Andela</b>
                </li>
                <li>About us</li>
                <li>Events</li>
                <li>Blog</li>
                <li>Press Center</li>
                <li>Careers</li>
              </ul>
            </ColThree>
            <ColFour>
              {" "}
              <ul>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Modern Slavery Statement</li>
              </ul>
            </ColFour>
          </SecondCol>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Footer;

const ColFour = styled.div``;

const ColThree = styled.div``;

const ColTwo = styled.div``;

const ColOne = styled.div``;

const Icons = styled.div`
  color: white;
  ul {
    list-style: none;
    margin-left: 0px;
    padding-left: 7px;
    display: flex;
    padding-top: 25px;
  }

  li {
    margin-left: 0px;
    margin-right: 15px;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 960px) {
    margin-bottom: 80px;

    ul {
      list-style: none;
      margin-left: 0px;
      padding-left: 7px;
      display: flex;
      padding-top: 20px;
    }

    li {
      margin-left: 0px;
      margin-right: 15px;
      font-size: 20px;
    }
  }
`;

const SecondCol = styled.div`
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin-right: 50px;
  max-width: 1050px;
  ul {
    list-style: none;
    color: white;
  }

  li {
    padding: 5px 0px;
    width: 100%;
  }
  @media screen and (max-width: 420px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  color: white;
  @media screen and (max-width: 960px) {
    font-size: 25px;
  }
  font-size: 30px;
  font-weight: 500;
  padding-left: 20px;
`;

const FirstCol = styled.div`
  width: 20%;
  margin-right: 60px;
  margin-left: 20px;
`;

const Wrapper = styled.div`
  background-color: #173b3f;
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 1440px;
  font-size: 0.8rem;
  @media screen and (max-width: 425px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 960px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
