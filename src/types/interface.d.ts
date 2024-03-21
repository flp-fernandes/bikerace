import { Channel, ConsumeMessage } from 'amqplib';
import { NextFunction, Request, Response, Router } from 'express'

/* HTTP Interface */
export type HttpRouter = Router;
export type HttpRequest = Request;
export type HttpResponse = Response;
export type HttpNext = NextFunction;

export interface IHttpRoute {
  register(r: HttpRouter): void;
}

export interface IHttpInterface {
  serve(): void;
}

export type HttpControllerConfig = {
  // validator: typeof import('../interface/http/middleware/validator').validator;
  // coreContainer: Container;
}

/* AMQP Interface */
export type AmqpChannel = Channel;
export type AmqpMessage = ConsumeMessage;
export type AmqpParsedMessage<T> = Record<'content', T | undefined> & AmqpMessage;
export type AmqpMessageHandler = (msg: AmqpMessage | null) => void | Promise<void>;

export type AmqpOnConsumeFunction = (
  channel: AmqpChannel,
  finisher: FinisherFunction,
  ...msgHandlers: import('../interface/amqp/middlewares/handlers').FuncHandler[]
) => (message: AmqpMessage | null) => Promise<void>;

export type FinisherFunction = (channel: AmqpChannel, message: AmqpMessage, error?: unknown) =>  unknown;

export interface IAmqpInterface {
  connect(): Promise<void>;
}

export interface IAmqpConsumer {
  assertQueue(channel: AmqpChannel): void;
}

export type AmqpConsuerConfig = {
  // coreContainer: Container;
  _onConsume: AmqpOnConsumeFunction;
};