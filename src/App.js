import React, { useEffect, useState } from "react";
import { HomePageContainer } from "./home-page/home-page-container";
import { WouldYouRatherContainer } from "./just-for-fun/would-you-rather/would-you-rather-container";
import { DanMarinoContainer } from "./nfl-football/dan-marino/dan-marino-container";
import { Routes, Route, Outlet, Link, HashRouter } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

//TODO - clean this up to have a good home button. Routes not working on refresh. need to implement server side
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="icon-color pt-4">
            <Link to="/">
              <HomeIcon />
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

const App = () => {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    console.log("useEffect ran");
    fetch("/api/test-api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        console.log("test");
      });
  }, []);
  return (
    <div className="container mx-auto backdrop">
      {/** TODO - find solution to hash router and remove all # from links */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePageContainer />} />
            <Route
              path="/fun/wouldyourather"
              element={<WouldYouRatherContainer />}
            />
            <Route
              path="/nfl/dan-marino-1984"
              element={<DanMarinoContainer />}
            />
            <Route path="*" element={<HomePageContainer />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
