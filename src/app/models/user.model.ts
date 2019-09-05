export class User {

    email: string;
    name: string;
    lastName: string;
    password: string;
    profile: string;
    students: Array<any>;
    avatar:string;

    constructor() {}

    getUser() {
        return {
            email: this.email,
            password: this.password
        };
    }

    set ( user: User ) {

        this.email = user.email;
        this.name = user.name;
        this.lastName = user.lastName;
        this.password = user.password;
        this.profile = user.profile;
        this.students = user.students;
        this.avatar = user.avatar;
    }


}
