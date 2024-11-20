import { useEffect, useState } from "react";
import { IntensityData } from "../../services/Co2MapDeService/models/IntensityResponse"; 
import { AsyncState } from "../AsyncState";
import { Co2MapDeService } from "../../services/Co2MapDeService/Co2MapDeService";

export function useHistoricalIntensity( selectedState: string) : AsyncState <IntensityData[]> {
    const [intensityItems, setIntensityItems] = useState<AsyncState<IntensityData[]>>({
        isLoading: true,
        error: null,
        result: null
    });

    useEffect(() => {
        // Check if selectedState is empty or null
        if (!selectedState) {
          // If selectedState is empty, reset the state
          setIntensityItems({
            isLoading: false, // Set isLoading to false as there is no data to fetch
            error: null,      // Reset error to null
            result: null,     // Reset result to null
          });
          return; // Exit the useEffect hook early
        }

        // If selectedState is not empty, update the state to indicate loading
        setIntensityItems((current) => ({
          ...current,         // Preserve the current state
          isLoading: true,    // Set isLoading to true to indicate data fetching
          error: null,        // Reset error to null
        }));
    
        const service = Co2MapDeService.getService();
        service
          .getProductionIntensityHistorical(selectedState)
          .then((intensity) => {
            setIntensityItems((current) => ({
              ...current,
              result: intensity,
            }));
          })
          .catch((error) => {
            setIntensityItems((current) => ({
              ...current,
              error: error,
            }));
          })
          .finally(() => {
            setIntensityItems((current) => ({
              ...current,
              isLoading: false,
            }));
          });
      }, [selectedState]);

    return intensityItems;
}