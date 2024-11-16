import { useCallback, useState } from "react";
import { StateFilter } from "./components/StateFilter";
import { Chart } from "./components/Chart";

export function CoEmissionsFilters () {
    const [filters, setFilters] = useState({
        state: ''
    });
    const onStateFilterChange = useCallback((newState: string)=>{
        setFilters(current => ({
            ...current,
            state : newState
        }));
    },[]);
    return (
        <div className="plan-a-wrapper--center">
            <StateFilter selectedState={filters.state} onStateSelected={onStateFilterChange} />
            <Chart selectedState={filters.state} />
        </div>
    );
}