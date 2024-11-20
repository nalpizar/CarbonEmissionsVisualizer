import { Fragment } from "react/jsx-runtime";
import planaLogo from '../assets/images/plana_logo.svg';
const Description = `Plan A helps companies monitor, reduce, and offset their carbon footprint,
  based on the data they input about their emissions. Though this gives individual companies visibility
  on their own emissions, it doesn't give us a clear idea on our progress on a regional level. This task
  addresses the other side of the problem; using consumption and production data on a federal state level
  to estimate the amount of GHG emissions over time.`;

export function Header () {
    return (
        <Fragment>
            <div className='plan-a-logo__container'>
                <a href="https://plana.earth/" target="_blank">
                    <img className='width--200' src={planaLogo} alt="Plan A logo" aria-label="Plan A" />
                </a>
            </div>
            <h1 className='plan-a-heading-1'>
                <a className='plan-a-link' href="https://plana.earth/" target="_blank">There is no
                    <span className='plan-a-font--color-green'>Plan B</span>
                </a>
            </h1>
            <h2 className='plan-a-heading-2'>CO2 Emissions in Germany</h2>
            <div className='plan-a-wrapper__text plan-a-wrapper__text--medium'>
                <p className='plan-a-text'>{Description}</p>
            </div>
        </Fragment>
    );
}