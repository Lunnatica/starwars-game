import React from 'react';
// import ReactDOM from 'react-dom';
import Footer from './Footer';
import { shallow } from 'enzyme'


describe('<Footer />', () => {
  it('should render Footer', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toBeDefined()
    expect(wrapper.find("footer")).toHaveLength(1)
  })
})
