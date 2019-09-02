export class User {

    name: string;
    lastName: string;
    email: string;
    password: string;
    profile: string;

    constructor() {}

    getUser() {
        return {
            email: this.email,
            password: this.password
        };
    }


}
