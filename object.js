var student = {id:123, phone:1332, name:"Abir"}
var student1 = {id:12321, phone:421, name:"Mahi"}


var phoneNo = student.phone;
var phoneNom = student["phone"];


console.log(phoneNo)
console.log(phoneNom)

console.log (student)
console.log (student1)

var phoneMahiNo = student1["phone"];
console.log(phoneMahiNo)

var phoneMahi = student1.phone;
console.log(phoneMahi)
var phoneProName = "phone";
var phonePro = student1[phoneProName];
console.log(phonePro);

// aivabe object name phoneNo paltano jai
student1.phone = 32352;
console.log(student1);

student1.name = "kalam"; 
console.log(student1);