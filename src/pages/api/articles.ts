// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { GetArticleWrapper } from '../../types';
import { API_HOST } from '../../constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse<GetArticleWrapper>) {
  const { token } = req.cookies;
  const headers = {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  };

  if (req.method === 'POST') {
    const apiRes = await fetch(`${API_HOST}/articles`, {
      method: 'POST',
      headers,
      body: req.body,
    });

    const apiData = await apiRes.json();
    res.status(apiRes.status).json(apiData);
  } else if (req.method === 'GET') {
    const apiRes = await fetch(`${API_HOST}/articles/${req.query.slug}`, {
      method: 'GET',
      headers,
    });

    const apiData = await apiRes.json();
    res.status(apiRes.status).json(apiData);
  }
}
