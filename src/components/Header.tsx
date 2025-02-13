import { Fragment } from "react/jsx-runtime";
const Description = `This project visualizes carbon emissions data for Germany's
                federal states using interactive graphs. It aims to provide
                clear insights into the environmental impact of each state,
                helping users understand and address climate change.`;

export function Header() {
  return (
    <Fragment>
      <h1 className="heading-1">
        <a className="link" href="#" target="_blank">
          Carbon Emissions
          <span className="font--color-green">Visualization</span>
        </a>
      </h1>
      <h2 className="heading-2">CO2 Emissions in Germany</h2>
      <div className="wrapper__text wrapper__text--medium">
        <p className="text">{Description}</p>
      </div>
    </Fragment>
  );
}
