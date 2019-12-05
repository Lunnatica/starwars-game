import React from 'react'
import Header from './Header'
import { shallow } from 'enzyme'


describe('<Header />', () => {
  it('should render Header', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find("header")).toHaveLength(1)
  })
})