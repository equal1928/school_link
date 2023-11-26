enum TypeSchool {
    SCHOOL,
    LYCEUM,
    GYMNASIUM,
    TOP,
    INACTIVE
}

export interface SchoolModelCard {
    id: number;
    photo: string;
    name: string;
    typeSchool: TypeSchool;
    features: string[];
    address: string;
    link: string;
}