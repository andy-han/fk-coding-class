var library_name = 'The Best Library'
var books = ["Cat in the Hat", "Hobbit", "Bible"]
var members = ["Andy", "Christy", "Joshua"]

function add_new_member(new_member) {
    members.push(new_member)
}

function is_the_library_open(time) {
    if (8 < time && 16 > time) {
        return "Yes the library is open";
    } else {
        return "No the library is not open";
    }
}

console.log("What is the name of the library?")
console.log(library_name)
console.log("What books does the library have?")
console.log(books)
console.log("How many books is that?")
console.log(books.length)
console.log("Who are the members of the library?")
console.log(members)
console.log("Please add \'Barney the Dinosaur\' as a new member.")
add_new_member("Barney the Dinosaur")
console.log("We added Barney. The members now are ", members)
console.log("The library is open from 8am to 5pm. It is now4pm. Is the library open?")
console.log(is_the_library_open(16))
console.log("What are the books sorted by alphabetical order?")
// console.log(books.sort())

