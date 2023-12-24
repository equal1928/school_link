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

// enum TypeSchool {
//     TOP5,
//     TOP20,
//     TOP56,
//     BASE
// }

// export interface SchoolModelCard {
//     id: number;
//     photo: string;
//     name: string;
//     phone: string;
//     email: string;
//     foundingDate: string;
//     classes: string;
//     numberStudents: string;
//     basicEducation: string;
//     profiles: string;
//     languages: string;
//     additionalEducation: string;
//     typeSchool: TypeSchool;
//     address: string;
//     link: string;
// }