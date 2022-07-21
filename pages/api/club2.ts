import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    club: string;
  country: string;
  year: number;
  isSuper: boolean;
  captain: string;
  titles: string[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    {
        "club": "Arsenal",
        "country": "England",
        "year": 1999,
        "isSuper": false,
        "captain" : "abamajang",
        "titles": [
          "null",
          "none"
        ]
         
      }
      
  )
}