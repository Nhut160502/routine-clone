import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import publicRoutes from "./routes/public";
import privateRoutes from "./routes/private";
import { Provider } from "react-redux";
import { CustomerStore } from "./redux/CustomerStore";
import { AuthStore } from "./redux/AuthStore";

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
                  <Provider store={CustomerStore}>
                    <Layout>
                      <Page />
                    </Layout>
                  </Provider>
                }
              />
            );
          })}
        </Routes>

        <Routes>
          {privateRoutes.map((item, idx) => {
            const Page = item.element;
            const Layout = item.layout;
            return (
              <Route
                key={idx}
                path={item?.path}
                element={
                  <Provider store={AuthStore}>
                    <Layout>
                      <Page />
                    </Layout>
                  </Provider>
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
