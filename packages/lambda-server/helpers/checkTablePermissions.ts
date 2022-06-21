import { APIGatewayEvent } from 'aws-lambda'
import { getIntrospectionQuery } from 'graphql'

export const checkTablePermissions = async (
  event: APIGatewayEvent,
  hasuraUrl: any,
  tableNames: string[]
) => {
  const authHeader = event.headers?.authorization
  const headers = authHeader
    ? {
        'Content-Type': 'application/json',
        Authorization: authHeader as string,
      }
    : {
        'Content-Type': 'application/json',
      }
  const response = await fetch(hasuraUrl, {
    method: 'POST',
    // @ts-ignore
    headers,
    body: JSON.stringify({
      variables: {},
      query: getIntrospectionQuery(),
    }),
  })
  const json = await response.json()
  const schema = json.data.__schema
  const file: any[] = schema.types.filter((type: any) => {
    return type.kind == 'OBJECT' && type.name == tableNames[0]
  })
  return file?.length > 0
}
