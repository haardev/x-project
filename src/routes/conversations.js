import express from 'express';
import {ValidationError} from 'sequelize';
import ConversationModel from '../models/conversationModel';
import { ValidationErrorMessage } from '../types/ValidaitonErrorMessage';

const router = express.Router();

router.get('/', async (req, res) => {
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

router.post('/', async (req, res) => {
    console.log(req.body);
    let response = null;

    console.log(req.cookies);
    
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