import type { NextApiRequest, NextApiResponse } from "next";

// /api/time api의 응답값을 정의한다.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();
  res.json({ time: date.toLocaleString() });
}
