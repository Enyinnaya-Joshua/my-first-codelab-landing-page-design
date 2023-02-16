import React from "react";
import styled from "styled-components";
import Button from "../GlobalComp/Button";
import img1 from "../Assets/right.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <Title>The B2C & B2B Growth Marketing Company</Title>
            <Des>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nostrum, alias maxime fugiat vitae nesciunt numquam, atque quas ad
              veniam ratione qui? Debitis repellat aliquam veritatis voluptatem
              eligendi animi nesciunt!
            </Des>
            <ButtonCon>
              <Button
                tx="Let's Grow Your Company"
                cl="white"
                bg="orange"
                wd="220px"
                ht="50px"
                hcl="black"
                hwd="scale(1.05)"
                bd=""
                mg="0px 0px 0px 30px"
                br="7px"
                pd=""
                fw="500"
                cu="pointer"
              />
            </ButtonCon>
          </First>
          <Second>
            <img src={img1} alt="" />
          </Second>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const ButtonCon = styled.div`
  cursor: pointer;
  width: 300px;
`;

const Second = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
  margin: auto auto;
  width: 600px;
  height: 420px;
  @media screen and (max-width: 960px) {
    width: 400px;
    height: 200px;
  }
  @media screen and (max-width: 425px) {
    width: 350px;
    height: 200px;
  }
  @media screen and (max-width: 375px) {
    width: 300px;
    height: 200px;
    margin-right: 50px;
  }
`;

const Des = styled.p`
  font-size: 1rem;
  width: 100%;

  @media screen and (max-width: 960px) {
    width: 99%;
  }
`;

const Title = styled.h1`
  margin-top: 0px;
  padding: 20px;
  width: 300px;
  @media screen and (max-width: 960px) {
    margin-top: 10px;
    font-size: 35px;
    width: 250px;
  }

  @media screen and (max-width: 375px) {
    width: 300px;
    height: 200px;
    width: 200px;
  }
`;

const First = styled.div`
  margin: auto auto;
  width: 400px;
  @media screen and (max-width: 960px) {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  max-width: 1440px;
  width: 100%;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
