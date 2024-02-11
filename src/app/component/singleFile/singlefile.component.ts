import { Component, OnDestroy, OnInit } from "@angular/core";

// single file :-
@Component({
   selector : "app-singleFile",
   templateUrl : `singlefile.component.html`,
   styleUrls : [`./singlefile.component.scss`]
})

export class SingleFile implements OnInit, OnDestroy{ // OnInit, OnDestroy >> component lifeCycle hook
    fileName: string = "Mobile";
    fileId: number = 425;
    fileStatus : string = "Delivered";
    disabled1 : boolean = true;
    goal1 : string = `My dream is completed`
    res1 : string = `<strong>I love Angular !!!</strong>`

    ngOnInit(): void {
        console.log(`file is initialize`);
        setTimeout(() => {
            this.disabled1 = false;
        }, 5000);
    }

    ngOnDestroy(): void {
        console.log(`file is destroy`);
        
    }
}