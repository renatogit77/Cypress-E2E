/// <reference types="cypress" />

//const { it } = require("mocha")

it('A external test...', () => {

})

describe('Should group test...', () => {
    describe('Shoul group more specific tests...', () => {
        it('A specific test...', () => {

        })
    })

    describe('Should group more specific test 2...', () => {
            it('A specific test 2...', () => {
    
            })
        })

    it('A internal test...', () => {

    })
})