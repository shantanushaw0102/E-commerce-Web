import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404 Error</h2>
          <h3>UH OH! You're Lost</h3>
          <p>
            Oops, it looks like you've stumbled upon a page that's gone on an
            unexpected vacation! Try Again or you can always hit the Home button
            and pretend this never happened 😄🚀 .
          </p>
          <NavLink to="/">
            <Button>Go Back To Home Page</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 8rem;
    }

    h3 {
      font-size: 4rem;
    }

    p {
      margin: 3.5rem 0;
    }
  }
`;

export default ErrorPage;
