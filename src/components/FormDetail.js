import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import { db } from "../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const FormDetail = () => {
  const [state, dispatch] = useStateValue();
  const [hid, setHid] = useState(true);
  const [copied, setCopied] = useState(false);
  const [uid, setUid] = useState("");
  const [cardInfo, setCardInfo] = useState({ ...state });
  // console.log(state);

  const senderHandle = (e) => {
    // e.preventDefault();
    setCardInfo({ ...cardInfo, sender: e.target.value });
    // console.log(sender);
  };
  const receiverHandle = (e) => {
    setCardInfo({ ...cardInfo, receiver: e.target.value });
  };
  const qouteHandle = (e) => {
    setCardInfo({ ...cardInfo, qoute: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    setHid(false);
    dispatch({ type: "ADD_TO_DB", item: cardInfo });
    db.collection("Cards")
      .add({ ...cardInfo })
      .then((docRef) => {
        toast.success(`Your Card info is stored with id: ${docRef.id}`, {
          position: "bottom-right",
        });
        setUid(docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    // console.log(state);
    // add data to fireStore and redirect to path=/uid
  };

  const handleGen = () => {
    setHid(true);
    setCopied(false);
  };
  return (
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col
          style={{ display: !hid ? "block" : "none" }}
          className="text-center"
        >
          <input
            type="text"
            value={`https://holi-cards.web.app/cards/${uid}`}
            disabled
          />
          <CopyToClipboard text={`https://holi-cards.web.app/cards/${uid}`}>
            <Button onClick={() => setCopied(true)}>Copy</Button>
          </CopyToClipboard>
          <p style={{ display: copied ? "block" : "none", color: "red" }}>
            {" "}
            Copied!!
          </p>
          <br></br>
          <br></br>
          <Button style={{ padding: 15 }} onClick={handleGen}>
            Generate Another
          </Button>
        </Col>
      </Container>

      <Form onSubmit={submit} style={{ display: hid ? "block" : "none" }}>
        <Form.Group controlId="formBasicSender" onChange={senderHandle}>
          <Form.Label>Sender</Form.Label>
          <Form.Control type="text" placeholder="Sender's name" />
        </Form.Group>

        <Form.Group controlId="formBasicReveiver" onChange={receiverHandle}>
          <Form.Label>Receiver</Form.Label>
          <Form.Control type="text" placeholder="Receiver's name" />
        </Form.Group>
        <Form.Group controlId="formBasicReveiver" onChange={qouteHandle}>
          <Form.Label>Quote</Form.Label>
          <Form.Control type="text-area" placeholder="Message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Generate
        </Button>
      </Form>
      <ToastContainer />
    </>
  );
};

export default FormDetail;
