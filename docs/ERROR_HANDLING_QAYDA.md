# Error handling qaydası

Layihədə **hər `catch` blokunda** mərkəzləşdirilmiş report istifadə edirik.

## Qayda

**Try/catch yazanda:**
- `catch` içində **mutləq** `reportError(err, { context: "..." })` çağırın.
- `context`-ə qısa açıqlama yazın: harada baş verdiyi (məs. `"api/doctors GET"`, `"DoctorsList.fetchFilters"`).

## Nümunə

```ts
try {
  const data = await apiClient.get("/api/...");
  setData(data);
} catch (err) {
  reportError(err, { context: "ComponentName.fetchData" });
  // əlavə: istifadəçiyə göstərmək (setState, fallback)
} finally {
  setLoading(false);
}
```

## API route-larda

```ts
} catch (err) {
  reportError(err, { context: "api/doctors GET" });
  const message = err instanceof Error ? err.message : "Unknown error";
  return NextResponse.json({ error: message }, { status: 500 });
}
```

## Nə üçün?

- Bütün xətalar **bir yerdən** (console, sonra Sentry) görünür.
- **context** sayəsində xətanın harada baş verdiyini bilirik.
- Yeni try/catch yazanda bu qaydaya əməl edin.

## Import

```ts
import { reportError } from "@/core/errors";
```
