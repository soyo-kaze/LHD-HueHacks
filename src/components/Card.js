import React from "react";
import { useStateValue } from "./StateProvider";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Card.css";
// import holiImg from "../assets/holi.jpg";
import holiImg from "../assets/holi1.png";

const Card = () => {
  const [state, dispatch] = useStateValue();
  return (
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row className="holi_card">
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <p>
              <strong>From: </strong>
              {` ${state.sender}`}
            </p>
            <h1>
              <i>{`"${state.qoute}"`}</i>
            </h1>
            <p>
              <strong>To: </strong>
              {` ${state.receiver}`}
            </p>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={holiImg} alt="holi_image" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
