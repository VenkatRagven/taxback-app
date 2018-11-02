import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
// import service
import { UserdetailsService } from '../userdetails.service'
import { Users } from '../Users';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  model: any = {};
  options = ['EUR', 'INR', 'GBP','USD'];
 
  users: Users[];
  constructor(private _userDetailService: UserdetailsService ) { }

  onSubmit() {
    this._userDetailService.createNewUser(this.model).subscribe((data: Users[]) => {
      document.getElementById("close-btn").click();
      this.getUserDetails();
      var x = document.getElementById("snackbar1");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      
    });
  }

  editDetails(editDetails){
    this.model=editDetails;
    
  }

  createNewUser(){
    this.model={};
  }
  deleteDetails(data){
    
    this._userDetailService.deleteNewUser(data).subscribe((data:any) => {
      this.getUserDetails();
      var x = document.getElementById("snackbar3");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      
    });
  }
 

  ngOnInit() {
    this.getUserDetails();
   
  }

  public getUserDetails() {
    this._userDetailService.getUserDetails().subscribe((data: Users[]) => {
      this.users = data;
    });

}

}
