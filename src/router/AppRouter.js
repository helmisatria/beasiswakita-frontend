import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// import jwt from 'jsonwebtoken';
// import { jwtKey } from '../config/keys.json';

// import ListPesanan from '../components/ListPesanan';
// import DetilPesanan from '../components/DetilPesanan';
// import ProsesPesanan from '../components/ProsesPesanan';
import Home from '../components/Home';
import Search from '../components/Search';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Daftar from '../components/Daftar';
import DetilBeasiswa from '../components/DetilBeasiswa';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/board" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/daftar" exact component={Daftar} />
        <Route path="/detilBeasiswa" exact component={DetilBeasiswa} />
        {/* <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/pesanan" exact component={ListPesanan} />
        <PrivateRoute path="/pesanan/:id" exact component={DetilPesanan} />
        <PrivateRoute path="/prosesPesanan" exact component={ProsesPesanan} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

// const Auth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     const token = window.localStorage.getItem('token');
//     jwt.verify(token, jwtKey, (err, user) => {
//       if (err) {
//         return (<Redirect to="/login" />);
//       }
//       if (user) {
//         this.isAuthenticated = true;
//       }
//     });
//     setTimeout(cb, 100); // fake async
//   },
// };

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => {
//       Auth.authenticate();
//       if (Auth.isAuthenticated) {
//         return (
//           <Component {...props} />
//         );
//       }
//       return (<Redirect to="/login" />);
//     }}
//   />
// );

export default AppRouter;
