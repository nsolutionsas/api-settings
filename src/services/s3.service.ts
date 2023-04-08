import { Inject, Injectable } from '@nestjs/common';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { ConfigType } from '@nestjs/config';
import awsConfig from '../config/aws.config';

@Injectable()
export class S3Service {
  s3Client: S3Client;
  constructor(
    @Inject(awsConfig.KEY)
    private aws: ConfigType<typeof awsConfig>,
  ) {
    const { accessKeyId, secretAccessKey } = this.aws;
    if (!accessKeyId || !secretAccessKey) {
      throw new Error('AWS credentials not found');
    }

    this.s3Client = new S3Client({
      region: aws.s3.region,
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
      },
    });
  }

  async getFileContent(key: string) {
    const getObjectParams = { Bucket: this.aws.s3.bucketName, Key: key };
    const getObjectCommand = new GetObjectCommand(getObjectParams);
    const response = await this.s3Client.send(getObjectCommand);
    const body = await response.Body?.transformToString();
    return JSON.parse(body || '');
  }
}
