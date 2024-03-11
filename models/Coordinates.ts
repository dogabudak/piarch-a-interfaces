import {AttractionType} from "./Enums";
export interface Coordinates {
        "name" : string, //example: "Ayasofya"
        "x" : number,
        "y" : number,
        "description" : string,
        "advertisement" : boolean,
        "type" : AttractionType
    }[]
