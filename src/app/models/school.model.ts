export class School {

    public schoolId: string;
    public address: {};
    public cast: Array<{}>;
    public image: string;
    public name: string;

    constructor() {

    }

    set ( school: School ) {

        this.address = school.address;
        this.cast = school.cast;
        this.image = school.image;
        this.name = school.name;

    }

}
