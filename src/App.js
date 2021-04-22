import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import CategoryDetails from './components/category-details/category-details';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Login from './components/login/login';
import PrivateRoute from './components/PrivateRoute';
import ProductDetails from './components/product-details/product-details';
import Register from './components/register/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            {/* <Header/> */}
            {/* <Checkout/> */}
          </Route>
          <PrivateRoute path="/" exact component={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <PrivateRoute path="/categories/:categoryId" component={
            <>
              <Header />
              <CategoryDetails />
              <Footer />
            </>
          } />

          <PrivateRoute path="/products/:productId" component={
            <>
              <Header />
              <ProductDetails />
              <Footer />
            </>
          } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
