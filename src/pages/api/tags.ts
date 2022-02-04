// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { API_HOST } from '../../constants';

type Data = {
  tags: Array<string>
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const apiRes = await fetch(`${API_HOST}/tags`, {
    method: 'GET'
  });

  const apiData = await apiRes.json();
  res.status(200).json(apiData);
}