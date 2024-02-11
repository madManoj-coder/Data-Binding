import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { ProductsComponent } from './component/products/products.component';
import { SingleFile } from './component/singleFile/singlefile.component';
import { product1 } from './component/product1/product1.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './component/directive/directive.component';
import { SkillSetsComponent } from './component/skill-sets/skill-sets.component';
import { StdTableComponent } from './component/std-table/std-table.component';
import { PostsComponent } from './component/posts/posts.component';
import { TodosComponent } from './component/todos/todos.component';
import { TabsComponent } from './component/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    SingleFile,
    product1,
    DirectiveComponent,
    SkillSetsComponent,
    StdTableComponent,
    PostsComponent,
    TodosComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
