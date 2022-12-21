import { Component } from '@angular/core';

@Component({
    selector: 'calculator-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.css'],
})
export class BaseComponent {
    numberFromParent = "some string";
    
    num1: string = "";
    num2: string = "";
    operator:string = "";
    displayString: string = "0";

    clearFields(){
        this.num1 = "";
        this.num2 = "";
        this.operator = "";
        this.flag = false;
        this.isbeginning = true;
    }

    updateDispaly(chr:string){
      if (this.isbeginning){
        // if (this.displayString === "0" && chr !== "0"){
        //   this.displayString = chr;
        // }
        this.displayString = chr;
        this.isbeginning = false;
      } else if (chr == "/" || chr=="x" || chr=="-" || chr== "+"){
        this.displayString += " " + chr + " "; // Generating result string 
      } else{
        this.displayString += chr;
      }
    }

    flag = false; // To check if we have encounter any operator.
    isbeginning = true;

    receivedFromB(msg: string){
      if(msg == "AC"){
        this.displayString = "0";
        this.clearFields();
      }
      else if (msg == "="){ // Then we have to declare result.
        console.log(this.num1, "Op", this.operator, this.num2);
        if (this.num2 === "0" && this.operator === '/'){
          alert('Zero division error!');
          this.clearFields();
          this.displayString = "0";
        } else if (this.operator === "+"){
          this.displayString = ( parseInt(this.num1, 10) + parseInt(this.num2, 10)).toString();
        } else if(this.operator === "-"){
          this.displayString = ( parseInt(this.num1, 10) - parseInt(this.num2, 10)).toString();
        } else if (this.operator === "x"){
          this.displayString = ( parseInt(this.num1, 10) * parseInt(this.num2, 10)).toString();
        } else{
          this.displayString = ( parseInt(this.num1, 10) / parseInt(this.num2, 10)).toString();
        }
        this.clearFields()
      }
      else if (msg == "/" || msg=="x" || msg=="-" || msg== "+"){
        this.flag = true;
        this.operator = msg;
        this.updateDispaly(msg);
      } else if(this.flag){
        this.num2 = this.num2 + msg;
        this.updateDispaly(msg);
      } else if (!this.flag){
        this.num1 = this.num1 + msg;
        this.updateDispaly(msg);
        console.log(this.num1);
      }

    }
}
