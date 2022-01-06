// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  token: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const apiRes = await fetch(
    "https://alvin-realworld.herokuapp.com/api/users/login",
    {
      method: "POST", // or 'PUT'
      body: JSON.stringify({
        user: {
          email: "seogi1004@naver.com",
          password: "hjs79421!",
        },
      }), // data can be `string` or {object}!
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const apiData = await apiRes.json();

  if (!apiData) {
  }

  res.status(200).json({ token: apiData.user.token });
}
