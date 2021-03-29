import React, { useEffect } from "react";
import { db } from "../firebaseConfig";

import { Container, Col } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GenCard from "./GenCard";
import Header from "./Header";
import "../style/App.css";
import SendCard from "./SendCard";
import About from "./About";

const App = () => {
  useEffect(() => {
    // db.collection("users")
    //   .add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815,
    //   })
    //   .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch((error) => {
    //     console.error("Error adding document: ", error);
    //   });
    // db.collection("users")
    //   .doc("4CRD2hG6xhNXtRTuaQcS")
    //   .get()
    //   .then((querySnapshot) => {
    //     console.log(querySnapshot.data());
    //   });
    //get all uid store it someWhere!! and use map to list all as a Route
  }, []);
  const NotFound = () => {
    return (
      <>
        {/* <div style={{ height: 60 }}></div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <h1>404! Page Not Found</h1>
        </div>
      </>
    );
  };

  return (
    <>
      <Router>
        <Header />
        <Container style={{ display: "flex", alignItems: "center" }}>
          <Col className="home__tile">
            <Switch>
              <Route exact path="/">
                <h1 style={{ textAlign: "center" }}>Holi Greets!!</h1>
                <GenCard />
              </Route>
              <Route path="/cards/:id" component={SendCard} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Col>
        </Container>
      </Router>
    </>
  );
};

export default App;
