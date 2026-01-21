import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import connect from '../../../utils/database'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // CORS PRIMEIRO
  await NextCors(req, res, {
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  // PRE-FLIGHT
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    if (req.method === 'GET') {
      const { db } = await connect()

      const classes = await db
        .collection('classes')
        .find({})
        .toArray()

      res.status(200).json(classes)
      return
    }

    // Método não permitido
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: 'Method Not Allowed' })
  } catch (error) {
    console.error('API /classes error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
