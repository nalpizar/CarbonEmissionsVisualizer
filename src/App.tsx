import "./App.scss";
import { Fragment } from "react/jsx-runtime";
import { CoEmissions } from "./components/CoEmissions";
import { Header } from "./components/Header";

export function App() {
  return (
    <Fragment>
      <div className="wrapper wrapper--center">
        <Header />
        <CoEmissions />
      </div>
    </Fragment>
  );
}
