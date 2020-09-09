import repos from '../features/MainPage/ducks/sagas'
import { all,spawn } from 'redux-saga/effects'


const sagas =  [
  repos
]
export default function* rootSaga() {
    yield all(sagas.map(saga => spawn(saga)))
  }