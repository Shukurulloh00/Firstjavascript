
var user = {}

user.firstname = prompt("Ismingiz:")
user.lastname = prompt("Familiyangiz:");
user.age = prompt("Yoshingiz:");
user.target = prompt("Maqsadingiz");
user.time = prompt("Maqsadingizga qachon yetaman deb o'ylaysiz");
user.action = prompt("Maqsadinggizga erishish uchun nimalar qilyapsiz");
user.practice = prompt ("Maqsadingiz uchun oxirgi qilgan ishingiz");



alert(`Assalomu alaykum,
Ism :${user.firstname}
Familya: ${user.lastname}
Maqsadingiz ${user.target}
 Maqsadingizga qachon yetaman deb o'ylaysiz: ${user.time}
Maqsadinggizga erishish uchun nimalar qilyapsiz: ${user.action}
Maqsadingiz uchun oxirgi qilgan ishingiz : ${user.practice}
`);
console.log(user)
