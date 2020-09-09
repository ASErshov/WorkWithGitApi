import { CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit'

import repos, { ReposState } from '../features/MainPage/ducks'

export type AppState = {
    repos: ReposState
}

export default (): Reducer<CombinedState<AppState>> =>
  combineReducers<AppState>({
    repos
})