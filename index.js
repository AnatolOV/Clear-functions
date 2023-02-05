/*Легенда
Во время игры вам необходимо будет отображать полоску жизни над игровым персонажем. Для сигнализации пользователю вы решили ввести цветовую индикацию:

Здоровье более 50 - зелёный;
Здоровье от 50 и до 15 - жёлтый;
Менее 15 - красный.
Описание
Реализуйте функцию, которая на вход принимает объект вида:

{name: 'Маг', health: 90}
И возвращает ответ в виде одной из строк: healthy, wounded, critical

Сгенерируйте проект на базе npm. Подключите туда jest и напишите авто-тесты, которые обеспечивают 100% покрытие вашей функции по строкам.

Убедитесь, что вы обеспечили 100% покрытие тестами.*/

function healthRate(object) {
  if (object.health > 50) {
    console.log(`${object.name} healthy`);
    return "healthy";
  } else if (object.health <= 50 && object.health > 15) {
    console.log(`${object.name} wounded`);
    return "wounded";
  } else {
    console.log(`${object.name} critical`);
    return "critical";
  }
}
healthRate({ name: "Маг", health: 15 });

module.exports = { healthRate };
