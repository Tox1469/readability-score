# readability-score

Índice Flesch de legibilidade adaptado para Português do Brasil.

## Instalação

```bash
npm install readability-score
```

## Uso

```ts
import { fleschPt } from "readability-score";

fleschPt("O gato dorme no sofá. Ele está feliz.");
// { fleschPt: 95.3, level: "muito fácil", ... }
```

## API

- `fleschPt(text): ReadabilityResult`

## Licença

MIT
