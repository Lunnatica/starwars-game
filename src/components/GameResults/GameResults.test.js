import React from 'react'
import { mount } from 'enzyme'
import Score from '../Score/Score'
import GameResults from './GameResults'
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"

const mockStore = configureMockStore([])
const state = { players:{winner:"P1", scoreP1:"2", scoreP2:"1"}}
const stateDraw = { players:{winner:"draw", scoreP1:"2", scoreP2:"1"}}

describe('<GameResults />', () => {
  it('should render <Score /> twice', () => {
    const store = mockStore(state)
    const wrapper = mount(
      <Provider store={store}>
        <GameResults />
      </Provider>) 
    expect(wrapper.find(Score)).toHaveLength(2)
  })

  it('should render <CurrentGameResults /> with draw', () => {
    const store = mockStore(stateDraw)
    const wrapper = mount(
      <Provider store={store}>
        <GameResults />
      </Provider>) 
    expect(wrapper.find("#CurrentGameResults").text())
    .toContain("Draw")
  })

  it('should render <CurrentGameResults /> with winner P1', () => {
    const store = mockStore(state)
    const wrapper = mount(
      <Provider store={store}>
        <GameResults />
      </Provider>) 
     expect(wrapper.find("#CurrentGameResults").text())
     .toContain("P1")
  })
})
