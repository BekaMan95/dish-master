import { Middleware } from '@reduxjs/toolkit';

const editorMiddleware: Middleware = (store) => (next) => (action) => {
  const newAction = { ...action };
  newAction.payload.title += ' (edited)';

  const result = next(newAction);

  return result;
};

export default editorMiddleware;
