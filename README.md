This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup Project
Cloning Repository menggunakan terminal dengan perintah berikut :

```bash
git clone https://github.com/akmalghandi20/munyuk-pw2.git
```

Setelah proses cloning dilakukan, buka project dan jalankan perintah berikut menggunakan terminal :
```bash
npm i
```

Setelah melakukan "npm i" buat file .env di folder project dan buat kode di dalamnya sebagai berikut :
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_b25lLWJhc3MtMzYuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_VU9OvUiRgmd36eEbccUhtc8TQmozhKgIlxAvZKvgYj

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/

DATABASE_URL="postgresql://web-admin_owner:kcJfpDNGR1u5@ep-bitter-sky-a50vpyp4-pooler.us-east-2.aws.neon.tech/web-admin?sslmode=require"
```
Running project dengan perintah berikut menggunakan terminal :
```bash
npm run dev
```

Buka browser dan masukkan url berikut : 
```bash
http://localhost:3000
```
