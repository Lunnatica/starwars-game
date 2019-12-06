import React from 'react'
import PlayArea from './PlayArea'
import { shallow } from 'enzyme'
import PlayActions from '../PlayActions/PlayActions'
import GameResults from '../GameResults/GameResults'
import CardsArea from '../CardsArea/CardsArea'


describe('<PlayArea />', () => {
  it('should render <PlayActions />, <GameResults /> and <CardsArea />', () => {
    const wrapper = shallow(<PlayArea />)
    expect(wrapper.find(PlayActions)).toHaveLength(1)
    expect(wrapper.find(GameResults)).toHaveLength(1)
    expect(wrapper.find(CardsArea)).toHaveLength(1)
  })
})


