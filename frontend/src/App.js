import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import publicRoutes from "./routes/public";
import privateRoutes from "./routes/private";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((item, idx) => {
            const Page = item.element;
            const Layout = item.layout;
            return (
              <Route
                key={idx}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((item, idx) => {
            const Page = item.element;
            const Layout = item.layout;
            return (
              <Route
                key={idx}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
