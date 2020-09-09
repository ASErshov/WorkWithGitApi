import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import styles from '../../MainPage.module.css'

import RepoTable from './RepoTable'
import store from '../../../../store/store'
import { Provider } from 'react-redux'

describe('<RepoTable />', () => {
  const Component = (
    <Provider store ={store} >
    <RepoTable className={styles.table} paginationClassName={styles.table} rows={[[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6]]}/>
    </Provider>
  )

  it('Passed props is valid', () => {
    const wrapper = mount(Component)

    expect(wrapper.find(RepoTable).props().rows).toEqual([[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6]])

    wrapper.unmount()
  })

  it('JSX has been rendered is valid', () => {
    const wrapper = mount(Component)

    expect(wrapper.find('table').hasClass(styles.table)).toBeTruthy()
    expect(wrapper.find('.MuiTablePagination-root').hasClass(styles.table)).toBeTruthy()
    wrapper.unmount()
  })
})
