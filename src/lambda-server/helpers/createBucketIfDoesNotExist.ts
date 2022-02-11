import type { S3 } from 'aws-sdk'

const createBucketIfDoesNotExist = async (s3: S3, bucketName: string, region: string) => {
  const params: S3.CreateBucketRequest = {
    ACL: 'private',
    Bucket: bucketName,
    CreateBucketConfiguration: {
      LocationConstraint: region,
    },
    ObjectLockEnabledForBucket: false,
  }
  await new Promise((resolve, reject) => {
    s3.createBucket(params, (err: any) => {
      if (err) {
        if (err.statusCode === 409) {
          console.log(`Bucket ${bucketName} already exist in "${region}".`)
        } else {
          return reject(err)
        }
      } else {
        console.log(`Bucket ${bucketName} created successfully in "${region}".`)
      }
      return resolve(bucketName)
    })
  })
}

export default createBucketIfDoesNotExist
