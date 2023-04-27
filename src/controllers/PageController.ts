import { Response, Request } from "express";

export const home = (req: Request, res: Response) =>{
     res.render('pages/page')
}
export const dogs = (req: Request, res: Response) =>{
    res.send('dog')
    // res.render('pages/page')
}
export const cats = (req: Request, res: Response) =>{

    // res.render('pages/page')
}
export const fishes = (req: Request, res: Response) =>{

    // res.render('pages/page')
}