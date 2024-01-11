import { Roles } from "./roles";

export class User {
    id : string;
    userName : string;
    lastName : string;
    role : Roles;

    constructor(){
        this.id = '';
        this.userName = '';
        this.lastName = '';
        this.role = new Roles();
    }


}
