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
        
        const scene = 2;
        const numberClass = 5;
        const description = "Aula 5";
        const content = `Prmeira cena da 5º aula.`;
        const image = "http://app-fractus.orkneytech.com.br/assets/images/05-pares-e-10-pedacinhos-de-chocolate.png";
        
        const data = {
            "scene": scene,
            "class": numberClass,
            "description": description,
            "content": content,
            "image": image
        }

        const cod: any = req.query.id
        switch (method) {
            case 'PUT': 
            
            // Access to MongoDB and Classes data
            const { db } = await connect();
            const response: any = await db.collection('classes').updateOne(
                { "_id" : new ObjectId(`${cod}`) }, 
                { $set: data }, 
                {upsert: true}
            );
            return res.status(200).json(response);

            break;
            default:
                res.setHeader('Allow', ['GET', 'PUT']);
                res.status(405).end(`Method ${method} Not Allowed!`);
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!' })
    }
}