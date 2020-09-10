import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'

export type queryParams = {
    text?: string,
    license?: string,
    page: number,
    perPage: number,
}

export type Repo = {
    name: string,
    html_url: string,
    license: {name: string}
    forks_count: number,
    watchers_count: number,
    stargazers_count: number,
}

export type ReposState ={
    repos: Array<Repo>,
    isLoading: boolean,
    errorMassage: string|null,
    query: queryParams,
}

const initialState:ReposState ={
    repos: [],
    isLoading: false,
    errorMassage: null,
    query:{
        page: 0,
        perPage: 10,
    }
}
export const reposSlice = createSlice({
    name: 'repo',
    initialState,
    reducers:{
        fetchRepos: (state: Draft<ReposState>, action:PayloadAction<queryParams>): void =>{
            state.isLoading = true
            state.errorMassage = null
            state.repos = []
            state.query = action.payload
        },
        fetchReposNotFound:(state: Draft<ReposState>, action:PayloadAction<string>):void =>{
            state.errorMassage = action.payload
            state.isLoading = false
        },
        fetchReposSuccses: (state: Draft<ReposState>, action:PayloadAction<Array<Repo>>): void =>{
            state.repos = action.payload
            state.isLoading = false
        },
        fetchReposError: (state: Draft<ReposState>): void =>{
            state.isLoading = false
        }
    }
})

export const { actions, reducer } = reposSlice

export default reducer