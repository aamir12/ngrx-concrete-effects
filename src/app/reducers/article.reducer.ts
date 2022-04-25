import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from './app.states';

export const initialState: ArticleState = {articles: [], message: ''};

// Creating reducer
const _articleReducer = createReducer(
  initialState,
  on(fromActions.ShowAllSuccessAction, (state, {payload}) => ({articles: payload, message: 'Success'})),
  on(fromActions.CreateSuccessAction, (state, {payload}) => ({articles: [payload], message: 'Article Created.'})),
  on(fromActions.CreateFailureAction, (state, {payload}) => ({articles: [], message: payload})),
  on(fromActions.GetByIdSuccessAction, (state, {payload}) => ({articles: payload, message: 'Success'})),    
  on(fromActions.ResetAction, (state) => ({ articles: [], message: ''}))
);

export function articleReducer(state: any, action: Action) {
  return _articleReducer(state, action);
}

// Creating selectors
export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
    getArticleState, 
    (state: ArticleState) => state.articles 
);

export const getMessage = createSelector(
  getArticleState, 
  (state: ArticleState) => state.message
);