import React from 'react';

export type State<T, E = unknown> =
  | {
      _TAG: 'IDLE';
    }
  | {
      _TAG: 'LOADING';
    }
  | {
      _TAG: 'ERROR';
      error: E;
    }
  | {
      _TAG: 'OK';
      message: null | T;
    };

export type Action<T, E = unknown> =
  | {
      _TAG: 'FETCH';
    }
  | {
      _TAG: 'FAILED';
      error: E;
    }
  | {
      _TAG: 'SUCCESS';
      message: T;
    };

export function reducer<R, E>(prevState: State<R, E>, action: Action<R, E>): State<R, E> {
  switch (prevState._TAG) {
    case 'IDLE':
      if (action._TAG === 'FETCH') {
        return {
          _TAG: 'LOADING',
        };
      }
      break;
    case 'LOADING':
      if (action._TAG === 'FAILED') {
        return {
          _TAG: 'ERROR',
          error: action.error,
        };
      }
      if (action._TAG === 'SUCCESS') {
        return {
          _TAG: 'OK',
          message: action.message,
        };
      }
      break;
    default:
      throw new Error(`Unknown action type: ${action._TAG}`);
  }
  return prevState;
}
