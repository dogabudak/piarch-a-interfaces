"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourType = exports.AttractionType = exports.Availability = void 0;
// Use this where its needed 
var Availability;
(function (Availability) {
    Availability[Availability["featured"] = 0] = "featured";
    Availability[Availability["available"] = 1] = "available";
})(Availability = exports.Availability || (exports.Availability = {}));
var AttractionType;
(function (AttractionType) {
    AttractionType[AttractionType["Church"] = 0] = "Church";
    AttractionType[AttractionType["Mosque"] = 1] = "Mosque";
    AttractionType[AttractionType["Museum"] = 2] = "Museum";
    AttractionType[AttractionType["Shop"] = 3] = "Shop";
    AttractionType[AttractionType["Cistern"] = 4] = "Cistern";
    AttractionType[AttractionType["Column"] = 5] = "Column";
    AttractionType[AttractionType["House"] = 6] = "House";
    AttractionType[AttractionType["Square"] = 7] = "Square";
    AttractionType[AttractionType["Park"] = 8] = "Park";
})(AttractionType = exports.AttractionType || (exports.AttractionType = {}));
var TourType;
(function (TourType) {
    TourType[TourType["Bike"] = 0] = "Bike";
    TourType[TourType["Hike"] = 1] = "Hike";
    TourType[TourType["Trekking"] = 2] = "Trekking";
})(TourType = exports.TourType || (exports.TourType = {}));
//# sourceMappingURL=Enums.js.map