import React from "react"
import { shallow } from 'enzyme'
import Button from './Button'


describe('<Button />', () => {
  const onButtonClickMock = jest.fn()

  afterEach(() => {
    onButtonClickMock.mockReset()
  })

    describe('when user clicks button', () => {
      it ('callback is called correctly', () => {
        const wrapper = shallow(
          <Button className="buttonPlay"
            callback={onButtonClickMock}
            disabled={false}
          />
        )
        wrapper.simulate('click')
        expect(onButtonClickMock).toHaveBeenCalledTimes(1)
      })
    })
})