import { battle } from "./gameLogic"
import * as randomModule from './getRandomNumber'

// people mock data
const card1 = {name: "Card1",mass: 120}
const card2 = {name: "Card2",mass: 60}
const card3 = {name: "Card3",mass: 60}
const peopleCards = [card1,card2,card3]

// starships mock data
const card1Battle = {name: "Card1",crew: 120}
const card2Battle = {name: "Card2",crew: 60}
const card3Battle = {name: "Card3",crew: 60}
const starshipCards = [card1Battle,card2Battle,card3Battle]


describe('Game logic functionality test', () => {
    describe('battle()', () => {
        function mockGetRandomNumber(firstReturnValue,secondReturnValue) {
            // mock random functionality so it returns two numbers passed through args
            randomModule.getRandomNumber = jest.fn()
                .mockReturnValueOnce(firstReturnValue)
                .mockReturnValueOnce(secondReturnValue)
        } 
        afterEach(() => {
            // resets return values between tests to be able to get different list items
            randomModule.getRandomNumber.mockReset() 
        })
        describe('People battle', () => {
            it('should return card1, card2 and winner = P1', () => {
                mockGetRandomNumber(0,1) 
                let result = battle(peopleCards)
                expect(result).toStrictEqual({card1,card2,winner:"P1"})
            })
            it('should return card2, card3 and winner = draw', () => {
                mockGetRandomNumber(1,2) 
                let result = battle(peopleCards)
                expect(result).toStrictEqual({card1:card2,card2:card3,winner:"draw"})
            })
            it('should return card2, card3 and winner = draw', () => {
                mockGetRandomNumber(1,0) 
                let result = battle(peopleCards)
                expect(result).toStrictEqual({card1:card2,card2:card1,winner:"P2"})
            })
        })

        describe('Starship battle', () => {
            it('should return card1, card2 and winner = P1', () => {
                mockGetRandomNumber(0,1) 
                let result = battle(starshipCards)
                expect(result).toStrictEqual({card1:card1Battle,card2:card2Battle,winner:"P1"})
            })
            it('should return card2, card3 and winner = draw', () => {
                mockGetRandomNumber(1,2) 
                let result = battle(starshipCards)
                expect(result).toStrictEqual({card1:card2Battle,card2:card3Battle,winner:"draw"})
            })
            it('should return card2, card3 and winner = draw', () => {
                mockGetRandomNumber(1,0) 
                let result = battle(starshipCards)
                expect(result).toStrictEqual({card1:card2Battle,card2:card1Battle,winner:"P2"})
            })
        })
        
    })
})


 