import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ProductsComponent } from './Pages/products/products.component';
import { CunsultServicesComponent } from './Pages/cunsult-services/cunsult-services.component';
import { BlogsComponent } from './Pages/blogs/blogs.component';
import { PhilanthropyComponent } from './Pages/philanthropy/philanthropy.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { FAQsComponent } from './Pages/faqs/faqs.component';
import { PodProductPortfolioComponent } from './Pages/pod-product-portfolio/pod-product-portfolio.component';
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { HeaderComponent } from './Includes/header/header.component';
import { FooterComponent } from './Includes/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { ConsultFormComponent } from './Pages/consult-form/consult-form.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { ProductListComponent } from './Includes/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './Pages/category-list/category-list.component';
import { SubCategoryListComponent } from './Includes/sub-category-list/sub-category-list.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { BestSellingProductsComponent } from './Includes/best-selling-products/best-selling-products.component';
import { BlogDetailsComponent } from './Pages/blog-details/blog-details.component';
import { CatalogsComponent } from './Pages/catalogs/catalogs.component';
import { CareerComponent } from './Pages/career/career.component';
import { TeamComponent } from './Pages/team/team.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SubCategoryComponent } from './Pages/sub-category/sub-category.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    ProductsComponent,
    CunsultServicesComponent,
    BlogsComponent,
    PhilanthropyComponent,
    ContactUsComponent,
    FAQsComponent,
    PodProductPortfolioComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ConsultFormComponent,
    ProductListComponent,
    CategoryListComponent,
    SubCategoryListComponent,
    ProductDetailsComponent,
    BestSellingProductsComponent,
    BlogDetailsComponent,
    CatalogsComponent,
    CareerComponent,
    TeamComponent,
    SubCategoryComponent,
    ThanksPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    Ng2TelInputModule,
    HttpClientModule,
    NgImageSliderModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
