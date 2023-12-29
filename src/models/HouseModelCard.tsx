type School = {
    number: number;
    address: string;
    link: string;
};

// export interface HouseModelCard {
//     id: number;
//     photo: string;
//     price: number;
//     rooms: number;
//     square: number;
//     currentFloor: number;
//     totalFloors: number;
//     schools: School[];
//     address: string;
//     link: string;
// }

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

export interface HouseModelCard {
    id: number;
    link: string;
    district: string;
    street: string;
    house_number: string;
    floor: number;
    Property_Type: string;
    Year_of_Construction: number;
    House_Type: string;
    Floor_Type: string;
    price: number;
    latitude: number;
    longitude: number;
}