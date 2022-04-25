import { createAction, props } from '@ngrx/store';

import { Article } from '../models/article';

export const ShowAllAction = createAction('[ARTICLE] Show All');
export const ShowAllSuccessAction = createAction(
  '[ARTICLE] Show All Success',
  props<{ payload: Article[] }>()
);


export const CreateAction = createAction(
  '[ARTICLE] Create',
  props<{ payload: Article }>()
);
export const CreateSuccessAction = createAction(
  '[ARTICLE] Create Success',
  props<{ payload: Article }>()
);
export const CreateFailureAction = createAction(
  '[ARTICLE] Create Failure',
  props<{ payload: any }>()
);
export const GetByIdAction = createAction(
  '[ARTICLE] Get by Id',
  props<{ payload: string }>()
);
export const GetByIdSuccessAction = createAction(
  '[ARTICLE] Get by Id Success',
  props<{ payload: Article[] }>()
);
export const ResetAction = createAction('[ARTICLE] Reset');

