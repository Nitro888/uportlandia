import React from "react";
import styled from "styled-components";

import * as theme from "../shared/theme";
import { Container } from "../shared/grid";
import Card from "../shared/ContentCard";
import { Button } from "../shared/elements";
import Services from "../shared/Services";
import SuccessIcon from "../../images/congratulations.svg";
import InsuranceLogo from "../../images/insurance-logo.png";

class ClaimReceived extends React.Component {
  componentDidMount() {
    if(!this.props.isLoggedIn) {
      this.props.redirectToDiplomaHome();
    }
  }
  render() {
    const { data, redirectToHome } = this.props;
    if(!this.props.isLoggedIn)
      return null;
    return (<Wrapper>
      <Card>
        <h2>Congratulations!</h2>
        <p>You received your employment claims.
          Your claims are stored in your uPort app.</p>
        <SuccessImage src={SuccessIcon} />
        <hr />
        <h4>More than employment...</h4>
        <p>
          With your employment claims you gained an easy and quick access to
          numerous services and programs in Cleverland.
        </p>
        <Services
          heading="Services that honor employment claims"
          data={[{
            heading: "Insurance ",
            subHeading: "People Care Insurance LLC.",
            url: "/insurance",
            logo: InsuranceLogo
          }]} />
        <Button secondary onClick={this.props.redirectToHome}>
          View All
        </Button>
      </Card>
    </Wrapper>)
  }
}

const Wrapper = styled.div`
  ul {
    list-style: disc;
    margin-left: 20px;
    li + li {
      margin-top: 15px;
    }
  }
  .card__content {
    padding-bottom: 30px;
  }
  ${Button} {
    margin: 30px auto 0;
  }
`;
const SuccessImage = styled.img`
  display: block;
  margin: 40px auto 0;
  max-width: 100%;
`;

export default ClaimReceived;
