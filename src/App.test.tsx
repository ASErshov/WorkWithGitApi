import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

describe('<App />', () => {
  const Component = (
    <App/>
  )

  it('Snapshot is correct', () => {
    const wrapper = renderer.create(Component).toJSON()

    expect(wrapper).toMatchSnapshot()
  })

})
