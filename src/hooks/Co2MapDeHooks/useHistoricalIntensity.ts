import { useEffect, useState } from "react";
import { AsyncState } from "../AsyncState";
import { Co2MapDeService } from "../../services/Co2MapDeService/Co2MapDeService";
import IntensityItem from "../../services/Co2MapDeService/models/IntensityItem";

export function useHistoricalIntensity( selectedState: string) : AsyncState <IntensityItem[]> {
    const [state, setState] = useState<AsyncState <IntensityItem[]>> ({
        isLoading: true,
        error: null,
        result: null
    });

    useEffect(()=> {
        const service = Co2MapDeService.getService();
        service.getProductionIntensityHistorical(selectedState)
        .then((intensity)=>{
            setState(current=>({
                ...current,
                result: intensity
            }));
        })
        .catch((error)=>{
            setState(current=>({
                ...current,
                error: error
            }));
        })
        .finally(()=>{
            setState(current=>({
                ...current,
                isLoading: false
            }));
        })
    }, [selectedState]);

    return state;
}