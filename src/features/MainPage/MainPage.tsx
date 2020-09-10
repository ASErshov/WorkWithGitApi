import React, { useEffect } from 'react';
import {Dispatch} from 'redux'
import Header from '../../components/Header';
import styles from './MainPage.module.css';
import RepoTable from './components/RepoTable';
import { useDispatch, useSelector } from 'react-redux';
import {getRepos, getLoading, getError, getLicenses, getQueryParams} from './ducks/selectors'
import {actions} from './ducks'
import Loader from '../../components/Loader';
import { Typography } from '@material-ui/core';
import SearchInput from '../../components/SearchInput';
import FilterSelect from '../../components/FilterSelect';


const MainPage: React.FC = (): React.ReactElement =>{
  const dispatch: Dispatch = useDispatch()

  const repos = useSelector(getRepos)
  const licenses = useSelector(getLicenses)
  const loading = useSelector(getLoading)
  const error = useSelector(getError)
  const query = useSelector(getQueryParams)

  useEffect(() => {
    if (!repos.length){
      dispatch(actions.fetchRepos({page:1, perPage:10}))
    }
    if (!licenses.length){
      dispatch(actions.fetchLicenses())
    }
  }, [dispatch])

  const handleSearch = (text:string)=>{
    dispatch(actions.fetchRepos({license: query.license, text: text, page:1, perPage:10}))
  }
  
  const handleSelect = (value: string) =>{
    dispatch(actions.fetchRepos({license: value, text: query.text, page:1, perPage:10}))
  }

  return (<>
      <Header >Добро пожаловать</Header>
      <div className={styles.filter}>
        <SearchInput 
          handleSearch={handleSearch} 
          lable={'Поиск по слову'}
          lableWidth={145} 
          buttonText={'Поиск'} 
          className={styles.search}  
        />
        <FilterSelect
          handleSelect = {handleSelect}
          lable = 'Фильтр по лицензии'
          items = {licenses}
          selected = {query.license}
        />
      </div>
      { loading && <Loader/>}
      {!loading && !!repos.length && <RepoTable className={styles.table} paginationClassName={styles.table} rows={repos}/>}
      { error&& <Typography variant='h5' className={styles.error} >{error} </Typography>}
      </>
  );
}

export default MainPage;