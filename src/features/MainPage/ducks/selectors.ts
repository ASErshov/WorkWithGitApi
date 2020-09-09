import { AppState } from '../../../store/reducer'

export const getRepos = (state: AppState): Array<Array<string|number>> => state.repos.repos.map(item=>[item.name, item.html_url, item.license?.name, item.forks_count, item.watchers_count, item.stargazers_count])
export const getLoading = (state: AppState): Boolean=> state.repos.isLoading
export const getError = (state: AppState): string|null => state.repos.errorMassage
export const getPagination = (state: AppState): {page: number, perPage:number} =>{ return{page: state.repos.page, perPage: state.repos.perPage} }