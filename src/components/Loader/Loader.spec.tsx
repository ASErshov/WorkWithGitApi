import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import styles from './Loader.module.css'

import Loader from './index'

describe('<Loader />', () => {
  const Component = (
    <Loader/>
  )

  it('Snapshot is correct', () => {
    const wrapper = renderer.create(Component).toJSON()

    expect(wrapper).toMatchSnapshot()
  })


})
