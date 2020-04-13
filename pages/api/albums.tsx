import { NextApiRequest, NextApiResponse } from 'next';
import queryString from 'query-string';
import fetch from 'isomorphic-unfetch';
import { Album, Entry } from '../../interfaces';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  let { query } = req;

  const limit = queryString.stringify(query) || 'limit=100';

  const getAlbumsReq = await fetch(
    `https://itunes.apple.com/us/rss/topalbums/${limit}/json`
  );

  const data: Album = await getAlbumsReq.json();

  res.status(200).json(data.feed.entry as Entry[]);
};
