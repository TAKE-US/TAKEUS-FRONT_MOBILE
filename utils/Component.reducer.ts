import React from 'react';

type State =
  | {
      _TAG: 'IDLE';
    }
  | {
      _TAG: 'LOADING';
    }
  | {
      _TAG: 'ERROR';
    }
  | {
      _TAG: 'OK';
      message: string;
    };

type Action =
  | {
      _TAG: 'FETCH';
    }
  | {
      _TAG: 'FAILED';
    }
  | {
      _TAG: 'SUCCESS';
      message: string;
    };

export const reducer: React.Reducer<State, Action> = (prevState: State, action) => {
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
        };
      }
      if (action._TAG === 'SUCCESS') {
        return {
          _TAG: 'OK',
          message: action.message,
        };
      }
      break;
    case 'OK':
      break;
    default:
      break;
  }

  return prevState;
};
