import React from "react";
import { Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

function Instiving() {
  return (
    <div>
      <section id="investing-key-sec" className="pos-rel">
        <Container>
          <div className="heading-sec">
            <h1>
              Investing is the key to building wealth <span></span>
            </h1>
            <p>
              Slide the coin and see how your crypto investment could have grown
              over the last five years{" "}
            </p>
          </div>
          <div className="deposit-sec">
            <p>Monthly Deposit</p>
            <div className="progerss-row">
              <ProgressBar variant="success" now={60} />
              <span>
                {" "}
                <img src="./img/Frame4.png" />
              </span>
            </div>
            <div className="price">
              <small>$0</small>
              <small>$200</small>
            </div>
          </div>
          <div className="accounts">
            <div className="saving-account">
              <p>Savings account</p>
              <h5>$12,000</h5>
            </div>
            <div className="crypto-account">
              <p>Crypto Investing account after 5 years</p>
              <h5>$58,000</h5>
            </div>
          </div>
        </Container>
      </section>

      <section id="invest-chart-sec" className="pos-rel">
        <Container>
          <div className="chart-innerbox">
            <div className="chart-img">
              <img src="./img/Graphs.png" />
            </div>
            <p>
              Chart is the comparison between the past five year performance of
              Bitcoin (BTC) and Ethereum (ETH) and savings account with an
              interest rate of 0.07% yearly. Investing in cryptocurrencies
              involves risk of loss and performance is not guaranteed.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Instiving;
