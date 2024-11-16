import { useHistoricalIntensity } from "../../../hooks/Co2MapDeHooks/useHistoricalIntensity";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import imageBackground from '../../../assets/images/background.svg';

export function Chart ({selectedState}: {selectedState: string}) {
    const historicalIntensity = useHistoricalIntensity(selectedState);

    if (selectedState === '') return <div className="plan-a-wrapper--center">
        <p>Please select a state to see carbon intensity</p>
        {imageBackground && <img src={imageBackground} className='full--width' alt="background" />}
    </div>;

    if (historicalIntensity.isLoading) return <p>Loading...</p>;
    if (historicalIntensity.error) return <p>Error...</p>;

    return (
        <div style={{ height: 400, width: '100vw' }}>
            {historicalIntensity.result && historicalIntensity.result.length > 0 && (
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart width={500} height={400} data={historicalIntensity.result}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="intensity" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            )}
        </div>
    );
}
