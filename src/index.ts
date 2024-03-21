import { env } from './util/env';

type AppConfig = {
  http?: boolean;
  amqp?: boolean;
};

export class App {
  private _http?: boolean;
  private _amqp?: boolean;

  constructor({ http, amqp }: AppConfig) {
    this._http = http;
    this._amqp = amqp;
  }

  run(): void {}
}

const app = new App({
  http: env.httpActive,
  amqp: env.amqpActive,
});

setImmediate(() => {
  app.run();
  console.log('App initialized'); // colocar logger aqui
});