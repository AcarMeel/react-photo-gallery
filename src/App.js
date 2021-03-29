import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.css";
import Gallery from "./components/Gallery";
import Photos from "./components/Photos";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="md">
        <Router>
          <PrimarySearchAppBar />
          <Switch>
            <Route exact path="/">
              <Gallery />
            </Route>
            <Route path="/album/:id">
              <Photos />
            </Route>
          </Switch>
        </Router>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
