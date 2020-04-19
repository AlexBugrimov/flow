// @flow

type NameType = {
  name: string,
  version: string,
}
type HistoryType = {
  history: string[],
  version: number
}
type User = {
  // $Exact - делает типы строгими
  ...$Exact<HistoryType>,
  ...$Exact<NameType>,
};
const user: User = {
  name: 'Ivan',
  history: ["history"],
  // Берется тип последней переменной version при разворачивании оператором spread
  version: 'major'
}