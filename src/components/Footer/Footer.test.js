import React from 'react'
import Footer from './Footer'
import { shallow } from 'enzyme'


describe('<Footer />', () => {
  it('should render Footer', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find("footer")).toHaveLength(1)
  })
})
