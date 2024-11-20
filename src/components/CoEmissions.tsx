import { useCallback, useState } from "react";
import { StateFilter } from "./StateFilter";
import { Chart } from "./Chart";

export function CoEmissions () {
    const [filters, setFilters] = useState({
        state: ''
    });
    // Catch the state change event from the StateFilter component and update the state filter in the CoEmissions component.
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