import React from 'react'
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import GameCard from './GameCard'
import { mount } from 'enzyme'
import { stateTest } from './testData'


const mockStore = configureMockStore([])

describe('<GameCard />', () => {
  it('should render successful <ResultBadge /> for winner', () => {
    const state = stateTest.winnerP1
    const store = mockStore(state)
    const wrapper = mount(
    <Provider store={store}>
        <GameCard id="P1"/>
    </Provider>
    )
    expect(wrapper.find('.badge-success').length).toBe(1)
  })

  it('should render unsuccessful <ResultBadge /> for loser', () => {
    const state = stateTest.winnerP2
    const store = mockStore(state)
    const wrapper = mount(
    <Provider store={store}>
        <GameCard id="P1"/>
    </Provider>
    )
    expect(wrapper.find('.badge-danger').length).toBe(1)
  })

  it('should render <ResultBadgeDraw /> for draw', () => {
    const state = stateTest.draw
    const store = mockStore(state)
    const wrapper = mount(
    <Provider store={store}>
        <GameCard id="P1"/>
    </Provider>
    )
    expect(wrapper.find('.badge-info').length).toBe(1)
  })

  it('should render <LoadingCard /> when no winner data', () => {
    const state = stateTest.noWinner
    const store = mockStore(state)
    const wrapper = mount(
    <Provider store={store}>
        <GameCard id="P1"/>
    </Provider>
    )
    expect(wrapper.find(".card-title").length).toBe(1)
  })

  it('should render <BattleAttribute/> mass for person', () => {
    const state = stateTest.winnerP1
    const store = mockStore(state)
    const wrapper = mount(
    <Provider store={store}>
        <GameCard id="P1"/>
    </Provider>
    )
    expect(wrapper.find(".card-text").text()).toContain("Mass")
  })
 
  it('should render <BattleAttribute/> crew for starship', () => {
    const state = stateTest.starship
    const store = mockStore(state)
    const wrapper = mount(
    <Provider store={store}>
        <GameCard id="P1"/>
    </Provider>
    )
    expect(wrapper.find(".card-text").text()).toContain("Crew")
  })
})
