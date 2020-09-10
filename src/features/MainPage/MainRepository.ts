import { queryParams } from './ducks/sagas';
import { Repo } from '../MainPage/ducks';
import axios from 'axios'

export default class MainRepository {
    public getRepos = async (params: queryParams): Promise<{items: Array<Repo>}> => {
      const { data }  = await axios.get<{items: Array<Repo>}>(`https://api.github.com/search/repositories?q=${params.q}`, {params: params.params}).then( (response : any)=> {
        return response;
      })
      .catch(function (error) {
          console.error(error)
      })
      return data
    }
}