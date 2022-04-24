import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PodHealthService {
  public apiBaseUrl = `${environment.apiBaseUrl}`;
  basePath = 'admin-resource';
  constructor(private router: Router, private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http
      .get<any>(`${this.apiBaseUrl}${this.basePath}/getAllCategories`)
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }
  getCategoriesSubCategories(): Observable<any> {
    return this.http
      .get<any>(
        `${this.apiBaseUrl}${this.basePath}/getAllCategoriesAndSubCategories`
      )
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }
  getSubcategoriesCatId(id: any): Observable<any> {
    return this.http
      .get<any>(
        `${this.apiBaseUrl}${this.basePath}/getSubCategoriesByCategory/${id}`
      )
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }
  getProductBySubCategory(id: any) {
    return this.http
      .get<any>(
        `${this.apiBaseUrl}${this.basePath}/getAllProductsBySubCategory/${id}`
      )
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }

  getProductDetails(id: any) {
    return this.http
      .get<any>(`${this.apiBaseUrl}${this.basePath}/getProductDetails/${id}`)
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }

  getBlogs(): Observable<any> {
    return this.http
      .get<any>(`${this.apiBaseUrl}${this.basePath}/getAllBlogs`)
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }

  getBlogDetails(id: any) {
    return this.http
      .get<any>(`${this.apiBaseUrl}${this.basePath}/getBlogDetail/${id}`)
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }

  getAllBestSellingProducts(): Observable<any> {
    return this.http
      .get<any>(`${this.apiBaseUrl}${this.basePath}/getAllBestProducts`)
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }

  getAllCatalogs(): Observable<any> {
    return this.http
      .get<any>(`${this.apiBaseUrl}${this.basePath}/getAllCatalogs`)
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }

  getAllPopularProducts(): Observable<any> {
    return this.http
      .get<any>(`${this.apiBaseUrl}${this.basePath}/getAllPopularProducts`)
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }
  getAllBannerImagesByCat(id: any) {
    return this.http.get<any>(
      `${this.apiBaseUrl}${this.basePath}/getAllBannerImagesByCategoryId/${id}`
    );
  }
  getAllFaqs(): Observable<any> {
    return this.http
      .get<any>(`${this.apiBaseUrl}${this.basePath}/getAllFaqs`)
      .pipe(
        map((data) => data.content),
        catchError((err) => {
          return of(err);
        })
      );
  }
}
