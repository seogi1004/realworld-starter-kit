// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../types';
import { API_HOST } from '../../constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse<User | null>) {
  const { token } = req.cookies;
  const apiRes = await fetch(`${API_HOST}/user`, {
    method: 'GET', // or 'PUT'
    headers: {
      accept: 'application/json',
      Authorization: `Token ${token}`,
    },
  });

  const apiData = await apiRes.json();
  if (!apiData.user) {
    res.status(401).json(null);
  } else {
    res.status(200).json(apiData.user);
  }
}
