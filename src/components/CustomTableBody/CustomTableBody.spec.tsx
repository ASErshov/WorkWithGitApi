import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import CustomTableBody from './index'

describe('<CustomTableBody />', () => {
  const Component = (
    <CustomTableBody records={[[1,2,3],[4,5,6],[7,8,9]]}/>
  )

  it('Snapshot is correct', () => {
    const wrapper = renderer.create(Component).toJSON()

    expect(wrapper).toMatchSnapshot()
  })

  it('Passed props is valid', () => {
    const wrapper = mount(Component)

    expect(wrapper.props().records).toEqual([[1,2,3],[4,5,6],[7,8,9]])

    wrapper.unmount()
  })

})
