import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import CustomTableHead from './index'

describe('<CustomTableHead />', () => {
  const Component = (
    <CustomTableHead lables={[{text:'first', width: 20}, {text:'second'}]}/>
  )

  it('Snapshot is correct', () => {
    const wrapper = renderer.create(Component).toJSON()

    expect(wrapper).toMatchSnapshot()
  })

  it('Passed props is valid', () => {
    const wrapper = mount(Component)

    expect(wrapper.props().lables).toEqual([{text:'first', width: 20}, {text:'second'}])
  
    wrapper.unmount()
  })
})
