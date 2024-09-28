import React from "react";
import { HomePageContainer } from "./home-page/home-page-container";
import { WouldYouRatherContainer } from "./just-for-fun/would-you-rather/would-you-rather-container";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

//TODO - clean this up to have a good home button. Routes not working on refresh. need to implement server side
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="text-white">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-white">
            <Link to="/fun/wouldyourather">Would You Rather</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePageContainer />} />
            <Route path="/home" element={<HomePageContainer />} />
            <Route
              path="/fun/wouldyourather"
              element={<WouldYouRatherContainer />}
            />
            <Route path="*" element={<HomePageContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
