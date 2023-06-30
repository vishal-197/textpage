import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Headerpop() {
  return (
    <section id="header-pop-bar">
      <Container>
        <div className="inner-box">
          <span>New</span>
          <p>
            TBC Stake Pool FOUR is live!
            <Link to="">
              Sign up to get loyalty rewards, upto 40% discount on transaction
              fees, and more.
            </Link>
          </p>
          <span id='headerbottonBtn'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </div>
      </Container>
    </section>
  );
}

export default Headerpop;
