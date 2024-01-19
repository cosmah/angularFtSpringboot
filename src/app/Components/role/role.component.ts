import { Component } from '@angular/core';
import { RolesService } from 'src/app/Services/roles.service';
import { Roles } from 'src/app/models/roles';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  roleList : Roles[] = [];
  // this variable is get data from model
  newRole : Roles = new Roles();
  // this variable determines wither we are in changing or creating new user
  creatingMode : boolean = true;
  constructor(private rolesService : RolesService){
    this.getAllRoles();
  }
  //Get All roles from database
  getAllRoles(){
    this.rolesService.getAll().subscribe((response : Roles[])=>{
      this.roleList = response;
    });
  }
  //Delete role by id
  deleteRole(roleId : string){
    if(confirm("Are you sure you want to delete this role !!!")){
      this.rolesService.Delete(roleId).subscribe(()=>{
        alert("Role Deleted Successfully");
        window.location.reload();
      });
    }
  }
  //Create new role in database
  createRole(){
    const newRole = {
      roleName : this.newRole.roleName
    }
    this.rolesService.Create(newRole).subscribe(()=>{
      alert("Role Created Successfully");
      window.location.reload();
    });
  }
  //Update role
  modifyRole(){
    this.rolesService.Update(this.newRole).subscribe(()=>{
      alert("Role Updated Successfully");
      window.location.reload();
    })
  }
  // function to verify the event
  openModel(role: Roles = new Roles()){
    if(role.id == ""){
      this.newRole = new Roles();
    }else{
      this.creatingMode = false;
      this.newRole = role;
    }
  }
}