import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

import { useFetch } from "./hooks/useFetch";
import { useEffect, useState } from "react";

// CORS -> https://justcors.com/tl_daaa34f/

// NOTES -> https://justcors.com/tl_daaa34f/https://farmbox.cc/api/public/technical_visit_report/notes.json?token=379238b5-705c-48bc-b8c9-27e26676b417

// PLANTATIONS -> https://justcors.com/tl_daaa34f/https://farmbox.cc/api/public/technical_visit_report/plantations.json?token=379238b5-705c-48bc-b8c9-27e26676b417

// RAIN -> https://justcors.com/tl_daaa34f/https://farmbox.cc/api/public/technical_visit_report/farm.json?token=379238b5-705c-48bc-b8c9-27e26676b417

// FARM -> https://justcors.com/tl_daaa34f/https://farmbox.cc/api/public/content_details.json?token=379238b5-705c-48bc-b8c9-27e26676b417

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
