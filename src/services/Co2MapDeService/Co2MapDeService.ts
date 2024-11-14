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
}