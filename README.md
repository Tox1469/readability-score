[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/readability-score/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/readability-score/actions)
[![License](https://img.shields.io/github/license/Tox1469/readability-score?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/readability-score?style=flat-square)](https://github.com/Tox1469/readability-score/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/readability-score?style=flat-square)](https://github.com/Tox1469/readability-score/stargazers)

---

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