class Game {
    constructor() {
        this.rolls = []
    }

    roll(pins) {
        this.rolls.push(pins)
    }

    score() {
        let finalScore = 0
        let frameIndex = 0
        for(let frame = 0; frame < 10; ++frame) {
            if (this.isStrike(frameIndex)) {
                finalScore += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]
                frameIndex++
            }
            else if (this.isSpare(frameIndex)) {
                finalScore += 10 + this.rolls[frameIndex+2]
                frameIndex += 2
            }
            else {
                finalScore +=
                    this.rolls[frameIndex] + this.rolls[frameIndex + 1]
                frameIndex += 2
            }
        }
        return finalScore
    }

    isStrike(frameIndex) {
        return this.rolls[frameIndex] === 10
    }

    isSpare(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex+1] === 10
    }
}

module.exports = {
    Game
}
