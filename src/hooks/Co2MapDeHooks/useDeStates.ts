import { useEffect, useState } from "react";
import { AsyncState } from "../AsyncState";
import { Co2MapDeService } from "../../services/Co2MapDeService/Co2MapDeService";

export function useDeStates() : AsyncState <string[]> {
    const [state, setState] = useState<AsyncState <string[]>> ({
        isLoading: true,
        error: null,
        result: null
    });

    useEffect(()=> {
        const service = Co2MapDeService.getService();
        service.getDeStates()
        .then((states)=>{
            setState(current=>({
                ...current,
                result: states
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
    },[]);

    return state;
}