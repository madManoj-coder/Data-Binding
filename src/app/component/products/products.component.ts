import { Component } from "@angular/core";


@Component({
    selector : "app-products",
    templateUrl : "products.component.html",
    styleUrls : ["./products.component.scss"]
})
export class ProductsComponent{
    skills = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "ANGULAR"]
    
}