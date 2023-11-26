enum TypeSchool {
    SCHOOL = 0,
    LYCEUM = 1,
    GYMNASIUM = 2,
    TOP = 3,
    INACTIVE = 4
}

export interface PointsSchoolsOnMap {
    id: number;
    latitude: number;
    longitude: number;
    schoolId: number;
    typeSchool: TypeSchool;
}