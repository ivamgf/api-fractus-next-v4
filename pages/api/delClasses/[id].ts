import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import  connect from '../../../utils/database'

interface ResponseType {
    message: string;
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
): Promise<void> => {
    
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     })
     
    try {
        const { method } = req;
        
        const cod: any = req.query.id
        switch (method) {
            case 'DELETE': 
            
            // Access to MongoDB and Classes data
            const { db } = await connect();
            const response: any = await db.collection('classes').deleteOne(
                { "_id" : new ObjectId(`${cod}`) }
            );
            return res.status(200).json(response);

            break;
            default:
                res.setHeader('Allow', ['GET', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed!`);
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!' })
    }
}