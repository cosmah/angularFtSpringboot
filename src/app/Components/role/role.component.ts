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
  //this variable gets data from modal
  newRole : Roles = new Roles();
  //this variable determines whetehr we are i  changing or creating a new user
  creatingMode : boolean = true;
  constructor(private roleService : RolesService){
    this.getAllRoles();
  }
  //GET ALL ROLES FROM DATABASE
  getAllRoles(){{
    this.roleService.getAll().subscribe((response : Roles[])=>{
      this.roleList = response;
    })
  }
  //delete role by id
  deleteRole(roleId : string){
    if(confirm("Are you sure you want to delete this role !!!")){
      this.roleService.Delete(roleId).subscribe(()=>{
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
    this.roleService.Create(newRole).subscribe(()=>{
      alert("Role Created Successfully");
      window.location.reload();
    });
  }
  //Update role
  modifyRole(){
    this.roleService.Update(this.newRole).subscribe(()=>{
      alert("Role Updated Successfully");
      window.location.reload();
    })
  }
  // function to verify the event
  openModel(role: Role = new Roles()){
    if(role.id == ""){
      this.newRole = new Roles();
    }else{
      this.creatingMode = false;
      this.newRole = role;
    }
  }
}

}
}