import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { rejects } from 'assert';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

   genders = ['Male', 'Female'];

   signupForm:FormGroup;

   forbiddenUsernames = ['Chris', 'Anna'];

   submitted = false;

   constructor() { }

   get hobbyControls()
   {
    

     return (<FormArray>this.signupForm.get('hobbies')).controls;

   }
    
  get emailforbidden()
  {
    return this.signupForm.get('userData.email').errors?.emailIsForbidden;
  }
   

  ngOnInit(): void {

    this.signupForm = new FormGroup(
      {
         'userData' : new FormGroup({
          'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
          'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
         }),
        'gender' : new FormControl('Male'),
        'hobbies' : new FormArray([])
      }
    )

    // this.signupForm.setValue({

    //   // 'userData' : {
    //   //   'username' : 'Khan',
    //   //   'email' : 'baba@gmail.com'
    //   //  },
    //   // 'gender' : "Female",
    //   // 'hobbies' : []

    // });

    // this.signupForm.patchValue({


    //   // 'userData' : {
    //   //   'username' : 'Imran Khan',
    //   //  },
    //    });


      // this.signupForm.valueChanges.subscribe(value => console.log(value))

      this.signupForm.statusChanges.subscribe(value => console.log(value))

  }
  onSubmit()
  {
    this.submitted = true;

    if(this.signupForm.invalid)
    {
      
     return;
    }
    console.log(this.signupForm.value);
    this.signupForm.reset({'gender' : "Male"});
    this.submitted = false;
  }

  onAddHobbies()
  {
    
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null));
  }

  forbiddenNames(control: FormControl): {[s:string] : boolean}
  {

          if(this.forbiddenUsernames.indexOf(control.value) !== -1)
          {
             return { 'nameIsForbidden' : true }
          }

         return null;
  }

  forbiddenEmails(control:FormControl): Promise<any> | Observable<any>
  {
      const promise = new Promise<any>((resolve, reject) =>
      {
           setTimeout(() => {
           
            if(control.value === "test@gmail.com")
            {
              resolve({ 'emailIsForbidden' : true });
            }
            else
            {
              resolve(null)
            }

           }, 1500);
      });
    
      return promise;
  }

  
}
