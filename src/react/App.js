import React from "react";
import { Switch, Route } from "./components";
import pages from "./pages";

class App extends React.Component {
  render() {
    return (
      <Switch>
        {Object.entries(pages).map(([routeName, routeObj]) => (
          <Route
            key={routeName}
            exact
            path={routeObj.path}
            component={routeObj.component}
          />
        ))}
      </Switch>
    );
  }
}

export default App;
