// TODO this is the user object
export enum Gender {
    Male= "Male",
    Female= "Female",
    Other= "Other",
}
export interface UserCoordinates {
    coords : {
        altitude : number,
        altitudeAccuracy : number,
        latitude : number,
        accuracy : number,
        longitude : number,
        heading : number,
        speed : number
    },
    timestamp : Date
}
export interface User {
    username:string,
    password:string,
    full_name?:string,
    gender?:Gender,
    birthdate?: Date,
    mail?: string,
    phone?: string,
    locations?: [UserCoordinates],
    lastLogin: Date,
    languagePreferences: [string],
    chats?: [string],
}
