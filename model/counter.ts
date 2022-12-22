import { createModel } from "@rematch/core";
import type {RootModel} from '.';

export type rootState = {
    isLoading: boolean
};


export const rootState = createModel<RootModel>() ({
    state: {
        isLoading: false
    },
    reducers: {
        setIsLoading(state, payload: boolean) {
            return { ...state, isLoading: payload}
        }
    },
    effects: (dispatch) => ({
        async setLoadingAsync(payload: boolean): Promise<void> {
            await delay(500);
            dispatch.rootState.setIsLoading(payload)
        }
    })
})

const delay = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms))