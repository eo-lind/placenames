// Put your code here

const names = [
    "Nashville",
    "Hong Kong",
    "The back yard",
    "Earth",
    "London",
    "The mall",
    "Ryman Auditorium",
    "The Great Wall of China",
]

console.log("All Place Names: ", names.join(", "))
console.log(" ");
console.log("----------------");
console.log(" ")

// for (const name of names) {
//     if (name.startsWith("The ")) {
//         console.log(name)
//     }
// }

const namesWithArticlesArr = []

for (const name of names) {
    if (name.startsWith("The ")) {
        namesWithArticlesArr.push(name)
    }
}

console.log("Names beginning with an article: ", namesWithArticlesArr.join(", "));
