export type StateResponse = {
    state: StateRecord[]
};

type StateRecord = [ state: string, code: string ];