export type IntensityData = {
    date: string;
    intensity: number;
};

export type IntensityResponse = {
    "Production-based Intensity (historical)"?: [string, number][];
};