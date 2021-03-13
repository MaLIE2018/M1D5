const dice = function() {

    let random = Math.floor(Math.random() * 7)

    return random
}

const rollTheDices = function(n) {

    let values = []

    for (i = 0; i < n; i++) {

        let dice = Math.floor(Math.random() * 7)

        values.push(dice)
    }
    let count = 0

    for (i = 0; i < n - 1; i++) {

        count += values[i]
    }

    return {

        val: values,

        sum: count
    }

}
console.log(rollTheDices(6))


let a = "test"

console.log('a.repeat(2):', a.repeat(2))