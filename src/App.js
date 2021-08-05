import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import routes from './routers/router'

function App() {
  return (
    <Router>
      <Header />
      <Container className="App">
        <Row>
          <Row>
            <Col xs="6" sm="3"><LeftBar /></Col>
            <Col sm="9">
              {
                showContentMenus(routes)
              }
            </Col>
          </Row>
        </Row>
      </Container>
    </Router>
  );
}

const showContentMenus = (routes) => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    })
  }

  return <Switch>{result}
  </Switch>
}

export default App;
