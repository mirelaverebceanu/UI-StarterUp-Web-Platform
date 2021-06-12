export class User{
    constructor(
        public email?:string,
        public password?:string,
        public userName?:string,
        public fullName?:string,
        public confirmPassword?:string,
        // public birthday?:Date,
        public phone?:number,
        public role?:string,
        public gender?:string,
        public country?:string,
    ){}
}