import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, debounceTime, map, mergeMap, of, switchMap } from 'rxjs';
// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromActions from '../actions/article.actions';
import { ArticleService } from '../services/article.service';
//import all requried services or any dependencies

@Injectable()
export class ArticleEffects {
    constructor(
        private actions$: Actions,
        private articleService:ArticleService
        ) { }

    loadAllArticle$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.ShowAllAction),
            switchMap(()=>
                this.articleService.getAllArticles().pipe(
                    map(data => fromActions.ShowAllSuccessAction({payload:data}))
                )
            )
        )
    );

    createArticle$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.CreateAction),
            map(action => action.payload),
            mergeMap((article) => 
                 this.articleService.createArticle(article).pipe(
                    map(res => fromActions.CreateSuccessAction({payload:res})),
                    catchError(error => of(fromActions.CreateFailureAction({payload:error})))
                )
            )
        )
    );

    searchArticleById$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.GetByIdAction),
        debounceTime(500),
        map(action => action.payload),
        switchMap(id =>
          this.articleService.getArticleById(id).pipe(
            map(res => fromActions.GetByIdSuccessAction({payload: res}))
          )
        )
    ));
}