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