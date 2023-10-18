import css from "./MainSection.module.css";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import { BiSearch } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../images/logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainSection = () => {
  return (
    <section className={css.mainSection}>
      <Container>
        <div className={css.mainInfo}>
          <p className={css.text}>NEW TREND</p>
          <p className={`${css.text} ${css.mainText}`}>COLLUSION</p>
          <p className={`${css.text} ${css.lastText}`}>
            An exclusive selection of this season's trends.
          </p>
          <Button variant="dark" className={`${css.button} ${css.firstButton}`}>
            DISCOVER
          </Button>
          <Button variant="dark" className={css.button}>
            SHOP NOW
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default MainSection;