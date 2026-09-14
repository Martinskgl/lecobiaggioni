# Leco Biaggìoni

Site do escritório Leco Biaggìoni, no espírito do template [Wedded](https://wedded.framer.website/).

Repositório: https://github.com/Martinskgl/lecobiaggioni  
Preview: https://lecobiaggioni.vercel.app

## Estado atual

O layout e as animações estão no lugar para o designer trabalhar. Fotos são **placeholders**. Textos visíveis são **lorem ipsum** até o copy final. A copy real do briefing continua em `src/lib/dictionaries.ts` e `src/lib/ui.ts` — para ligá-la de novo, mude `placeholderContent` em `src/lib/site.ts`.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- PT / EN / ES em `/pt`, `/en`, `/es`

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000` e redireciona para `/pt`.

## Histórico

O git documenta a evolução do projeto em commits pequenos. Cada mudança de estrutura, animação ou conteúdo entra como um commit próprio e sobe para o GitHub.
