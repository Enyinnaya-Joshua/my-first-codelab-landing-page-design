import React from "react";
import styled from "styled-components";

interface Pacer {
  tx: string;
  cl: string;
  bg: string;
  wd: string;
  ht: string;
  hwd: string;
  hcl: string;
  bd: string;
  mg: string;
  br: string;
  fw: string;
  pd: string;
  cu: string;
}

const Button: React.FC<Pacer> = ({
  tx,
  cl,
  bg,
  wd,
  ht,
  hcl,
  hwd,
  bd,
  mg,
  br,
  fw,
  pd,
  cu,
}) => {
  return (
    <div>
      <Container
        bg={bg}
        cl={cl}
        ht={ht}
        wd={wd}
        hcl={hcl}
        hwd={hwd}
        bd={bd}
        mg={mg}
        br={br}
        fw={fw}
        pd={pd}
        cu={cu}
      >
        {tx}
      </Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{
  bg: string;
  cl: string;
  ht: string;
  wd: string;
  hcl: string;
  hwd: string;
  bd: string;
  mg: string;
  br: string;
  fw: string;
  pd: string;
  cu: string;
}>`
  margin-left: ${(props) => props.mg};
  width: ${(props) => props.wd};
  height: ${(props) => props.ht};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cl};
  padding: ${(props) => props.pd};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.br};
  transition: all 360ms;
  font-weight: ${(props) => props.fw};
  border: ${(props) => props.bd};
  cursor: ${(props) => props.cu};
  :hover {
    transform: ${(props) => props.hwd};
    color: ${(props) => props.hcl};
  }
`;
