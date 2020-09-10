import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import styles from './Button.module.css'

import FilterSelect from './index'

describe('<FilterSelect />', () => {
  const onClick = jest.fn()

  const Component = (
    <FilterSelect
      handleSelect = {onClick}
      lable = 'Фильтр по лицензии'
      items = {[{name: '1', key: 1},{name: '2', key: 2},{name: '3', key: 3}]}
      selected = {1}
    />
  )

  it('Snapshot is correct', () => {
    const wrapper = renderer.create(Component).toJSON()

    expect(wrapper).toMatchSnapshot()
  })

  it('Passed props is valid', () => {
    const wrapper = mount(Component)

    expect(wrapper.props().lable).toEqual('Фильтр по лицензии')
    expect(wrapper.props().items).toEqual([{name: '1', key: 1},{name: '2', key: 2},{name: '3', key: 3}])
    expect(wrapper.props().selected).toEqual(1)
  })

  it('JSX has been rendered is valid', () => {
    const wrapper = mount(Component)

    expect(wrapper.find('label').text()).toEqual('Фильтр по лицензии')
    expect(wrapper.find('div.MuiInput-input').text()).toEqual('1')
  })
})
