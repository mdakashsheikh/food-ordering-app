import { Request, Response } from "express";

const createCurrentUser = async(req: Request, res: Response) => {

    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error Creating User'})
    }
}

export default {
    createCurrentUser,

}