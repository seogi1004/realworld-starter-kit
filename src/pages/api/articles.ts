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

  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    const afterPath = req.method === 'POST' ? '' : `/${req.query.slug}`;

    if (req.method !== 'DELETE') {
      const apiRes = await fetch(`${API_HOST}/articles${afterPath}`, {
        method: req.method,
        headers,
        body: req.body,
      });

      const apiData = await apiRes.json();
      res.status(apiRes.status).json(apiData);
    } else {
      const apiRes = await fetch(`${API_HOST}/articles${afterPath}`, {
        method: req.method,
        headers,
      });

      res.status(apiRes.status).end();
    }
  } else if (req.method === 'GET') {
    const apiRes = await fetch(`${API_HOST}/articles/${req.query.slug}`, {
      method: req.method,
      headers,
    });

    const apiData = await apiRes.json();
    res.status(apiRes.status).json(apiData);
  }
}
