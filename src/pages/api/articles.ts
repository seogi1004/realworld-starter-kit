// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { GetArticle } from '../../types';
import { API_HOST } from '../../constants';

type GetArticleWrapper = {
  article: GetArticle;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<GetArticleWrapper>) {
  if (req.method === 'POST') {
    const { token } = req.cookies;
    const apiRes = await fetch(`${API_HOST}/articles`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(req.body),
    });

    const apiData = await apiRes.json();
    res.status(200).json(apiData);
  }
}
