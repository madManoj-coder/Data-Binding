import { Component, OnDestroy, OnInit } from "@angular/core";


@Component({
    // selector: "app-product1",
    // selector : "[app-product1]",
    selector : ".app-product1",
    templateUrl: "product1.component.html",
    styleUrls: ["./product1.component.scss"]
})

export class product1 implements OnInit, OnDestroy {
    isDisable: boolean = true;
    productStatus: string = "no product is added"
    addNumber: number = 0;
    searchedValue : string = "";
    searchedValue2 : string = "Angular is the superset of Javascript";

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    addProduct() {
        this.addNumber++;
        this.productStatus = `${this.addNumber} is product added`
    }

    removeProduct() {
        this.addNumber--;
        if (this.addNumber === 0) {
            this.productStatus = `no product is added`
        } else {
            this.productStatus = `${this.addNumber} is product added`
        }
    }

    searching(eve : Event){
         this.searchedValue = (eve.target as HTMLInputElement).value;
    }


}


