type Point = {
    id: number;
    latitude: number;
    longitude: number;
    countApartments: number;
    // apartmentIds: number[];
};

export interface PointsOnMapModel {
    points: Point[];
}