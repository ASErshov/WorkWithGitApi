import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Header from './index'

describe('<Header />', () => {
  const Component = (
    <Header>Добро пожаловать</Header>
  )

  it('Snapshot is correct', () => {
    const wrapper = renderer.create(Component).toJSON()

    expect(wrapper).toMatchSnapshot()
  })

  it('Passed props is valid', () => {
    const wrapper = mount(Component)

    expect(wrapper.props().children).toEqual('Добро пожаловать')

    wrapper.unmount()
  })

})
