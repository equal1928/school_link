enum TypeSchool {
    SCHOOL = 0,
    LYCEUM = 1,
    GYMNASIUM = 2,
    TOP = 3,
    INACTIVE = 4
}

// enum TypeSchool {
//     TOP5,
//     TOP20,
//     TOP56,
//     BASE
// }

export interface PointsSchoolsOnMap {
    id: number;
    latitude: number;
    longitude: number;
    schoolId: number;
    typeSchool: TypeSchool;
}