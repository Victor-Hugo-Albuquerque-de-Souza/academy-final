import { ReactElement } from "react"

export interface IRequest {
    method:string,
    url:string,
    mode:string,
    params?:{
        limit: number|string
    }
    headers:{
        authorizations?:string,
        token?:string
    }
}

export interface IAccordion {
    accordionIcon:ReactElement,
    accordionName:string,
    linkChild1:string,
    firstChildIcon:ReactElement,
    firstChildTypo:string,
    linkChild2:string,
    secondChildIcon:ReactElement,
    secondChildTypo:string
}

export interface GetMovies{
    title:string,
    release_year:number,
    rental_rate:number,
    rental_duration:number,
    description:string
}

export interface GetCustomer{
    first_name:string,
    last_name:number,
    email:number,
    address:number,
}

export interface GetRentals{
    date_rental:string,
    inventory_code:number,
    customer_id:string,
    employee_id:string
}
export interface createMovie{
    title:string;
    description:string;
    release_year:number;
    language_id:number;
    rental_duration:number;
    rental_rate:number;
    replacement_cost:number;
    rating:string;
    // special_features:string;
}