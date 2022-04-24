import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategoryListComponent } from './Includes/sub-category-list/sub-category-list.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { BlogDetailsComponent } from './Pages/blog-details/blog-details.component';
import { BlogsComponent } from './Pages/blogs/blogs.component';
import { CareerComponent } from './Pages/career/career.component';
import { CatalogsComponent } from './Pages/catalogs/catalogs.component';
import { CategoryListComponent } from './Pages/category-list/category-list.component';
import { ConsultFormComponent } from './Pages/consult-form/consult-form.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { CunsultServicesComponent } from './Pages/cunsult-services/cunsult-services.component';
import { FAQsComponent } from './Pages/faqs/faqs.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { PhilanthropyComponent } from './Pages/philanthropy/philanthropy.component';
import { PodProductPortfolioComponent } from './Pages/pod-product-portfolio/pod-product-portfolio.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { ProductsComponent } from './Pages/products/products.component';
import { SubCategoryComponent } from './Pages/sub-category/sub-category.component';
import { TeamComponent } from './Pages/team/team.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'consultationRegistration',
    component: CunsultServicesComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'philanthropy',
    component: PhilanthropyComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'help',
    component: FAQsComponent,
  },
  {
    path: 'newproducts',
    component: PodProductPortfolioComponent,
  },
  {
    path: 'consultform',
    component: ConsultFormComponent,
  },
  {
    path: 'productsList',
    component: CategoryListComponent,
    children: [
      {
        path: ':id/:name',
        component: SubCategoryComponent,
      },
      {
        path: ':id',
        component: SubCategoryListComponent,
      },
    ],
  },
  // {
  //   path:'productsList/:id/:name/:product',
  //   component: CategoryListComponent
  // },
  {
    path: 'productsDetails/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'blogDetails/:id',
    component: BlogDetailsComponent,
  },
  {
    path: 'catalogs',
    component: CatalogsComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'thankyou',
    component: ThanksPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
