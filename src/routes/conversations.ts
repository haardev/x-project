import express, {Response, Request} from 'express';
import {ValidationError} from 'sequelize';
import ConversationModel from '../models/conversationModel';
import { ValidationErrorMessage } from '../types/ValidaitonErrorMessage';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const conversations = await ConversationModel.findAll({
            raw : true,
            nest : true
          });

          return res.json(conversations);
    }
    catch(exeception) {
        return res.send('Error with the server');
    }
});

router.post('/', async (req:Request, res: Response) => {
    let response = null;
    
    try {
        response = await ConversationModel.create(req.body);
    }
    catch(exeception) {
        if(exeception instanceof ValidationError) {
            const errorMessage = new ValidationErrorMessage(exeception);
            response = errorMessage.getMessage();
        }
        else {
            console.log('Log it ');
        }
    }
    response = {
        ...response,
        cookies: req.cookies
    };
    
    return res.json(response);
});

export default router;