import { ChangeEvent, useCallback } from "react";
import { useDeStates } from "../hooks/Co2MapDeHooks/useDeStates";
export type StateFilterProps = {
    selectedState: string;
    onStateSelected: (selectedState: string) => void
}
export function StateFilter ({selectedState, onStateSelected}:StateFilterProps) {
    const stateData = useDeStates();
    const onSelectChange = useCallback((event:ChangeEvent<HTMLSelectElement>)=>{
        const select = event.target;
        const selectValue = select.value;

        onStateSelected(selectValue);
    },[onStateSelected]);
    return (
        <div className="half--width">
            <label htmlFor="states-select" hidden>States</label>
            <select 
                id="states-select"
                className="plan-a-select full--width"
                onChange={onSelectChange}
                value={selectedState ?? ''}
                disabled={!!stateData.error || stateData.isLoading}>
                <option value="" disabled>
                    {stateData.error && 'we couldnt load the states'}
                    {stateData.isLoading && 'loading states...'}
                    {stateData.result && !stateData.result.length  && 'no states found'}
                    {!stateData.error && !stateData.isLoading && stateData.result && stateData.result.length && 'Select an state'}
                </option>
                {
                    stateData.result?.map( stateCode=> (
                        <option value={stateCode} key={stateCode}>{stateCode}</option>
                    ))
                }
            </select>
        </div>
    );
}