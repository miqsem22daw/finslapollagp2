import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "pipeRound"
})
export class PipeRound implements PipeTransform {

    transform(element: any, args?: any): any {
       if(element != ".."){
        Math.round(element * 100)/100;
       }
       console.log(element);
        return element;
    }
   
}
