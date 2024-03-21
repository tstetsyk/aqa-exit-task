/* JavaScript data types

1. Get two random int and divide the first by second and compare with second if it more then second.
Use ternary and regular operators.
Write a result to the console.
*/

let randomNumber1 = Math.floor(Math.random() * 100)
let randomNumber2 = Math.floor(Math.random() * 100)

let result = randomNumber1 / randomNumber2 > randomNumber2 ? "First number divided by second is greater than second number" : "First number divided by second is less than second number"

console.log(result)

/* 
2. Get one integer. Transform it to string.
Compare then by equal and strict equal
Write a result to the console.
*/

let integer = 42
let stringInteger = integer.toString()
let isEqual = integer == stringInteger
let isStrictEqual = integer === stringInteger

console.log(`The result of loose equality comparison is: ${isEqual}`);
console.log(`The result of strict equality comparison is: ${isStrictEqual}`);

/*
3. Return the type of the arguments for each data types in js.
For all of these arguments return NOT (!) and double NOT (!!)
Write a result to the console.
*/

function checkTypes(...args) {
    let typeResults = args.map(arg => {
        return {
            type: typeof arg,
            not: !arg,
            doubleNot: !!arg
        }
    })
    return typeResults
}

let result1 = checkTypes(42, 'Hello', true, null, undefined, [], {})
console.log(result1)


/* JavaScript Arrays

4. Write a method that performs a deep comparison between two arrays and returns true if they are identical.
The depth of the nested arrays is unknown.

example: compare arrays
[0, 1, 2, [3, 4]] and [0, [1, 2], [[3, 4]]] and return TRUE
*/

let compareArrays = (arr1, arr2) => {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false
    } else {
        return arr1.toString() === arr2.toString()
    }
}

/*
5. Write a method that returns an array without listed values

example: given the array
[1, 2, 3, 1, 2] and array of values to delete [1, 2]
method returns [3]
*/

let removeValuesFromArray = (arr, valuesToRemove) => arr.filter(element => !valuesToRemove.includes(element))

/*
6. Write a method that returns the common values in two arrays, excluding undefined and white space values

example: convert arrays
['File Name',' ','File Type',, 'Year','  ','Country','Date Created',5,'Uploaded by','Status','Actions']
and
[' ','File Type', 'Year','  ',0,'Date Created',5,'Uploaded by',,'Status','Actions']
into
['File Type', 'Year', 'Date Created', 5, 'Uploaded by', 'Status']
*/

let findCommonValues = (arr1, arr2) => {
    return arr1.filter(element => arr2.includes(element) && element !== undefined && element.toString().trim() !== '')
}

/*
7. Write a method that returns only unique values (removes duplicate values) in one array

example: convert array 
[10,14,19,14,10,2,9,10,14,9,18] 
into 
[10,14,19,2,9,18]
*/

let removeDuplicateValues = arr => [...new Set(arr)]

/* JavaScript Objects

8. Using the function Object.create(), create an object 'person' with 2 properties firstName and lastName.
Using the function Object.defineProperty(), define new property 'fullName' for the object 'person' with the accessor properties 'get' and 'set'.
When person.fullName() is called, full name has to be returned in the format  [lastName] [firstName],
When new value for 'fullName' is set (e.g., person.fullName = `Ivanov Ivan`), 'firstName' and 'lastName' should be updated.
*/

let person = Object.create({}, {
    firstName: {
        value: 'James',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Bond',
        writable: true,
        enumerable: true,
        configurable: true
    }
})

Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.lastName} ${this.firstName}`
    },
    set(newFullName) {
        const [lastName, firstName] = newFullName.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    },
    enumerable: true,
    configurable: true
})


/*
9. Create 2 objects (source and target). Using a method of the class Object, copy properties with values from source object to target.
What will happen, if source and target objects have same properties?
The properties of target object will be overwritten by source object that have the same properties. 
*/

let targetObj = {
    a: 1,
    b: 2   
}

let sourceObj = {
    a: 0,
    c: 3,
    d: 4
}

Object.assign(targetObj, sourceObj)

/*
10. Create a function deleteNonNumbers(obj), which deletes all non numbers properties from the object.
The function has not to return anything. Provided object should be updated directly.

source object example
let myObject = {
  value1: 1,
  value2: 2,
  boolValue: false,
  value3: 3,
  stringValue: 'any string',
}

call of function
deleteNonNumbers(myObject)

result
myObject = {
  value1: 1,
  value2: 2,
  value3: 3,
}
*/

let deleteNonNumbers = (obj) => {
    for(let property in obj) {
        if(typeof obj[property] !== 'number') {
            delete obj[property]
        }
    }
}
  
