import { useSyncExternalStore } from 'react';

export type Middleware<T> = (state: T, next: (newState: T) => void) => void;

export interface Store<T> {
  getState: () => T;
  setState: (newStateOrUpdater: T | ((prevState: T) => T)) => void;
  subscribe: (listener: () => void) => () => void;
  attachMiddleware: (middleware: Middleware<T>) => void;
}

export interface SignalCreatorConfig<T> {
  initialState: T;
  initialMiddlewares?: Middleware<T>[];
  // Add other configurations here if needed
}

/**
 *
 * @example
 * const { useSignal, store, setState } = signalCreator({
 *  initialState: { count: 0 },
 *  initialMiddlewares: [
 *      (state, next) => {
 *          console.log('Initial Middleware:', state);
 *          next(state);
 *      }
 *  ]
 *});
 *
 * store.attachMiddleware((state, next) => {
 *  console.log('Additional Middleware:', state);
 *  next(state);
 * });

 * function Counter() {
 *  const state = useSignal();
 *  return (
 *      <div>
 *          <p>Count: {state.count}</p>
 *          <button onClick={() => setState(prevState => ({ count: prevState.count + 1 }))}>Increment</button>
 *          <button onClick={() => setState({ count: 0 })}>Reset</button>
 *      </div>
 *  );
 *}
 */
export default function signalCreator<T>({ initialState, initialMiddlewares = [] }: SignalCreatorConfig<T>) {
  let state = initialState;
  let listeners: Set<() => void> = new Set();
  let middlewares: Middleware<T>[] = [...initialMiddlewares];

  const getState = () => state;

  const setState = (newStateOrUpdater: T | ((prevState: T) => T)) => {
    const newState = typeof newStateOrUpdater === 'function'
      ? (newStateOrUpdater as (prevState: T) => T)(state)
      : newStateOrUpdater;

    const executeMiddlewares = (currentState: T, nextState: T) => {
      for (const middleware of middlewares) {
        middleware(currentState, (updatedState) => {
          nextState = updatedState;
        });
      }
      return nextState;
    };

    state = executeMiddlewares(state, newState);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const attachMiddleware = (middleware: Middleware<T>) => {
    middlewares.push(middleware);
  };

  const store: Store<T> = {
    getState,
    setState,
    subscribe,
    attachMiddleware,
  };

  const useSignal = () => useSyncExternalStore(subscribe, getState, getState);


  return { useSignal, store, setState };
}

