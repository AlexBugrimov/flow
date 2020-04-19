// @flow

type User = {|
  name: string,
  age: number
|}
function save(user: User) {
  return user;
}
save({
  name: 'Alex',
  age: 35
})