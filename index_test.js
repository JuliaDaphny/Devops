const { expect } = require("@jest/globals");
const { test } = require("picomatch");
const { describe } = require("yargs")
const index = require("./index.js")

describe("O aritimeticas", () => {
    //test ou it - epecifica novo teste
    test("soma de dois números", () => {
        const result = index.add(3,5);
    }
    
    )

});

test("Soma de dois números"), ()=> {

    const result = index.add(3,5)
    expect(result).toEqual(2)
}