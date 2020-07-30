/* eslint react/jsx-no-target-blank: 0 */

import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

import { large, medium, mediumOnly } from "../shared/grid";
import * as theme from "../shared/theme";
import cityIdIcon from "../../images/city-id-icon.svg";
import uPortAppIcon from "../../images/uport-app-icon.svg";
import servicesIcon from "../../images/services-icon.svg";

import isMobile from "../../utils/isMobile";
import LoginModal from "../uport/LoginContainer2";
import { SERVICES, registration } from "../../constants/config";

const { serviceId } = registration;

class Header extends React.Component {
  state = {
    devClickCount: 0,
    loginModal: false
  }
  hideLoginModal = () => {
    this.setState({ loginModal: false });
  }
  showLoginModal = () => {
    this.setState({ loginModal: true });
  }
  handleLoginSuccess = profile => {
    const { loginModal } = this.state;
    if(loginModal || isMobile()) {
      this.setState({ loginModal: false })
      this.props.redirectToRegnForm();
    }
  }
  render() {
    const { t } = this.props;
    return (
    <Hero>
      <Hero.Welcome>
        <h2>환영합니다</h2>
        <h1>Dr.Who</h1>
        <p>방문을 환영합니다..</p>
        <p>진료를 원하시면 아래의 접수 버튼을 눌러주세요.</p>
        <br/>
        <button onClick={this.showLoginModal} style={{ 
          'border-radius': '50px',
          display: 'inline-block',
          border: 'none',
          'font-size': '1.75rem',
          padding: '16px 38px',
          transform: 'none',
        }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;접수&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
      </Hero.Welcome>
      <Hero.Content>
        <Hero.Steps>
          <Hero.Step>
            <Hero.Step.Icon src={cityIdIcon} />
            <h4>전자의료보험증</h4>
            <p>쉽고 편한 본인 증명</p>
          </Hero.Step>
          <Hero.Step>
            <Hero.Step.Icon src={uPortAppIcon} style={{ position: "relative", left: "-15px" }} />
            <h4>신원지갑</h4>
            <p>각종 증명서 관리</p>
          </Hero.Step>
          <Hero.Step>
            <Hero.Step.Icon src={servicesIcon} />
            <h4>병원</h4>
            <p>빠르고 편리한 수속</p>
          </Hero.Step>
        </Hero.Steps>
      </Hero.Content>
      <LoginModal
        show={this.state.loginModal}
        heading="First things first"
        description="To login scan the QR code with the uPort app"
        infoHeading="You're logging in to"
        serviceId={serviceId}
        issuer={{
          heading: SERVICES[serviceId].name,
          subHeading: SERVICES[serviceId].entity,
          name: SERVICES[serviceId].entity,
          logo: SERVICES[serviceId].icon,
          colors: theme.colors[SERVICES[serviceId].id]
        }}
        hiddenRequests={[SERVICES[serviceId]]}
        onClose={this.hideLoginModal}
        onLoginSuccess={this.handleLoginSuccess} />
    </Hero>);
  }
}

const Hero = styled.div`
  overflow: hidden;
  position: relative;
`;
Hero.Content = styled.div`
  background: linear-gradient(to right, #37474f, #1c313a);
  padding: 60px 20px 0;
  color: #fff;
  ${medium("padding: 60px 20vw 0; min-height: 700px")}

  h3 {
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0 0 60px;
    text-align: center;
    text-transform: uppercase;

    &:last-child {
      margin-bottom: 0;
    }
  }

  hr {
    border: none;
    border-top: solid 1px #fff;
    height: 1px;
    margin: 80px auto;
    width:  120px;
  }
`;
Hero.Steps = styled.ul`
  align-items: baseline;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${medium("display: flex;")}
`;
Hero.Step = styled.li`
  flex: 1;
  & + & {
    margin: 60px 0 0;
  }
  text-align: center;
  ${medium(`
    & + & {
      margin: 0 0 0 40px;
    }
  `)}
  h4 {
    font-weight: 600;
    margin: 30px 0 10px;
  }
`;
Hero.Step.Icon = styled.img`

`;
Hero.Welcome = styled.div`
  background: linear-gradient(109.54deg, #ffc20d 0.86%, #ffb300 100%);
  background-size: cover;
  color: ${theme.homeHeader.textColor};
  padding: 2vh 20px 10vh;
  position: relative;
  z-index: 2;
  text-align: center;
  ${large("padding: 15vh 30vw 15vh;")}
  ${mediumOnly("padding: 15vh 25vw 15vh;")}

  h2 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 15px;
    text-transform: uppercase;
    ${medium("font-size: 1.5rem;")}
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    ${medium("font-size: 4.25rem;")}
  }
  p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
    ${medium("font-size: 1.25rem;")}
  }
`;
const Logo = styled.img`
  display: block;
  margin: 10px auto 70px;
  width: 32px;
`;

export default withTranslation()(Header);

