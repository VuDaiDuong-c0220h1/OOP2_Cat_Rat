let Animal = function (name, weight, speed, talk) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.talk = talk;
    this.status = true;
    this.isAlive = function () {
        this.status = true;
    };
    this.isDead = function () {
        this.status = false;
    };
};

let rat = new Animal("Jerry", 1, 9, "Chít Chít");
let cat = new Animal("Tom", 10, 10, "Meo Meo");
rat.isDead();
cat.eating = function () {
    if (cat.speed > rat.speed && rat.status) {
        cat.weight++;
        rat.isDead();
        console.log(cat.weight);
    } else {
        console.log("không ăn được");
    }
};

cat.eating();