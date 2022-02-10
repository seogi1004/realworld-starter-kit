// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { GetArticleWrapper } from '../../types';
import { API_HOST } from '../../constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse<GetArticleWrapper>) {
  if (req.method === 'POST') {
    const { token } = req.cookies;
    const apiRes = await fetch(`${API_HOST}/articles`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: req.body,
    });

    const apiData = await apiRes.json();
    res.status(apiRes.status).json(apiData);
  }
}
