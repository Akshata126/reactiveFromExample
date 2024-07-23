import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  studentForm:any=FormGroup
  isSubmit=false
  requiredName=['akshata']
   ngOnInit() {

    //create reactive form
    this.studentForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email],this.emailRestricted),
      username:new FormControl('',[Validators.required,this.nameRestricted.bind(this)]),
      pass:new FormControl('',Validators.required),
      hobbies:new FormArray([])
    })
    
}

//get controls value
get hobbies(){
  return (<FormArray>this.studentForm.get('hobbies')).controls
}

dataSubmit(){
 
if(!this.studentForm.valid){
  this.isSubmit=false
}else{
  this.isSubmit=true
  console.log(this.studentForm);
  
}
  

}

resetForm(){
  this.studentForm.reset()
}
//how to add dynamic controls by using formArray
addHobbies(){
  let control=new FormControl(null,[Validators.required]);

  (<FormArray>this.studentForm.get('hobbies')).push(control)
}


//how to validate our controls using ts
nameRestricted(control:FormControl):{[s:string]:boolean}{
  if(this.requiredName.includes(control.value)){
    return {nameRestricted:true}
  }
  return {};

}

//custome validation 
 emailRestricted(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (control.value === 'test@test.com') {
        resolve({ emailRestricted: true });
      } else {
        resolve(null);
      }
    }, 2000);
  });
}
}
