type School = {
    number: number;
    address: string;
    link: string;
};

export interface HouseModel {
    id: number;
    photo: string;
    price: number;
    rooms: number;
    square: number;
    currentFloor: number;
    totalFloors: number;
    schools: School[];
    address: string;
    link: string;
}