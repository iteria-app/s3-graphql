import { APIGatewayEvent } from 'aws-lambda'

export const checkRowPermission = async (
  event: APIGatewayEvent,
  hasuraUrl: any,
  tableNames: string[]
) => {
  const requestedFilesLenght = tableNames?.length
  let tableName = tableNames[0]
  const query = `
          query PermissinCheck {
            ${tableName} {
              id
            }
          }
        `
  const stringifiedQuery = JSON.stringify({ query })
  const authHeader = event.headers?.authorization
  const headers = authHeader
    ? {
        'Content-Type': 'application/json',
        Authorization: authHeader as string,
      }
    : {
        'Content-Type': 'application/json',
      }
  const resDB = await fetch(hasuraUrl, {
    method: 'POST',
    body: stringifiedQuery,
    // @ts-ignore
    headers,
  })
  const jsonResDB = await resDB?.json()
  if (jsonResDB?.errors) {
    // return {
    //   statusCode: 404,
    //   body: JSON.stringify({ errors: '' }),
    // }
    throw new Error(jsonResDB?.errors[0].message)
  }
  if (jsonResDB?.data?.[tableName]?.length !== requestedFilesLenght) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        errors: "You don't have permission to access this files",
      }),
    }
  }
}
