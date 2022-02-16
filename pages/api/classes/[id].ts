import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'
import  connect from '../../../utils/database'

interface ResponseType {
    message: string;
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
): Promise<void> => {

    try {
        const { method } = req;

        const cod = "6207fae1204e4a87c4ea5ebf"
        const id = {
            "_id": cod
        }
         
        switch (method) {
            case 'GET': 

            // Access to MongoDB and Classes data
            const { db } = await connect();
            const response: any = await db.collection('classes').findOne(
                { "_id" : new ObjectId("6207fae1204e4a87c4ea5ebf") }
            );
            return res.status(200).json(response);

            break;
            default:
                res.setHeader('Allow', ['GET']);
                res.status(405).end(`Method ${method} Not Allowed!`);
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!' })
    }
}