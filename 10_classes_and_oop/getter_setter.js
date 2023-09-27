class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ajeet`
    }

    set password(value){
        this._password = value
    }
}

const Ajeet = new User("a@ajeet.ai", "abc")
console.log(Ajeet.email);
console.log(Ajeet.password);
