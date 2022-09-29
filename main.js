
// reduce

const people = [
    { id: "1", name: "Leigh", age: 35 },
    { id: "2", name: "Jenny", age: 30 },
    { id: "3", name: "Heather", age: 16 },
];

let result;

// count

result = people.reduce((acc, item) => {
    return acc + 1
}, 0)

console.log({ count: result })

// sum ages

result = people.reduce((acc, item) => {
    return acc + item.age
}, 0)

console.log({ sumOfAges: result })


// array of names (map)

result = people.reduce((acc, item) => {
    return [...acc, item.name]
}, [])

console.log({ ArrayOfNames: result })


// convert to id => person lookup (dict)

result = people.reduce((acc, item, key) => {
    return { ...acc, [item.id]: item }
}, {})

console.log({ convertId: result })

// max age

result = people.reduce((acc, item) => {
    if (item.age > acc) {
        return item.age
    } else {
        return acc
    }
}, 0)

console.log({ maxAge: result })

// min age

result = people.reduce((acc, item) => {
    if (item.age < acc || acc === 0) {
        return item.age
    } else {
        return acc
    }
}, 0)

console.log({ minAge: result })

// all over 18

result = people.reduce((acc, item) => {
    if (item.age > 18) {
        return { ...acc, nmbHits: acc.nmbHits + 1, matches: [...acc.matches, item] }
    }
    return acc
}, {
    matches: [],
    nmbHits: 0
})



console.log({ allOver18: result })

// all under 18

result = people.reduce((acc, item) => {
    if (item.age < 18) {
        return { ...acc, nmbHits: acc.nmbHits + 1, matches: [...acc.matches, item] }
    }
    return acc
}, {
    matches: [],
    nmbHits: 0
})

console.log({ allUnder18: result })

// any under 18


result = people.reduce((acc, item) => {
    if (acc === true) return acc

    if (item.age < 18) return true

    return false
}, false)

console.log({ anyUnder18: result })



// count occurrences

const orders = [
    { id: "1", status: "pending", name: "ps4" },
    { id: "2", status: "pending", name: "ps5" },
    { id: "3", status: "cancelled", name: "xbox" },
    { id: "4", status: "cancelled", name: "pc" },
    { id: "5", status: "cancelled", name: "macbook" },
    { id: "6", status: "shipped", name: "Iphone" },
];

result = orders.reduce((acc, item) => {
    if (acc[item.status]) {
        return { ...acc, [item.status]: { count: (acc[item.status].count + 1), items: [...acc[item.status].items, item] }}
    } else {
        return { ...acc, [item.status]: { count: 1 , items: [{...item}]} }
    }
}, {})

console.log({ ordersStatus: result })

// flatten

const folders = [
    "index.js",
    ["flatten.js", "map.js"],
    ["any.js", ["all.js", "count.js"]],
];

const recursiveFlatten = (acc, item) => {
    if(Array.isArray(item)){
        return item.reduce(recursiveFlatten, acc) 
    }
    return [...acc, item];
}


result = folders.reduce(recursiveFlatten, [])
console.log({recursiveFlatten: result})

  // create reduce ourselves