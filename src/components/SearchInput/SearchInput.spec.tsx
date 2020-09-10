import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import propStyles from '../../features/MainPage/MainPage.module.css'

import SearchInput from './index'

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

    wrapper.find('form').simulate('submit')

    expect(onClick.mock.calls.length).toBe(1)

    wrapper.find('form').simulate('submit')
    wrapper.find('form').simulate('submit')

    expect(onClick.mock.calls.length).toBe(3)
  })

  it('JSX has been rendered is valid', () => {
    const wrapper = mount(Component)
    expect(wrapper.find('.MuiButton-label').text()).toEqual('Поиск')
    expect(wrapper.find('form').hasClass(propStyles.search)).toBeTruthy()
  })
})
