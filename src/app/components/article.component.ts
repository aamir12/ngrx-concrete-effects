import { FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';    
import { Observable } from 'rxjs';
import * as fromReducer from '../reducers/article.reducer';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from '../reducers/app.states';
import { Article } from '../models/article';

@Component({
	selector: 'app-article',
	templateUrl: 'article.component.html'
})
export class ArticleComponent {
	articles$: Observable<Article[]>;
	message$: Observable<any>;
	task= '';

	constructor(
		   private formBuilder:FormBuilder,
		   private store: Store<ArticleState>) {

		this.articles$ = store.select(fromReducer.getArticles);
		this.message$ = store.select(fromReducer.getMessage);
	}
	articleForm = this.formBuilder.group({
		id: ['', Validators.required ],
		title: '',
		category: ''
	});
	get id() {
		return this.articleForm.get('id');
	}
	onFormSubmit() {
		if(this.articleForm.valid) {
		   let article = this.articleForm.value;
		   this.createArticle(article);
		   this.articleForm.reset();
		}
	 }
	createArticleView(){
		this.task = 'create';
		this.store.dispatch(fromActions.ResetAction());
	}
	getArticleByIdView(){
		this.task = 'get';
		this.store.dispatch(fromActions.ResetAction());
	}
	loadAllArticles(){
		this.task = 'all';
		this.store.dispatch(fromActions.ShowAllAction());
	}
	createArticle(article: Article){
		this.store.dispatch(fromActions.CreateAction({payload: article}));
	}
	searchArticleById(articleId: string){
		this.store.dispatch(fromActions.GetByIdAction({payload: articleId}));
	}
}	