import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Clients } from "../pages/Clients";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { UpdateClient } from "../pages/UpdateClient";
import { UpdateProduct } from "../pages/UpdateProduct";
import { ViewClients } from "../pages/ViewClients";
import { ViewProducts } from "../pages/ViewProducts";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/view-clients-list" component={ViewClients} />
        <Route exact path="/view-products-list" component={ViewProducts} />
        <Route exact path="/update-client/:id" component={UpdateClient} />
        <Route exact path="/update-product/:id" component={UpdateProduct} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
