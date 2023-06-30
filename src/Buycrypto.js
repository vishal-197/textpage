import React from "react";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Buycrypto() {
  return (
    <section id="cryptobut_section" className="pos-rel">
      <Container>
        <Row>

        <div className="heading-sec">
          <h1>Buy crypto instantly to your Web3 wallet <span></span></h1>
          <p>Securely buy, sell, invest, track and transfer cryptocurrencies</p>
        </div>

        <div className="buy-table">
            
          <Table responsive="sm">
            <thead>
              <td className="table-top-heading" colSpan={6}>Trending Market</td>
              <tr className="table-heading">
                <th className="token-row">Token</th>
                <th className="symbol-row">Symbol</th>
                <th className="last-price">Last Price</th>
                <th className="change"> 24H Change</th>
                <th className="marker-cap">Market Cap</th>
                <th className="action">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="token-name">
                  <img src="./img/bnb.png" className="me-3" />
                  BNB
                </td>
                <td className="symbol-name">BNB</td>
                <td className="price-col">$41.263,00</td>
                <td className="change-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                    />
                  </svg>{" "}
                  +35,74%
                </td>
                <td className="market-cap">$784,393M</td>
                <td className="cryp-btn">
                  <button className="crypto-btn">Buy</button>
                </td>
              </tr>
              <tr>
                <td className="token-name">
                  <img src="./img/btc.png" className="me-3" />
                  Bitcoin
                </td>
                <td className="symbol-name">BTC</td>
                <td className="price-col">$41.263,00</td>
                <td className="change-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                    />
                  </svg>{" "}
                  +35,74%
                </td>
                <td className="market-cap">$784,393M</td>
                <td className="cryp-btn">
                  <button className="crypto-btn">Buy</button>
                </td>
              </tr>
              <tr>
                <td className="token-name">
                  <img src="./img/Group.png" className="me-3" />
                  Ethereum
                </td>
                <td className="symbol-name">ETH</td>
                <td className="price-col">$41.263,00</td>
                <td className="change-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                    />
                  </svg>{" "}
                  +35,74%
                </td>
                <td className="market-cap">$784,393M</td>
                <td className="cryp-btn">
                  <button className="crypto-btn">Buy</button>
                </td>
              </tr>
              <tr>
                <td className="token-name">
                  <img src="./img/luna.png" className="me-3" />
                  Terra
                </td>
                <td className="symbol-name">LUNA</td>
                <td className="price-col">$41.263,00</td>
                <td className="change-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                    />
                  </svg>{" "}
                  +35,74%
                </td>
                <td className="market-cap">$784,393M</td>
                <td>
                  <button className="crypto-btn">Buy</button>
                </td>
              </tr>
              <tr>
                <td className="token-name">
                  <img src="./img/ada.png" className="me-3" />
                  Cardano
                </td>
                <td className="symbol-name">ADA</td>
                <td className="price-col">$41.263,00</td>
                <td className="change-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
                    />
                  </svg>{" "}
                  +35,74%
                </td>
                <td className="market-cap">$784,393M</td>
                <td>
                  <button className="crypto-btn">Buy</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
                      </Row>
      </Container>
    </section>
  );
}

export default Buycrypto;
