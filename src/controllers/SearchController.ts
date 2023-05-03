import { Request, Response } from "express";

import { Pet } from "../models/pet";
import { createMenuObject } from '../helpers/createMenuObject'

export const search = (req: Request, res: Response) => {
    //Pegando o resultado da busca la no url e salvando na variavel query
    let query: string = req.query.q as string;
    
    // Se não tiver query fazer uma verificação caso não tiver redirecionar a pagina para a pagina principal
    if(!query) {
        res.redirect('/');
        return;
    }

    // Fazendo uma lista de array novo com os filtros passados pela url.
    let list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })

}