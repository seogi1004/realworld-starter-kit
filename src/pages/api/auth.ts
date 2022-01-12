// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type User = {
  email: string;
  username: string;
  bio: string;
  image: string;
  token: string;
};

export const API_HOST = "https://alvin-realworld.herokuapp.com/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | null>
) {
  const apiRes = await fetch(`${API_HOST}/users/login`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify({
      user: {
        email: "seogi1004@naver.com",
        password: "hjs79421!",
      },
    }),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const apiData = await apiRes.json();
  if (!apiData.user) {
    res.setHeader("Set-Cookie", `token=; path=/; expires=-1`);
    res.status(401).json(null);
  } else {
    res.setHeader("Set-Cookie", `token=${apiData.user.token}; path=/;`);
    res.status(200).json(apiData.user);
  }
}
