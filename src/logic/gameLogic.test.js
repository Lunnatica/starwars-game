import { battle } from "./gameLogic"


describe('Game logic functionality test', () => {
    // mock random functionality so it returns two different numbers
    const mockMath = Object.create(global.Math)
    mockMath.random = jest
    .mockImplementationOnce(() => 1)
    .mockImplementationOnce(() => 2);
    global.Math = mockMath;
    cardList = 
    describe('battle()', () => {
        it('should return object with draw in the round', () => {
            const mockMath = Object.create(global.Math)
            mockMath.random = 0.5
            battle()
        })
        // it('should return object with P1 winning the round', () => {
        //     const mockMath = Object.create(global.Math)
        //     mockMath.random = 
        // })
    })
})

const myMockFn = jest

  .mockImplementationOnce(() => 'first call')

  .mockImplementationOnce(() => 'second call');

 