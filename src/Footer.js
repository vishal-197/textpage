import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-browser-router";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Footer() {
  return (
    <footer id="footer-sec" className="pos-rel">
      <div className="footer-top-sec ps-3 pe-3">
        <Container fluid>
          <Row className="footer-btm-boreder">
            <Col md={3}>
              <div className="footer-comp-info">
                <div className="footer-logo">
                  <img src="./img/Group5399.png" />
                </div>
                <div className="footer-info">
                  <h6>Newsletter</h6>
                  <p>
                    Signup to get the latest market news, company updates, new
                    product releases and more.
                  </p>

                  <from>
                    <input type="email" placeholder="Email Address" />
                    <Button>Sign Up</Button>
                  </from>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <Row>
                <Col>
                  <div className="footer-links">
                    <h5>TBC Token</h5>
                    <ul>
                      <li>
                        <Link to="">stake TBC</Link>
                      </li>
                      <li>
                        <Link to="">Buy TBC on PancakeSwap</Link>
                      </li>
                      <li>
                        <Link to="">Buy TBC on HitBTC</Link>
                      </li>
                      <li>
                        <Link to="">Buy TBC on FMFW.io</Link>
                      </li>
                      <li>
                        <Link to="">TBC on BSC</Link>
                      </li>
                      <li>
                        <Link to="">TBC on Ehterscan</Link>
                      </li>
                      <li>
                        <Link to="">TBC on CoinMarketCap</Link>
                      </li>
                      <li>
                        <Link to="">TBC on CoinGecko</Link>
                      </li>
                      <li>
                        <Link to="">Tokenomic</Link>
                      </li>
                      <li>
                        <Link to="">Utility</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="footer-links">
                    <h5>Company</h5>
                    <ul>
                      <li>
                        <Link to="">About</Link>
                      </li>
                      <li>
                        <Link to="">Careers</Link>
                      </li>
                      <li>
                        <Link to="">Ressources</Link>
                      </li>
                      <li>
                        <Link to="">Press</Link>
                      </li>
                      <li>
                        <Link to="">Security</Link>
                      </li>
                      <li>
                        <Link to="">Token Listing</Link>
                      </li>
                      <li>
                        <Link to="">Partners & Investors</Link>
                      </li>
                      <li>
                        <Link to="">Legal & Privacy</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="footer-links">
                    <h5>Products</h5>
                    <ul>
                      <li>
                        <Link to="">Get Started</Link>
                      </li>
                      <li>
                        <Link to="">Buy</Link>
                      </li>
                      <li>
                        <Link to="">Coins List</Link>
                      </li>
                      <li>
                        <Link to="">Earn</Link>
                      </li>
                      <li>
                        <Link to="">Convert</Link>
                      </li>
                      <li>
                        <Link to="">Bridge</Link>
                      </li>
                      <li>
                        <Link to="">Rewards Program</Link>
                      </li>
                      <li>
                        <Link to="">Referal Program</Link>
                      </li>
                      <li>
                        <Link to="">Ambassador Program</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="footer-links">
                    <h5>Support</h5>
                    <ul>
                      <li>
                        <Link to="">Help Center</Link>
                      </li>
                      <li>
                        <Link to="">Contacts</Link>
                      </li>
                      <li>
                        <Link to="">Bug Bounty</Link>
                      </li>
                      <li>
                        <Link to="">Status</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="footer-links">
                    <h5>Learn</h5>
                    <ul>
                      <li>
                        <Link to="">Blog</Link>
                      </li>
                      <li>
                        <Link to="">Browse Cryptocurrencies</Link>
                      </li>
                      <li>
                        <Link to="">Crypto Basics</Link>
                      </li>
                      <li>
                        <Link to="">How to set up a web3 wallet?</Link>
                      </li>
                      <li>
                        <Link to="">How to buy crypto?</Link>
                      </li>
                      <li>
                        <Link to="">What is bitcoin & Ethereum?</Link>
                      </li>
                      <li>
                        <Link to="">What is DeFi?</Link>
                      </li>
                      <li>
                        <Link to="">What is Blockchain?</Link>
                      </li>
                      <li>
                        <Link to="">What is stakin?</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom-row ps-3 pe-3">
        <div className="footer-social-icons">
          <p>
            <ul className="footer-soc-icons-list">
              <li>
                <Link to="#">
                  <img src="./img/twitter.svg" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="./img/linkedin.svg" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="./img/telegram.svg" />
                </Link>
              </li>
            </ul>
          </p>
          <span>
            <Dropdown data-bs-theme="dark">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                <p>
                  <img src="./img/flagpack.png" /> English
                </p>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
                <Dropdown.Item href="#/action-3">English 1</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">English 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </div>
        <Row>
          <Col md={4}>
            <p>
              This website is operated and maintained by TeraBlock Technologies
              Limited, Terms & Legal Privacy Policy. Unless otherwise specified,
              all return figures shown above are for illustrative purposes only,
              and are not actual customer or model returns. Actual returns will
              vary greatly and depend on personal and market circumstances.
            </p>
          </Col>
          <Col md={5}>
            <p>
              Investments: Not FDIC Insured No Bank Guarantee May Lose Value.
              Investing in Digital Currencies involves risks, and there is
              always the potential of losing money when you invest in Digital
              Currencies. Before investing, consider your investment objectives
              and TeraBlock’ charges and expenses. TeraBlock internet-based
              services are designed to assist clients in achieving discrete
              financial goals. They are not intended to provide comprehensive
              tax advice or financial planning with respect to every aspect of a
              client's financial situation and do not incorporate specific
              investments that clients hold elsewhere. Past performance does not
              guarantee future results, and the likelihood of investment
              outcomes are hypothetical in nature. Not an offer, solicitation of
              an offer, or advice to buy or sell Digital Currencies in
              jurisdictions where TeraBlock is not registered.{" "}
            </p>
          </Col>
          <Col md={3}>
            <p>
              The information provided by TeraBlock is educational only and is
              not investment or tax advice. © TeraBlock Technologies Limited
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
