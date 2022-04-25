import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) { }

    url = "/api/articles";
    getAllArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(this.url);
    }
    createArticle(article: Article): Observable<Article> {
        return this.http.post<Article>(this.url, article);
    }
    getArticleById(id: string): Observable<Article[]> {
        console.log(id);
        return this.http.get<Article[]>(this.url + '?id=' + id);
    }    
}