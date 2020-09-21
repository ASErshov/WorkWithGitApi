import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import styles from './SearchInput.module.css'
import propStyles from '../../features/MainPage/MainPage.module.css'

import SearchInput from './index'
import { Button } from '@material-ui/core'

describe('<SearchInput />', () => {
  const onClick = jest.fn()
  const Component = (
    <SearchInput 
      handleSearch={onClick} 
      lable={'Поиск по слову'}
      lableWidth={145} 
      buttonText={'Поиск'} 
      className={propStyles.search}  
    />
  )

  it('Snapshot is correct', () => {
    const wrapper = renderer.create(Component).toJSON()

    expect(wrapper).toMatchSnapshot()
  })

  it('Passed props is valid', () => {
    const wrapper = mount(Component)

    expect(wrapper.props().lable).toEqual('Поиск по слову')
    expect(wrapper.props().lableWidth).toEqual(145)
    expect(wrapper.props().buttonText).toEqual('Поиск')
  })

  it('Passed events is valid', () => {
    const wrapper = mount(React.cloneElement(Component))

    wrapper.find(Button).simulate('click')

    expect(onClick.mock.calls.length).toBe(1)

    wrapper.find(Button).simulate('click')
    wrapper.find(Button).simulate('click')

    expect(onClick.mock.calls.length).toBe(3)
  })

  it('JSX has been rendered is valid', () => {
    const wrapper = mount(Component)
    expect(wrapper.find('.MuiButton-label').text()).toEqual('Поиск')
    expect(wrapper.find(`.${styles.form}`).hasClass(propStyles.search)).toBeTruthy()
  })
})
