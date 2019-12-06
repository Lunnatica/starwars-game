import React from 'react'
import { mount } from 'enzyme'
import PlayActions from './PlayActions'
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import Button from '../Button/Button'



const mockStore = configureMockStore([])
const state = { swapiLists: {people: [], starships: []}, players:{winner:"P1", scoreP1:"2", scoreP2:"1"}}
const stateDraw = { players:{winner:"draw", scoreP1:"2", scoreP2:"1"}}


describe('<PlayActions />', () => {
  it('should render <Button /> twice', () => {
    const store = mockStore(state)
    const wrapper = mount(
      <Provider store={store}>
        <PlayActions />
      </Provider>) 
    expect(wrapper.find(Button)).toHaveLength(2)
  })

  it('should render <GameDescription />', () => {
    const store = mockStore(state)
    const wrapper = mount(
      <Provider store={store}>
        <PlayActions />
      </Provider>) 
    expect(wrapper.find(".GameDescription")).toHaveLength(1)
  })
})
