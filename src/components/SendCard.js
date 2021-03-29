import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { db } from "../firebaseConfig";
import { useStateValue } from "./StateProvider";
import holiImg from "../assets/holi1.png";
import "../style/Card.css";

const SendCard = (props) => {
  const uid = props.match.params.id;
  const [state, dispatch] = useStateValue();
  const [info, setInfo] = useState({ ...state });
  db.collection("Cards")
    .doc(uid)
    .get()
    .then((querySnapshot) => {
      // console.log(querySnapshot.data());
      setInfo(querySnapshot.data());
    });
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
              {` ${info.sender}`}
            </p>
            <h1>
              <i>{`"${info.qoute}"`}</i>
            </h1>
            <p>
              <strong>To: </strong>
              {` ${info.receiver}`}
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

export default SendCard;
