import React from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "modern-normalize";
// import "./components/Theory-pr/global.css";

import LocalStorage from "./components/localStorage/LocalStorage";
import UseEffect from "./components/useEffect/UseEffect";
import Modal2 from "./components/Modal2/Modal2";
import Timer from "./components/Timer/Timer";
import Form2 from "./components/Form2/Form2";
import Form from "./components/Forms/Form";
import TheoryV2 from "./components/Theory-pr2/TheoryV2";
import Coctails from "./components/Cocktails-pr/Coctails";
import Greeting from "./components/Greeting/Greeting";
import UseQuery from "./components/useQuery/UseQuery";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Greeting date={"11 Nov 26"} module={"3"} title={"Greeting message"} />
      <UseQuery date={"13 Nov 26"} module={"3"} title={"useQuery"} />
      <LocalStorage date={"10 Nov 26"} module={"3"} title={"LocalStorage"} />
      <Modal2 date={"08 Nov 26"} module={"3"} title={"Modal"} />
      <Timer date={"08 Nov 26"} module={"3"} title={"Delete Effects "} />
      <UseEffect date={"07 Nov 26"} module={"3"} title={"UseEffect"} />
      <Form2 date={"05 Nov 26"} module={"3"} title={"Form: v2 - loader"} />

      <Form date={"29 Oct 26"} module={"3"} title={"Form: v1"} />
      <TheoryV2 date={"20 Oct 26"} module={"2"} title={"UseState"} />
      <Coctails date={"17 Oct 26"} module={"2"} title={"UseState"} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
