export declare enum Availability {
    Available = "Available",
    Featured = "Featured"
}
export interface Cities {
    "country": string;
    "availability": Availability;
    "cities": string[];
}
