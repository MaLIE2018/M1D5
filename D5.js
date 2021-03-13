/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available 
      for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

const movies = [{
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        Year: "2001",
        imdbID: "tt0120737",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Return of the King",
        Year: "2003",
        imdbID: "tt0167260",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Two Towers",
        Year: "2002",
        imdbID: "tt0167261",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "Lord of War",
        Year: "2005",
        imdbID: "tt0399295",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "Lords of Dogtown",
        Year: "2005",
        imdbID: "tt0355702",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings",
        Year: "1978",
        imdbID: "tt0077869",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1990",
        imdbID: "tt0100054",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
        Title: "The Lords of Salem",
        Year: "2012",
        imdbID: "tt1731697",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
        Year: "1984",
        imdbID: "tt0087365",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1963",
        imdbID: "tt0057261",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
        Title: "The Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Infinity War",
        Year: "2018",
        imdbID: "tt4154756",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Age of Ultron",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
]

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "Strive"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20

/* Ex.C 
    Create a variable called "random" and assign to it a random number 
    between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the 
    following information: name = your name, surname = your surname, age = your age.
*/

const me = { name: "Max", surname: "Liebsch", age: 30 }


/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ["python", "javascript"]


/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

delete me.skills.pop()

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = () => Math.floor(Math.random() * (7 - 1) + 1)

//let random = new Array(100).fill(null).map(() => (dice())) // Expensive bc of the map, but why?

// random = new Array(100)
// for (let i = 0; i < random.length; i++) {
//     random[i] = dice()
// }

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters 
    and returns the biggest one.
*/

const whoIsBigger = function(n1, n2) {
        return Math.max(n1, n2)
    }
    // n1 > n2 ? n1:n2

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and 
    returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = function(myString) {
        return myString.split(' ')
    }
    /* Ex.4
        Write a function called "deleteOne" which receives a string and a boolean as parameters.
        If the boolean value is true it should return the string without the first letter, 
        otherwise it should remove the last one from it.
    */

const deleteOne = function(myString, myBool) {
    if (myBool) return myString.slice(1)
    return myString.slice(0, myString.length - 1)
}

//console.log('deleteOne("Strive", true):', deleteOne("Strive", true))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter 
   and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = function(myString) {

        let numbers = new RegExp("[0-9]", "gi")
        return myString.replace(numbers, "")
    }
    /* Ex.6 
           Write a function called "isThisAnEmail" which receives a string as a parameter 
           and returns true if the string is a valid email address.
        */

const isThisAnEmail = function(myString) {
    return /\S+@\S+\.\S+/.test(myString)
}

isThisAnEmail("liesbhsc@dfdf.ssd")


/* Ex.7
               Write a function called "whatDayIsIt" that should return the current day of the week.
            */

const whatDayIsit = function() {
    switch (new Date().getDay()) {
        case 0:
            return "Sunday"
            break
        case 1:
            return "Monday"
            break
        case 2:
            return "Tuesday"
            break
        case 3:
            return "Wednesday"
            break
        case 4:
            return "Thurseday"
            break
        case 5:
            return "Friday"
            break
        case 6:
            return "Saturday"
            break
    }
}

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
Pseudocode
//create the array with the values with a for loop, create an object with its properties sum and values
//sum up the values of the array ant store it in sum 
*/

const rollTheDices = function(no) {
    // array with random values from dice
    let random = new Array(no).fill(null).map(() => dice())

    // sum up the elements in the array
    const reducer = (accumulator, currenValue) => accumulator + currenValue
    let sum = random.reduce(reducer)

    return { sum: sum, values: random }
}

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and 
   should return the number of days passed since that date.
*/

const howManyDays = function(date = new Date()) {
    return Math.floor((Date.now() - date.getTime()) / (1000 * 3600 * 24))

}

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday,
    false otherwise.
*/

const isTodayMyBirthday = function() {
    let myBirthday = new Date(1991, 0, 28)
    let today = new Date()
    let myDay = myBirthday.getDate()
    let myMonth = myBirthday.getMonth()
    let myYear = myBirthday.getFullYear()

    return (today.getDate() === myDay &&
        today.getMonth() === myMonth)
}
console.log('new Date (1991,0, 28):', new Date(1991, 0, 28))


// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/



function deleteProp(mysteriousObj = {}, myString) {
    delete mysteriousObj[myString]
    return mysteriousObj
}

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array 
    provided at the end of this file.
*/

const olderMovie = function(movies) {
    let smallestYear = movies[0].Year // start with assumption
    for (const movie of movies) {
        // console.log(movie.Year);
        if (smallestYear > movie.Year) { // Is smallestYear still the smallest year?
            smallestYear = movie.Year // If smallestYear is greater then movie.Year is new smallestYear
            title = movie.Title
        }
    }
    return title, smallestYear

}

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

const countMovies = function(movies) {
    return movies.length
}

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

const onlyTheTitles = function(movies) {
        let titles = []
        for (const movie of movies) {
            titles.push(movie.Title)
        }
        return titles
    }
    /* Ex.15
       Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
    */

const onlyInThisMillennium = function(movies) {
    let millMovies = []
    for (const movie of movies) {
        if (movie.Year >= 2000)
            millMovies.push(movie)
    }
    return millMovies
}

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

const getMovieById = function(movies, movieId) {
    for (const movie of movies) {
        if (movie.imdbID === movieId) {
            return movie
            break
        }
    }
}

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

const sumAllTheYears = function(movies) {
    let count = 0
    for (const movie of movies) {
        count = count + parseInt(movie.Year)
    }
    return count
}


/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

const searchByTitle = function(movies, lookUp) {
    let matchedMovies = []
    for (const movie of movies) {
        // if (movie.Title.toLowerCase().includes(lookUp.toLowerCase()))
        //     matchedMovies.push(movie)
        if (movie.Title.indexOf(lookUp) !== -1)
            matchedMovies.push(movie)
    }
    return matchedMovies
}


// console.log('searchByTitle(movies, "ring"):', searchByTitle(movies, "ring"))




//index of 

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies 
    which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

const searchAndDivide = function(movies, lookUp) {
    let matchedMovies = []
    let unmatchedMovies = []
    for (const movie of movies) {
        if (movie.Title.toLowerCase().includes(lookUp.toLowerCase())) {
            matchedMovies.push(movie)
        } else {
            unmatchedMovies.push(movie)
        }
    }
    return { match: matchedMovies, unmatch: unmatchedMovies }

}

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter 
   and returns the movies array without the element in the given position.
*/

const removeIndex = function(movies, index) {
    movies.splice(index, 1)
    return movies
}

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as 
  a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

// const halfTree = function(num) {
//     let asterix = "*"
//     let output = ""
//     for (let i = 0; i < num; i++) {
//         console.log(output = output + asterix)
//     }
// }

function halfTree(height) {
    for (let i = 0; i < height; i++) {
        console.log('outerloop')
        console.log('i:', i)
        let toPrint = ""
        for (let j = 0; j < i + 1; j++) {
            console.log('innerlopp')
            console.log('j:', j)
            toPrint += "*"
        }
        console.log(toPrint)
    }
}

console.log('halfTree(3):', halfTree(3))

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter 
  and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
const whiteSpace = function(num) {
    let SpaceString = " "
    let output = ""
    for (let i = 0; i < num - 1; i++) {
        output = output + SpaceString
    }
    return output
}

//console.log(whiteSpace(1));
// str.repeat(2 )

const tree = function(num) {
    let asterix = "*"
    let asterix2 = "**"
    let output = ""
    let k = num
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            output = asterix
            console.log(whiteSpace(k) + asterix)
        } else {
            output = output + asterix2
            console.log(whiteSpace(k) + output)
        }
        k--
    }
}

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter 
  and returns true if the given number is a prime number.
*/
//copy cat
const isItPrime = function(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;

}


/* This movies array is used throughout the exercises. Please don't change it :)  */