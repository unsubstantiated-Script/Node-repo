setTimeout(() => {
    console.log("Two seconds are up");
}, 2000)

const names = ['andrew', 'jen', 'jess']

const shortNames = names.filter(name => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 22.22222,
            long: 555.55555
        }

        callback(data)
    }, 2000)
}

geocode('Philly', (data) => {
    console.log(data);
})

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})