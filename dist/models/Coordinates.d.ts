import { AttractionType } from "./Enums";
export interface Coordinates {
    "city": string;
    "locations": [{
        "name": string;
        "x": number;
        "y": number;
        "type": AttractionType;
    }];
}
