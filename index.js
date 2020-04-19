// @flow

// SEALED - UNSEALED
// SEALED object - Заполненный объект (добавить в него поля нельзя)
const configSealed = {
  db: 'test',
  password: 'root'
};
// UNSEALED object - Пустой объект
const config = {};
const configUnsealed : {
  [key: string] : number
} = {};
// Строковое поле (любое - например test) содержит числа
config.test = 100;