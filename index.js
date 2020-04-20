// @flow

type SuccessResponse = {|
  success: true,
  data: {
    meta: {},
    content: {}
  }
  // Если не строгий тип, то
  // Может быть [key: string]: string - т.е. добавлено поле
|}

type ErrorResponse = {|
  error: string,
  data: string
|}

type Response = SuccessResponse | ErrorResponse;
// Указываем строгие типы, тогда будет точно определен тип Response
function handleResponse(response: Response) {
  if (response.error) {
    console.log(response.data.includes('ServerError'));
  }
}