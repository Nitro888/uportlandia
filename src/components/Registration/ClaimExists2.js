import React from "react";
import styled from "styled-components";

import * as theme from "../shared/theme";
import { medium } from "../shared/grid";
import { InvLinkButton } from "../shared/elements";
import { SERVICES, registration } from "../../constants/config";

const { serviceId } = registration;

const ClaimExists = (props) => {
  return (<Wrapper>
    <TopHalf>
      <h2>{'국민건강보험공단의 전자건강보험증이 확인되었습니다.'}</h2>
      <Logo src={SERVICES[serviceId].icon} />
      <p>{'전자건강보험증을 이용하시면 보다 빠르고 간편하게 진료와 수납이 가능해집니다.'}</p>
      <br />
      <br />
      <br />
      <h2>{`${props.profile.name}님`}<br/>접수가 완료되었습니다.</h2>
    </TopHalf>
  </Wrapper>)
};

const Wrapper = styled.div`
  background-color: ${theme.footer.bg};
  position: absolute;
  left: 0;
  right: 0;
  z-index: 5;

  footer {
    margin: 10px 0;
  }
  ${InvLinkButton} {
    margin: 30px auto;
  }
`;
const TopHalf = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    max-width: 600px;
  }
`;
const BotHalf = styled.div`
  background: linear-gradient(to right, #37474f, #1c313a);
  padding: 30px 20px;
  position: relative;
  ${medium(`
    padding: 30px 0;
  `)};
`;
const Logo = styled.img`
  border-radius: 10px;
  display: block;
  margin: 35px auto;
  max-width: 100%;
`;

export default ClaimExists;
