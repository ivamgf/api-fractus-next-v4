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

        const scene = null;
        const numberClass = null;
        const description = "";
        const content = ``;
        const image = "";
        
        const data = {
            "scene": scene,
            "class": numberClass,
            "description": description,
            "content": content,
            "image": image
        }

        switch (method) {
            case 'POST': 

            // Access to MongoDB and Classes data
            const { db } = await connect();
            const response: any = await db.collection('classes').insertOne(
                data
            );
            res.status(200).json(response);

            break;
            default:
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed!`);
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!' })
    }
}