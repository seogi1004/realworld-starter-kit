// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../types";
import { API_HOST } from "../../constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | null>
) {
  const apiRes = await fetch(`${API_HOST}/users/login`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify({
      user: {
        email: req.body.email,
        password: req.body.password,
      },
    }),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const apiData = await apiRes.json();
  console.log(apiData.user);

  if (!apiData.user) {
    res.setHeader("Set-Cookie", `token=; path=/; expires=-1`);
    res.status(401).redirect("/login");
  } else {
    res.setHeader("Set-Cookie", `token=${apiData.user.token}; path=/;`);
    res.status(200).redirect("/");
  }
}
