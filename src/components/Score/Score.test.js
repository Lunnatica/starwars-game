import React from 'react'
import Score from "./Score"
import { shallow } from 'enzyme'

describe('<Score />', () => {
  it('should render correct text', () => {
    const wrapper = shallow(<Score id="1" count={23} />)
    expect(wrapper.text()).toEqual("1 score is 23")
  })
})
