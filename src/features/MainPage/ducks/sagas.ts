import { Repo } from './index';
import { call, put, takeLatest } from 'redux-saga/effects'
import { actions } from '../ducks'
import MainRepository from '../MainRepository';

const MainRepo = new MainRepository()

export type queryParams = {
  q: string,
  params:{
    sort: string,
    order: string,
    page: number,
    per_page: number,
  }
} 

export function* fetchRepos(action: ReturnType<typeof actions.fetchRepos>) {
  try {
    const q:string = encodeURI(`${action.payload.text?action.payload.text+'+':''}${action.payload.license?'license:'+action.payload.license+'+':''}language:js`)

    const params: queryParams = {
      q: q,
      params:{
        sort: 'stars',
        order: 'desc',
        page: action.payload.page,
        per_page: action.payload.perPage
      }
    }

    const data:{items: Array<Repo>} = yield call(MainRepo.getRepos, params)

    if ((<{items: Array<Repo>}>data).items.length) {
      yield put(actions.fetchReposSuccses((<{items: Array<Repo>}>data).items))
    } else {
      yield put(actions.fetchReposNotFound('Not Found'))
    }
  } catch (e) {
    yield put(actions.fetchReposError())
  }
}

export default function* actionWatcher() {
  yield takeLatest(actions.fetchRepos, fetchRepos)
}