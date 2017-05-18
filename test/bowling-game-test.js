require('chai').should()

const {Game} = require('../bowling-game.js')

function rollMany(game, pins, times = 20) {
    for(let i = 0; i < times;i += 1) {
        game.roll(pins)
    }
}

function rollSpare(game) {
    game.roll(5)
    game.roll(5)
}

function rollStrike(game) {
    game.roll(10)
}

describe('Bowling Game', () => {
    let game
    
    beforeEach(() => {
        game = new Game()
    })

    context('Gutter game', () => {
        it('scores 0', () => {
            const pins = 0

            rollMany(game, pins)

            const score = game.score()
            score.should.equal(0)
        })
    })

    context('All ones', () => {
        it('scores 20', () => {
            const pins = 1

            rollMany(game, pins)
            
            const score = game.score()
            score.should.equal(20)
        })
    })

    context('Spare', () => {
        it('adds the score of the next roll', () => {
            rollSpare(game)
            game.roll(3)
            
            rollMany(game, 0, 17)

            const score = game.score()
            score.should.equal(16)
        })
    })

    context('Strike', () => {
        it('adds the score of the next two rolls', () => {
            rollStrike(game)
            game.roll(4)
            game.roll(3)
            
            rollMany(game, 0, 16)

            const score = game.score()
            score.should.equal(24)
        })
    })

    context('Perfect Game', () => {
        it('scores 300 points', () => {
            rollMany(game, 10, 12)

            const score = game.score()
            score.should.equal(300)
        })
    })
})

