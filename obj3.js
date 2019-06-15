function emp(id, name, age) {
    this.id = id
    this.name = name
    this.age = age
    var print = function () {
        console.log(this.name + "" + this.id)
    }
};
var namreen = new emp(1, "namreen dabir", 18);
var rumaesa = new emp(2, "rumaesa", 18);
console.log(namreen);
console.log(rumaesa);
rumaesa.print();