import { Middleware } from '@reduxjs/toolkit';

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('Dispatching:', action);
  console.log('Previous state:', store.getState());

  const result = next(action);

  console.log('Next state:', store.getState());

  return result;
};

export default loggerMiddleware;
