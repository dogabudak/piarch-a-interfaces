import { AttractionType } from "./Enums";
export interface Coordinates {
    "name": string;
    "x": number;
    "y": number;
    "description": {
        "en": string;
        "tr": string;
    };
    "advertisement": boolean;
    "type": AttractionType;
}
