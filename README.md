## Before you proceed

Start by creating a Bot with @BotFather on telegram which'll give you token. Rest, you can get from creating an app in Telegram's [https://my.telegram.org/](API development tools).

```
TELEGRAM_API_ID
TELEGRAM_API_HASH
TELEGRAM_BOT_TOKEN
```

Then,
0. Search for 'TODO' in the code where you'll have to do some changes as required.
1. Get this boilerplate, run *yarn run dev* to run on [localhost:3000](http://localhost:3000), then run *ngrok http 3000* which gives you a URL. 
2. In @BotFather telegram chat, put that domain in /setdomain command.
3. You'll now be able to login with Telegram as well as see your changes reflect in the same.

(This is compulsory to test Telegram login in local environment)

```
Start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
