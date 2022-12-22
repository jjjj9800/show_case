import { Models } from "@rematch/core";
import { rootState } from "./counter";

export interface RootModel extends Models<RootModel> {
    rootState: typeof rootState,
}

export const models: RootModel = {rootState};