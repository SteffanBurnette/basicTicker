

//Arrow functions
const getSpendAlert = (amount) => {
    return `Warning! You just spent $${amount}`
}

console.log(getSpendAlert(250))

//One line arrow function
const getSpendAlert2 = (name, amount) => `Warning! Hey ${name}! You just spent $${amount}`
console.log(getSpendAlert2("Jeff", 450))

//rest parameters
function setPremissionLevel(premissionLevel, ...names){

    names.forEach((name) => console.log(`${name} now has ${premissionLevel} level access`))
}

setPremissionLevel("admin", "Dave", "Fred", "May")