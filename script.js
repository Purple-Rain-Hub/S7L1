// esercizio 1
class User{
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    compareAge(x, y){
        if (x.age > y.age && x.age > this.age){
            if (y.age > this.age){
                return `${x.firstName} è più vecchio di ${y.firstName}, ${y.firstName} è più vecchio di ${this.firstName}`
            }
            else 
            return `${x.firstName} è più vecchio di ${this.firstName}, ${this.firstName} è più vecchio di ${y.firstName}`
        }
        if (y.age > x.age && y.age > this.age){
            if(x.age > this.age){
                return `${y.firstName} è più vecchio di ${x.firstName}, ${x.firstName} è più vecchio di ${this.firstName}`
            }
            else return `${y.firstName} è più vecchio di ${this.firstName}, ${this.firstName} è più vecchio di ${x.firstName}`
        }
        if (this.age > x.age && this.age > y.age)
            if (x.age > y.age){
                return `${this.firstName} è più vecchio di ${x.firstName}, ${x.firstName} è più vecchio di ${y.firstName}`
            }
            else return `${this.firstName} è più vecchio di ${x.firstName}, ${y.firstName} è più vecchio di ${x.firstName}`
    }
}

const x = new User("Marco", "Cimabue", 16, "Firenthise")
const y = new User("Giovanni", "Darius", 23, "Bari")
const z = new User("Lucia", "Di Giovine", 22, "Venezia")

console.log(x.compareAge(y, z));

// esercizio 2




