import { Coordinates } from "./Coordinates";
import { TourType, Availability } from "./Enums";
export interface Locations {
    countryName: string;
    availability: Availability;
    cities: {
        name: string;
        coordinates: Coordinates[];
        availability: Availability;
        Tours: {
            name: string;
            type: TourType;
            shortDescription: string;
        }[];
    }[];
}
