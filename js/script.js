//Відео №1
//Вариант №1
// console.log('35' + - "22");
//Вернет 13
//Вариант №2
// console.log('35' * "22");
//Вернет 770
//Вариант №3
// console.log('558' > 22++);
//Вернет true
//Вариант №4
// let usersCounter = 0;
// let newUsers = usersCounter++;
// console.log(newUsers);
// //Вернет 1
//Вариант №5
// console.log(!false && 11 || 18 && !'');
//Вернет 18
//Вариант №6
// let name = 0;
// console.log(name ?? "Без имени")
//Відео №2
//Вариант №1
// if (1 === "1") {
// 	console.log('Истина!');
// } else {
// 	console.log('Ложь!');
// }
//Вариант №2
// if (5 == "5") {
// 	console.log('Истина!');
// } else {
// 	console.log('Ложь!');
// }
//Вариант №3
// let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
// console.log(message);
//Вариант №4
// if (0) {
// 	console.log('Ложь!');
// } else if ("0") {
// 	console.log('Истина!');
// }
//Відео №3
// let num = 1;
// while (num < 6) {
// 	console.log(num);
// 	num++;
// }
//Задача №2
// let num = 8;
// while (num) {
// 	//Последний результат 0, верно?
// 	console.log(num);
// 	num--;
// }
//Задача №3
// let num = 0;
// while (num < 3) {
// 	console.log(`Число: ${num}`);
// 	num++;
// }
//Задача №4
// for (let num = 0; num < 2; num++) {
// 	for (let size = 0; size < 3; size++) {
// 		if (size == 1) {
// 			break;
// 		}
// 		console.log(size);
// 	}
// }
//Відео №4
// Задача №1. Получить верное значение округления
// let numOne = 1.005 + Number.EPSILON;
// numTwo = Math.round(numOne * 100) / 100;
// console.log(numTwo); // Выведет 1 что не верно
// Задача №2. Получить число 135.58 из строки
// let value = parseFloat("135.58px");
// console.log(value);
// Задача №3. Посттроить верное условное ветвление
// let value = 58 + "Фрилансер";
// if (isNaN(value)) {
// 	console.log('Результат выражения NaN');
// }
// Задача №4.
// Найти максимальное число из 10,58,39,-150,0
//console.log(Math.max(10, 58, 39, -150, 0))
// Задача №5.
// Округлить число 58.858 до числа 58
// let numOne = Math.floor(58.858);
// console.log(numOne);
//Відео №5
// Задача №1. Верна ли запись?
// let fls = "фрилансер";
// let text = 'Привет! Я ${fls}';
// // Ожидаем получить Привет! Я фрилансер
// console.log(text);
// Задача №2. Получить символ "н" строки:
// let text = 'фрилансер';
// let symbol = text[5];
// console.log(symbol);
// Задача №3. Верно?
// let text = 123 + "456";
// // Ожидаем 579
// console.log(text);
// Задача №4. Получить строку в верхнем регистре
// let text = 'фрилансер';
// console.log(text.toUpperCase());
// Задача №5. Получить подстроку "лан" из:
// let text = 'фрилансер';
// console.log(text.slice(3, 6));
// Задача №6. true или false ?
// let text = 'фрилансер';
// console.log(text.includes('лан', 4));



