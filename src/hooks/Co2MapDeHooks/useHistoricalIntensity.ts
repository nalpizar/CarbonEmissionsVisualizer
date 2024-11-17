import { useEffect, useState } from "react";
import { AsyncState } from "../AsyncState";
import { Co2MapDeService } from "../../services/Co2MapDeService/Co2MapDeService";
import IntensityItem from "../../services/Co2MapDeService/models/IntensityItem";

export function useHistoricalIntensity( selectedState: string) : AsyncState <IntensityItem[]> {
    const [state, setState] = useState<AsyncState<IntensityItem[]>>({
        isLoading: true,
        error: null,
        result: null
    });

    useEffect(() => {
        // Check if selectedState is empty or null
        if (!selectedState) {
          // If selectedState is empty, reset the state
          setState({
            isLoading: false, // Set isLoading to false as there is no data to fetch
            error: null,      // Reset error to null
            result: null,     // Reset result to null
          });
          return; // Exit the useEffect hook early
        }

        // If selectedState is not empty, update the state to indicate loading
        setState((current) => ({
          ...current,         // Preserve the current state
          isLoading: true,    // Set isLoading to true to indicate data fetching
          error: null,        // Reset error to null
        }));
    
        const service = Co2MapDeService.getService();
        service
          .getProductionIntensityHistorical(selectedState)
          .then((intensity) => {
            setState((current) => ({
              ...current,
              result: intensity,
            }));
          })
          .catch((error) => {
            setState((current) => ({
              ...current,
              error: error,
            }));
          })
          .finally(() => {
            setState((current) => ({
              ...current,
              isLoading: false,
            }));
          });
      }, [selectedState]);

    return state;
}