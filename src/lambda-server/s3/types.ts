export interface Response {
    statusCode: number;
    body: string;
    error: string;
  }

export interface ServerContext{
  accessKeyId: string,
  secretAccessKey: string
  region: string
  endpoint: string
  skipSslVerify: boolean
  bucketName: string
  precreateBucket: boolean
  urlExpiration: number
}
  