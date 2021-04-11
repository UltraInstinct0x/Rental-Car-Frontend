export interface Rental{
    id?:number,
    carId:number,
    customerId:number,
    rentDate:Date,
    rentDateEnd:Date,
    returnDate?:Date,
}