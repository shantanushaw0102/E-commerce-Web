import React from "react";
import styled from "styled-components";

const Home = () => {
  return <Wrapper className="test">home</Wrapper>;
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  width: 20rem;
`;

export default Home;
