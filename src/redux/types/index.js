import { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import { EmailsState, EmailsActions } from './emails';
import {
  VisibilityFilterState,
  VisibilityFilterAction
} from './visibilityFilter';

export type ReduxInitAction = { type: '@@INIT' };

export type State = EmailsState & VisibilityFilterState;

export type Action = ReduxInitAction | EmailsActions | VisibilityFilterAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
