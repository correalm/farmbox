import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient } from "react-query";

const defaultQueryFn = async ({ queryKey }) => {
  if (queryKey == "content_details") {
    const res = await fetch(
      `https://justcors.com/tl_db3a908/https://farmbox.cc/api/public/content_details.json?token=379238b5-705c-48bc-b8c9-27e26676b417`
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } else {
    const res =
      await fetch(`https://justcors.com/tl_db3a908/https://farmbox.cc/api/public/technical_visit_report/${queryKey}.json?token=379238b5-705c-48bc-b8c9-27e26676b417
  `);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  }
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
