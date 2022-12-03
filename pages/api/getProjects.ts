import type {NextApiRequest, NextApiResponse} from 'next'
import { groq} from 'next-sanity'
import {sanityClient} from '../../sanity'

const query = groq`
*[_type == 'project']{
  ..., technologies[]->
}
`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const projects=await sanityClient.fetch(query)
    res.status(200).json({ projects })
  }
  