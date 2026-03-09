## Elmed Hospital – Next.js klinika saytı

Bu layihə Next.js 16 (App Router) əsasında hazırlanmış çoxdilli (az/en) klinika saytıdır. Layihədə:

- **Ana səhifə**: hero slider, statistika (counter), şöbələr, həkimlər, bloqlar və partnyorlar bölmələri
- **Şöbələr**: `/departments` siyahı səhifəsi və hər şöbə üçün detal səhifəsi
- **Həkimlər**: filial və şöbə üzrə filterlənə bilən həkim siyahısı, həkim detal səhifələri
- **Bloq**: bloq siyahısı və bloq detal səhifələri
- **Əlaqə**: qəbul üçün müraciət forması və filialların xəritə üzərində göstərilməsi
- **Dark mode**: `next-themes` ilə işıq/tünd tema dəstəyi
- **Çoxdillilik**: `next-intl` ilə `az` və `en` lokalizasiya

### Texnologiyalar

- **Framework**: Next.js 16 (App Router, `app/[locale]` strukturu, `generateMetadata`)
- **UI**: React 19, Tailwind CSS, `react-icons`, `swiper`, `react-select`
- **Tema**: `next-themes`
- **i18n**: `next-intl`
- **Backend / API**: Next.js `app/api/*` route-ları (departments, doctors, branches və s.)
- **Əlavə**: Axios, Prisma, Supabase SDK, Google Maps (`@react-google-maps/api`)

### Layihəni işə salmaq

```bash
# asılılıqları quraşdır
npm install

# development server
npm run dev

# build
npm run build

# production server
npm start
```

Server default olaraq `http://localhost:3000` ünvanında işləyir.

### Fayl strukturu (qısa)

- `src/app/[locale]/page.tsx` – ana səhifə
- `src/app/[locale]/departments` – şöbə siyahısı və detal səhifələri
- `src/app/[locale]/doctors` – həkimlər siyahısı və detalları
- `src/app/[locale]/blogs` – bloqlar
- `src/shared/layout` – `Navbar`, `Topbar`, `Footer`, `Banner`
- `src/features` – domen əsaslı komponentlər (home, doctors, departments, blogs və s.)

### Ətraf mühit dəyişənləri

Layihədə backend və üçüncü tərəf servislər (Prisma, Supabase, Google Maps və s.) istifadə olunur. Lokal mühit üçün aşağıdakı kimi `.env.local` faylı yaradılmalıdır (dəyərlər nümunədir, real açarları özün əlavə etməlisən):

```env
DATABASE_URL=postgres://user:password@localhost:5432/elmed
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
GOOGLE_MAPS_API_KEY=...
```

### Lint və keyfiyyət

- Kod keyfiyyəti üçün `eslint` konfiqurasiyası mövcuddur:

```bash
npm run lint
```

Tailwind, TypeScript və Next.js qaydalarına uyğun yazmaq tövsiyə olunur.

### UI qeydləri

- Layout `Topbar + Navbar` sticky header ilə gəlir (scroll zamanı yuxarıda qalır).
- Dark mode bütün əsas səhifələrdə (ana səhifə, şöbələr, həkimlər, bloqlar, kontakt, banner və footer) dizayna uyğunlaşdırılıb.
- Filterlər (xüsusilə `/doctors` səhifəsində şöbə/filial select-ləri) həm light, həm də dark tema üçün optimallaşdırılıb.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
