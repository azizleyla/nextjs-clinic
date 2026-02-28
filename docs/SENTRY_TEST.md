# Sentry — necə test etmək?

## 1. reportError artıq Sentry-ə gedir

`src/core/errors/report.ts`-də `Sentry.captureException` çağırılır. Yəni:
- API route-larda və DoctorsList-də `reportError` ilə tutulan xətalar Sentry-də görünəcək.
- Error Boundary-da da xəta Sentry-ə göndərilir.

---

## 2. Test üsulları

### A) Wizard-ın test səhifəsi

1. Dev serveri işə salın: `npm run dev`
2. Brauzerdə açın: **http://localhost:3000/sentry-example-page**  
   (Əgər locale ilə açırsınızsa: **http://localhost:3000/en/sentry-example-page**)
3. **"Throw a sample error"** düyməsinə klikləyin.
4. Bir neçə saniyə sonra **Sentry dashboard**-da (sentry.io) Issues bölməsində bu xəta görünməlidir.

### B) Öz xətanızı (reportError) test etmək

1. Həkimlər səhifəsinə gedin: `/en/doctors` (və ya `/az/doctors`).
2. API-ni müvəqqəti sındırın (məs. Supabase dayandırın və ya `/api/departments` 500 qaytarsın) — filter yüklənərkən xəta baş verəcək və `reportError` çağrılacaq.
3. Və ya kodda test xətası atın:
   - Məs. DoctorsList-də `useEffect` içində `reportError(new Error("Test Sentry"), { context: "test" });` əlavə edib səhifəni açın.
4. Sentry dashboard-da **Issues** bölməsində yeni event görünməlidir.

### C) Error Boundary testi

1. İstənilən komponentdə render zamanı xəta atan kod yazın (məs. `throw new Error("Test boundary");`).
2. Səhifə açılanda Error Boundary tutacaq və `reportError` (error.tsx-də) Sentry-ə göndərəcək.
3. Sentry-də bu xəta da görünəcək.

---

## 3. Sentry dashboard-da haraya baxmaq?

1. **https://sentry.io** — öz org/project (məs. test-2aj / javascript-nextjs).
2. Sol menyuda **Issues** — bütün xətalar.
3. **Performance** — əgər aktivdirsə, trafik və yavaş requestlər.

---

## 4. Qısa

| Nə etmək      | Necə |
|---------------|------|
| Wizard testi  | `/sentry-example-page` açıb "Throw a sample error" klikləmək. |
| reportError   | API/DoctorsList-də xəta olsun və ya test üçün `reportError(new Error("Test"))` çağırın. |
| Nəticə        | sentry.io → Issues-da bir neçə saniyə ərzində görünər. |

Production-da da eyni qayda: xəta baş verəndə Sentry-ə avtomatik düşər.
