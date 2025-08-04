// Parent Class
// Cookie

// Child Class -> Inheritance
// Choco Cookie, Strawberry Cookie

// Factory Class
// Oven

class Cookie {
    constructor(name, type, price){
        this.name = name,
        this.type = type,
        this.price = price
    }
}

class Choco extends Cookie{
    constructor(name, price, isSweet){
        super(name, "Choco", price);
        this.isSweet = isSweet;
    }
}

class Strawberry extends Cookie{
    constructor(name, price, isSweet){
        super(name, "Strawberry", price);
        this.isSweet = isSweet;
    }
}

class Blueberry extends Cookie{
    constructor(name, price, isSweet){
        super(name, "Blueberry", price);
        this.isSweet = isSweet;
    }
}

class Oven {
    constructor(container){
        this.container = container || [];
    }

    bake(cookie){
        this.container.push(cookie);
    }

    delivery(cookie_name){
        this.container = this.container.filter(cookie => cookie.name !== cookie_name)
    }
}

let oven = new Oven();
oven.bake(new Choco("brownies", 15000));
console.log(oven);
oven.delivery("brownies");
console.log(oven);
