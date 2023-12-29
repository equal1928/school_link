// enum TypeSchool {
//     SCHOOL = 0,
//     LYCEUM = 1,
//     GYMNASIUM = 2,
//     TOP = 3,
//     INACTIVE = 4
// }

enum TypeSchool {
    TOP5 = 5,
    TOP20 = 20,
    TOP56 = 56,
    BASE = 0
}

// export interface PointsSchoolsOnMap {
//     id: number;
//     latitude: number;
//     longitude: number;
//     schoolId: number;
//     typeSchool: TypeSchool;
// }

export interface PointsSchoolsOnMap {
    id: number;
    latitude: number;
    longitude: number;
    typeSchool: TypeSchool;
}