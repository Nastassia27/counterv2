import {RootState} from "../app/store";
import {initialStateType} from "./counter-reducer";

export const selectCounterValues = (state: RootState):initialStateType  => state.counter