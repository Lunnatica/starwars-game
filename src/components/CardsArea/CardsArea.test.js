import React from 'react'
import CardsArea from './CardsArea'
import { shallow } from 'enzyme'
import GameCard from "../GameCard/GameCard"


describe('<CardsArea />', () => {
  it('should render 2 <GameCard /> with ids P1 and P2 respectively', () => {
    const wrapper = shallow(<CardsArea />)
    expect(wrapper.find(GameCard)).toHaveLength(2)
    expect(wrapper.find("#P1")).toHaveLength(1)
    expect(wrapper.find("#P2")).toHaveLength(1)
  })
})
