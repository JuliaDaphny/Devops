module.exports = {
    add: (a, b) => {
        return a+b;
    },
    subtract: (a, b) => {
        return a-b;
    },
    division: (a, b) => {
        if(b === 0) {
            throw new TypeError("Divisão ilegal por zero!")
        }
        return a/b;
    },

    multiply: (a, b) => {
        return a*b;
    }

}