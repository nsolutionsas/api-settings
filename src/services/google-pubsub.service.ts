import { Injectable } from '@nestjs/common';
import { GCPubSubClient } from '@nsolutions/gc-pubsub';
import { GCPubSubInterface } from '@nsolutions/gc-pubsub';

@Injectable()
export default class PubSubService {
  client: GCPubSubClient;
  setting: GCPubSubInterface;

  public async init(setting: GCPubSubInterface) {
    this.setting = setting;
    this.initClient();
  }

  public async send(pattern: string, data: any) {
    return this.client.send(pattern, data).subscribe((res) => {
      console.log(res);
    });
  }

  private async initClient() {
    this.client = await new GCPubSubClient({
      topic: this.setting.topic,
      subscription: this.setting.subscription,
      replyTopic: this.setting.replyTopic,
      replySubscription: this.setting.replySubscription,
      noAck: this.setting.noAck,
      client: {
        projectId: this.setting.client.projectId,
        credentials: {
          private_key: this.setting.client.credentials.private_key,
          client_email: this.setting.client.credentials.client_email,
        },
      },
    });
  }
}
