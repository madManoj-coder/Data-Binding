import { Component, OnDestroy, OnInit } from "@angular/core";

// Directive :- which gives instruction of DOM(UI) 
// There are three types of directive.

// 1} Component directive :- it is the main building blocks for angular application.
// 2} Structural directive :- it changes the structure of UI and it is denoted by *
// 3} Attribute directive :- it changes the look and feel of UI
// it's structure is <tagname [ngStyle = "{"css propertyName"}" : "value"]


@Component({ // Components are the most basic UI building block of an Angular app.
             // An Angular app contains a tree of Angular components.
    selector : `app-directive`,
    templateUrl : `directive.component.html`,
    styleUrls : [`directive.component.scss`]
})

export class DirectiveComponent implements OnInit, OnDestroy{
    productName : string = "Smart watch";
    productPrice : number = 5000;
    productStatus : string = "Delivered";
    isDisables : boolean = true;
    isProductAvailable !: boolean;

    ngOnInit(): void {
        console.log(`The product is ${this.productName} with ${this.productPrice}`)
        this.isProductAvailable = Math.random() >= .5 ? true : false;
        console.log(this.isProductAvailable);
        
    }

    ngOnDestroy(): void {
        
    }

    getBg(){
        return this.isProductAvailable ? 'orange' : '#ededed'
    }
}