// component :- it is a custom HTML Element.

import { Component, OnDestroy, OnInit } from "@angular/core";



@Component({
    selector: "app-product",
    // templateUrl : "product.component.html",
    // Question :- can we create component with a single file
    // ==>
    template: `<div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
              <p class="para text-center">
                    This is product 
                <strong>{{productName}}</strong>
                    with price
                <strong>{{productPrice}}</strong>
                    and the status is 
                <strong>{{productStatus}}</strong>
                </p>  
            </div>
        </div>
    </div>
       

    `,
    
    // styleUrls: ["./product.component.scss"]
    styles: [`.para{
        padding: 10px;
        background-color: aqua;
        font-weight: bold;
        margin: 0 auto 10px;
    }`]
})


// we can implement multiple interfaces on class :-

export class ProductComponent implements OnInit, OnDestroy{ // OnInit, OnDestroy :- interface
    productName: string = "Iphone 15pro";
    productPrice: number = 150000;
    productStatus : string = "Dispatched";
    disabled : boolean = true;
    goal : string = `My dream is completed`
    res : string = `<strong>I love Angular !!!</strong>`

    ngOnInit(): void { // component lifeCyclehook
        console.log(`The product is ${this.productName} with ${this.productPrice}`)
        setTimeout(() => {
            this.disabled = false;
        }, 3000);
    }

    ngOnDestroy(): void {
        
    }
}

// Data Binding:=> The communication/transfer of data from template to TS or Vice Versa in same component.
// There are 4 ways to bind a data :=> 1)String Interpolation :{{propertName}} :=> 1) TS to Template(HTML) 
//                                                                                 2) string interpolation wont work on self closing tag(empty tag)
//                                    2)property Binding : [propertyName]:=>  TS to Template
//                                    3)Event Binding : () => HTML To TS
//                                    4)Two Way Data Binding : [()] => HTML to TS & TS to HTML
// it works within The same component

//lifecycle hooks:=> 
// 1. ngOnChanges
// 2. ngOnInit
// 3. ngDoCheck
// 4. ngAfterContentInit
// 5. ngAfterContentChecked
// 6. ngAfterViewInit
// 7. ngAfterViewChecked
// 8. ngOnDestroy