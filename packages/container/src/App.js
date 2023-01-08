import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const genarateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default function App() {
  return (
    <BrowserRouter>
      <StylesProvider genarateClassName={genarateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
