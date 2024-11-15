import { useHistoricalIntensity } from "../../../hooks/Co2MapDeHooks/useHistoricalIntensity";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function Chart ({selectedState}: {selectedState: string}) {
    const historicalIntensity = useHistoricalIntensity(selectedState);

    if (selectedState === '') return <p>Select a state to see graph</p>;

    if (historicalIntensity.isLoading) return <p>Loading...</p>;
    if (historicalIntensity.error) return <p>Error...</p>;

    return (
        <div style={{ height: 400 }}>
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
