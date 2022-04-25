import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.states';
import * as fromReducer from './article.reducer';

export const reducers: ActionReducerMap<AppState> = {
  articleState: fromReducer.articleReducer
};
 