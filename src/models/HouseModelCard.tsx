type School = {
    number: number;
    address: string;
    link: string;
};

export interface HouseModelCard {
    id: number;
    photo: string;
    price: number;
    rooms: number;
    totalSquare: number;
    currentFloor: number;
    totalFloors: number;
    schools: School[];
    address: string;
    link: string;
}

// export interface HouseModelCard {
//     id: number;
//     photo: string;
//     price: number;
//     housType: string;
//     rooms: number;
//     totalSquare: number;
//     livingSquare: number;
//     currentFloor: number;
//     totalFloors: number;
//     wallMaterial: string;
//     yearConstruction: number;
//     description: string;
//     schools: School[];
//     address: string;
//     link: string;
// }