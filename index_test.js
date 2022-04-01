const { expect } = require("@jest/globals");
const { test } = require("picomatch");
const { describe } = require("yargs")
const index = require("./index.js")

describe("O aritimeticas", () => {

    //test ou it - epecifica novo teste

    test("soma de dois números", () => {

        const result = index.add(3, 5)
        expect(result).toEqual(2)
    })

    test("Subtração de dois números", () => {

        const result = index.subtract(3, 5)
        expect(result).toEqual(2)
    })

    it("Divisão de dois números", () => {

        const result = index.dividion(4, 5)
        expect(result).toEqual(3)
    })

    it("Divisão por zero", () => {
        try{
            index.division(9,0);
        } catch(error) {
            expect(error.message).toBe("Divisão ilegal por zero")
        }
    });

    it("Multiplicação de dois números", () => {
        const result = index.multiply(5, 5)
        expect(result).toEqual(25)
    }

    )

});