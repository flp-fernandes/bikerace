import * as R from 'ramda';

import { AmqpMessage, AmqpMessageHandler } from '../../../types/interface';

export type FuncHandler = ((_: AmqpMessage) => AmqpMessage) | AmqpMessageHandler;

/**
 * Creates a function to execute a list of handlers
 * @param handlers List of functions to be executed
 */
// export const applyHandlers: (
//   handlers: FuncHandler[],
// ) => ReturnType<FuncHandler> | AmqpMessageHandler = R.tryCatch(
//   R.ifElse(
//     // verify if the list of handlers has at least one handler
//     (l) => R.gte(R.length(l), 1),
//     // creates a pipe with all handlers

//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     (l) => R.pipe(...l),
//     () => { throw new Error('Invalid number of handlers'); },
//   ),
//   // catch the execution error
//   R.tap((e) => console.error(`Error: ${e}`)), // adicionar logger
// );