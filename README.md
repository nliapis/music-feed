# Music feeder

This example demonstrates how to use Next.js to fetch and display the top 100 albums in the US based on the iTunes/Apple music API.
You can visit this app [here](https://music-feed.now.sh/)

## Basic functionality

- Fetch the top 100 albums in the US based on the iTunes/Apple music API
- Display these albums in the homepage
- Filter by using album name or artist
- Click on album to navigate in the single view of the album
- You can limit the number of the results by using a query param like [this](https://music-feed.now.sh/?limit=24)

## Tech stack

- Next.js
- React
- Typescript
- Sass
- React testing library & Jest
- Zeit

### Download manually

```bash
git clone https://github.com/nliapis/music-feed.git
cd music-feed
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Run production build with:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```
