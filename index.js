// @flow

type AddAction = {
  type: 'add',
  newId: string
}
type RemoveAction = {
  type: 'remove',
  idToRemove: string
}
type EditAction = {
  type: 'edit',
  idToEdit: string
}

type Actions =
  | AddAction
  | RemoveAction
  | EditAction;

function handleAction(action: Actions) {
  switch (action.type) {
    case 'add':
      console.log(action.newId);
      break;
    case 'remove':
      console.log(action.idToRemove)
      break;
      // Проверка flow что блок не выполнится никогда
    default:
      // Невозможный тип
      // Если в switch забыли описать один из типов, то подсветится что именно
      (action: empty)
      console.log('This should not happen');
  }
}