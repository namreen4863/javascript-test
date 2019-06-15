var amitabh = new Object()
console.log(amitabh)
amitabh.name = "Amitabh"
amitabh.familyname = "bacchan"
var abhishek = Object.create(amitabh)
abhishek.name = "bunty"
console.log(abhishek)
console.log(abhishek.familyname)
console.log(abhishek.__proto__)
abhishek.__proto__.familyname = "patel"
console.log(abhishek.familyname)
