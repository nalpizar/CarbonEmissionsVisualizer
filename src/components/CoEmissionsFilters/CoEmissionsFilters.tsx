import { useCallback, useState } from "react";
import { StateFilter } from "./components/StateFilter";
import { DateRangeFilter } from "./components/DateRangeFilter";
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
        <div>
            <StateFilter selectedState={filters.state} onStateSelected={onStateFilterChange} />
            <DateRangeFilter/>
            <Chart selectedState={filters.state} />
        </div>
    );
}