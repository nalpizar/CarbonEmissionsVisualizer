import IntensityItem from "./models/IntensityItem";
import type { StateResponse } from "./models/StateResponse";

export class Co2MapDeService {
    private static instance? : Co2MapDeService;
    public static getService() : Co2MapDeService {
        if(this.instance) {
            return this.instance;
        }
        
        this.instance = new Co2MapDeService();

        return this.instance;
    }
    public async getDeStates() : Promise <string[]> { 
        try {
            const response = await fetch ('https://api.co2map.de/state');
            const data : StateResponse = await response.json();
            const states = data.state.map(([,code]) => code);
        
            return states;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }  
    public async getProductionIntensityHistorical(state: string) : Promise<IntensityItem[]> {  
        try {
            const start = '2024-11-01';
            const end = '2024-11-02';
            const response = await fetch (`https://api.co2map.de/ProductionIntensityHistorical/?state=${state}&country=DE&start=${start}&end=${end}`);
            const data = await response.json();
            const results = data["Production-based Intensity (historical)"];

            if (!results) {
                return [];
            }
            
            const intensity: IntensityItem[] = results.map((item: [string, number]) => ({
                date: item[0],
                intensity: item[1]
            }));;
        
            return intensity;
            
        } catch (error) {
            console.error(error);
            throw error;
        }
        return [];
    }
}