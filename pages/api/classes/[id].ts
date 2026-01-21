import { ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import connect from '../../../utils/database'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ✅ CORS primeiro
  await NextCors(req, res, {
    methods: ['GET', 'OPTIONS'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  // ✅ Preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    const { id } = req.query

    // 🔐 Validação forte
    if (!id || typeof id !== 'string' || !ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Invalid id' })
      return
    }

    if (req.method === 'GET') {
      const { db } = await connect()

      const classe = await db
        .collection('classes')
        .findOne({ _id: new ObjectId(id) })

      if (!classe) {
        res.status(404).json({ message: 'Class not found' })
        return
      }

      res.status(200).json(classe)
      return
    }

    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: 'Method Not Allowed' })
  } catch (error) {
    console.error('API /classes/[id] error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
