import { createModel } from "@rematch/core";
import type {RootModel} from '.';

export type counterState = number;

export const counter = createModel<RootModel>() ({
    state: 0,
    reducers: {
        increment: (state, payload: number) => state + payload
    },
    effects: (dispatch) => ({
        async incrementAsync(payload: number): Promise<void> {
            await delay(500);
            dispatch.counter.increment(payload)
        }
    })
})

const delay = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms))