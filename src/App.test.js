import React from 'react'
import App from './App'
import Header from "./components/Header/Header"
import { shallow } from 'enzyme'
import PlayArea from './components/PlayArea/PlayArea'
import Footer from './components/Footer/Footer'


describe('<App />', () => {
  it('should render <Header />', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Header)).toHaveLength(1)
  })

  it('should render <PlayArea />', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(PlayArea)).toHaveLength(1)
  })

  it('should render <Footer />', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Footer)).toHaveLength(1)
  })
})
