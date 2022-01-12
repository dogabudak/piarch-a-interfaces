import {AttractionType} from "./Enums";
export interface Coordinates {
    "city" : string,
    "locations" : [
    {
        "name" : string, //example: "Ayasofya"
        "x" : number,
        "y" : number,
        "type" : AttractionType
    }
]
}