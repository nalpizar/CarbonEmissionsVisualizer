export type AsyncState <T> = {
    isLoading: boolean;
    error : Error | null;
    result : T | null;
}