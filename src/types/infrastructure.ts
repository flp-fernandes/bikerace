import { Channel, Options } from 'amqplib';
import { Collection, Db } from 'mongodb';
import { RedisClientOptions } from 'redis';

/* Message Bus Adapter */
export type MessageBus = Channel;
export type MessageContent = unknown;
export type MessagePublishOptions = Options.Publish;

export interface IMessageBusAdapterConstructs {
  new (config?: MessageBusAdapterConfig): IMessageBusAdapter;
}

export enum MessageBusType {
  noConfirmation = 0,
  withConfirmation = 1,
}

export type GeInstanceOptions = {
  vHost: string;
}

export type MessageBusAdapterConfig = {
  messageBusType: MessageBusType;
}

export interface IMessageBusAdapter {
  publish(
    router: string,
    routingKey: string,
    vHost: string,
    content: MessageContent,
    options?: MessagePublishOptions
  ): Promise<boolean>;
}

/* Redis Adapter */
export type ValueContent = unknown;

export interface IRedisAdapter {
  set(key: string, value: ValueContent): Promise<void>;
  get(key: string): Promise<string | null>;
  expire(key: string, seconds: number): Promise<void>;
}

export type RedisAdapterConfig = RedisClientOptions;

/* MongoDB Adapter */
export type MongoDatabase = Db

export type MongoAdapterConfig = {
  collectionName: string;
};

export interface IMongoAdapter {
  collection: Collection;
};

export interface IDatabaseMonitor {
  register(): void;
}

/* Infrastructure */
export type Container = {
  // repository
}

export type ContainerConfig = {
  redisUrl: string;
  mongoUri: string;
}