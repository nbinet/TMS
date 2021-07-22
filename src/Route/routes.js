import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "../scenes/Login/login";
import { MapBuilding } from "../scenes/MapBuilding/mapbuilding";
import {
  HeaderComponent,
  FooterComponent,
} from "../components/HeaderFooterComponents";
import { RoomBuilding } from "../scenes/RoomBuilding/roombuilding";
import { HomePage } from "../scenes/Home/HomePage";
import { MapBuilding } from "../scenes/MapBuilding/MapBuilding";
import { HeaderComponent } from "../components/header/HeaderComponent";
import { FooterComponent } from "../components/footer/FooterComponent";
import { batAamphiA } from "../components/plans/batA/BatAamphiA";


// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/mapbuilding",
    component: MapBuilding,
  },
  {
    path: "/roombuilding",
    component: RoomBuilding,
  },
  {
    path: "/batAamphiA",
    component: batAamphiA,
  },
];

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
