import { battle, getRandomNumber } from "./gameLogic"

const card1 = {name: "Paula",mass: 120}
const card2 = {name: "Ardit",mass: 60}
const list1 = [card1,card2]


describe('Game logic functionality test', () => {
    // mock random functionality so it returns two different numbers
    // const mockMath = Object.create(global.Math)
    // mockMath.random = jest
    // .mockImplementationOnce(() => 0)
    // .mockImplementationOnce(() => 1)
    // global.Math = mockMath;
    // cardList = 
    // describe('battle()', () => {
    //     it('should return winner P1', () => {
    //         const mockMath = Object.create(global.Math)
    //         mockMath.random = 0.5
    //         let result = battle()
    //         expect(result).toBe({card1,card2,winner:"P1"})
    //     })
    // })
    //jest.spyOn(Math,'random')
    jest.fn(getRandomNumber)
    .mockImplementationOnce(() => 0)
    .mockImplementationOnce(() => 1)
    describe('battle()', () => {
        it('should return winner P1', () => {
            // const mockMath = Object.create(global.Math)
            // mockMath.random = 0.5
            let result = battle(list1)
            expect()
            expect(result).toStrictEqual({card1,card2,winner:"P1"})
            //expect(Math.random).toHaveBeenCalledTimes(2)

        })
    })
})


 