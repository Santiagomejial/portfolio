# Deploy guide

Guía práctica para desplegar el portafolio. Dos rutas:

- **Vercel** — deploy productivo recomendado (preview + prod con un clic).
- **Claude Design** — entorno final para ajuste visual y publicación con dominio propio.

---

## Pre-check (antes de cualquier deploy)

```bash
npm install
npm run type-check   # debe pasar verde (TS strict)
npm run lint         # debe pasar verde
npm run build        # debe buildar sin errores
```

Si los tres pasan, el paquete está limpio para subir.

---

## Ruta A · Vercel

### 1. Preparación

1. Crear repo en GitHub con `portfolio_site/` como root.
2. `.gitignore` ya excluye `node_modules`, `.next`, `.vercel`, `.env*.local`, `*.tsbuildinfo`, `next-env.d.ts`.
3. Verificar que no haya secretos en el tree (`git grep -i 'key\|secret\|token'` → debe estar vacío).

### 2. Deploy

1. `vercel.com` → New Project → importar repo.
2. Framework preset: **Next.js** (autodetectado).
3. Root directory: `portfolio_site` (si el repo tiene el folder anidado).
4. Build command: `npm run build` (default OK).
5. Output directory: `.next` (default OK).
6. Environment variables: **ninguna requerida**.
7. Deploy.

### 3. Dominio

Panel del proyecto → Domains → añadir dominio. Apuntar DNS al CNAME de Vercel o usar los nameservers de Vercel.

### 4. Preview workflow

Cada PR → preview URL única. `main` → producción. Ideal para iterar con feedback antes de cerrar copies en Claude Design.

---

## Ruta B · Claude Design

> El objetivo de Claude Design es hacer el ajuste fino visual (copies finales, imágenes, refinamiento tipográfico) sobre el código ya funcional, sin tener que tocar lógica.

### 1. Empaquetar

Exportar **solo** la carpeta `portfolio_site/` con este contenido incluido:

```
portfolio_site/
├── app/                 ← incluir todo
├── components/          ← incluir todo
├── lib/                 ← incluir todo
├── styles/              ← incluir todo
├── public/              ← incluir todo (incluso si está vacío)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
├── .gitignore
├── README.md
├── DEPLOY.md
└── CONTENT-SLOTS.md
```

**Excluir** (son generados, no forman parte del paquete):

```
node_modules/
.next/
.vercel/
out/
*.tsbuildinfo
next-env.d.ts
.DS_Store
.env*.local
```

Comando de referencia (ajustar según sistema):

```bash
cd "/ruta/padre"
zip -r portfolio_site.zip portfolio_site \
  -x "portfolio_site/node_modules/*" \
     "portfolio_site/.next/*" \
     "portfolio_site/.vercel/*" \
     "portfolio_site/out/*" \
     "portfolio_site/**/.DS_Store"
```

### 2. Subir a Claude Design

Importar el zip. Claude Design ejecuta `npm install` + `npm run build` en su runtime.

### 3. Qué editar en Claude Design

| Quiero cambiar… | Voy a… |
|-----------------|--------|
| Color global / tema | `styles/tokens.css` |
| Fuente display o body | `app/layout.tsx` (import de `next/font`) + token `--font-*` |
| Copy de un case | `app/work/<case>/page.tsx` |
| Imagen de un case | `public/<case>/*` + `alt` en el CaseMedia correspondiente |
| Timeline de About | `app/about/page.tsx` — array `TIMELINE` |
| Snapshot de Home | `app/page.tsx` — sección Snapshot |
| Links del FloatingNav | `components/floating-nav.tsx` |
| Contenido del Footer | `components/footer.tsx` |

Las páginas están escritas como **composiciones declarativas** — no hay estado, no hay side-effects. Cambiar texto o reordenar secciones no rompe nada.

### 4. Antes de publicar

Checklist mínima:

- [ ] `npm run type-check` verde
- [ ] `npm run build` verde
- [ ] FloatingNav se ve bien en dark y en light
- [ ] Todos los cases tienen circular nav correcto (LeClop → Homecenter cierra el loop)
- [ ] Copies revisados en ES (EN queda pendiente para v1.1)
- [ ] Imágenes optimizadas (ver `CONTENT-SLOTS.md`)
- [ ] Favicon + OG en `public/`
- [ ] Meta tags OG por página (pendiente — añadir en `app/*/page.tsx` con `export const metadata`)

---

## Troubleshooting

**Build falla por tipos de `next/font`** — Next 15 requiere Node 18.18+. Verificar `node -v`.

**Tailwind no aplica los tokens** — confirmar que `app/globals.css` importa `../styles/tokens.css` y que `tailwind.config.ts` incluye `app/**/*.{ts,tsx}` y `components/**/*.{ts,tsx}` en el array `content`.

**Flash de tema incorrecto al cargar** — el script inline en `layout.tsx` debe estar antes del `<body>`. No mover al final.

**Hydration mismatch en `use-theme` / `use-lang`** — asegurar que los hooks devuelvan el valor por default en el primer render SSR y se sincronicen con `localStorage` en `useEffect`.

---

© 2026 Santiago Mejía L.
