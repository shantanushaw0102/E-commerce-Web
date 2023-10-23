import styled from "styled-components";
import ibm from "../assets/images/ibm.svg"
import deloitte from "../assets/images/deloitte.png"
import salesforce from "../assets/images/salesforce.png"
import sap from "../assets/images/sap.png"
import cisco from "../assets/images/cisco.png"

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Great partners bring great possibility</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img src={ibm} alt="ibm" />
          </div>
          <div className="slide"><img src={salesforce} alt="salesforce" /></div>
          <div className="slide"><img src={deloitte} alt="deloitte" /></div>
          <div className="slide"><img src={sap} alt="sap" /></div>
          <div className="slide"><img src={cisco} alt="cisco" /></div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.trustedbg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
