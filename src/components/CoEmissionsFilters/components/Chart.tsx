import { useHistoricalIntensity } from "../../../hooks/Co2MapDeHooks/useHistoricalIntensity";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import imageBackground from '../../../assets/images/background.svg';
import loading from '../../../assets/images/loading.svg';

export function Chart ({selectedState}: {selectedState: string}) {
    const historicalIntensity = useHistoricalIntensity(selectedState);

    if (selectedState === '') return <div className="plan-a-wrapper--center">
        <p className="plan-a-text--bold">Please select a state to see carbon intensity</p>
        {imageBackground && <img src={imageBackground} className='full--width margin--24' alt="background" />}
    </div>;

    if (historicalIntensity.isLoading) return <div className="plan-a-wrapper--center height--400">
        <p className="plan-a-text--bold">We are loading the carbon intensity data for you</p>
        <img src={loading} className='width--200' alt="loading" />
    </div>;
    
    if (historicalIntensity.error) return <div className="plan-a-wrapper--center">
    <p className="plan-a-text--bold">Sadly, there was an error while performing the request</p>
    {imageBackground && <img src={imageBackground} className='full--width margin--24' alt="background" />}
    </div>;

    return (
        <div className="plan-a-wrapper__chart">
            {historicalIntensity.result && historicalIntensity.result.length > 0 && (
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart width={500} height={400} data={historicalIntensity.result}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="intensity" stroke="#007f42" fill="#007f42" />
                    </AreaChart>
                </ResponsiveContainer>
            )}
        </div>
    );
}
