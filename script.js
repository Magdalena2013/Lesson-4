// let human = {
//     fullname: "Object Name",
//     age:  11,
//     email: "email.com"
// };
// console.log(human.fullname);

// let dog = {
//     dogname: "Tuzic",
//     age: 8,
//     color: "White"
// };
// console.log(dog.color);

// dog.age = 9;
// dog.color = "Gray";

// console.log(dog);






// elementele/functii -> obiecte -. clasa
// class human{
//     let organe = {
//         inima: "Transporta singe"
//         creierul: "Prelicreaza informatia"
//     }

//     function eat(){
//         console.log("Eu mananc");
//     }

//     age: 548753847538;
// }

// let info = ""

// let n = {
//     info: "Lesson 4",

//     display(parametru){
//         console.log(this.info, parametru);
//     }
// };

// n.display("Text");











// let phone = {
//     brand: "Samsung",
//     color: "Raimbow",
//     procesor: "Exynos",
//     camera: 264,
//     ac_dc: "Este",

//     turnOn(){
//         console.log(this.brand, " Se porneste ");   
//     },

//     discharge(){
//         console.log(" Incarcama way ... 1%");   
//     },

//     call(){
//         console.log(" Eu pot suna ");   
//     },

//     foto(){
//     return " Eu fac poze ", this.camera, "MP";   
//     }
// };

// console.log(phone.brand);
// console.log(phone.foto())
// phone.call();




    class cat{
        constructor(name, age){
            this.name = name
            this.age = age
        }
    colapitea(cat1){
        console.log(cat1 , "A venit la", this.name, "sa bea cola");
    }
}

let barsik = new cat("Barsik", 2);
let garfild = new cat("Garfild", 3);
barsik.colapitea(garfild.name)
garfild.colapitea(barsik.name)






