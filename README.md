# Controle de Dieta - Spa Angular

Projeto para visualização de dietas.

## O que é
Aplicação SPA em Angular que exibe refeições e itens de dieta a partir de mocks locais. Inclui pipeline de CI/CD para deploy em bucket S3 (GitHub Actions).
É um projeto que estou utilizando para estudo, aplicando boas práticas e ao mesmo tempo, fazendo algo que eu possa utilizar.

## Tecnologias
- Angular 20.x
- TypeScript 5.x
- Node.js v22x LTS
- GitHub Actions (CI/CD)
- AWS S3 (static website)

## Pré-requisitos
- Node.js

## Rodando localmente
```bash
npm install
npm start
# abrir http://localhost:4200
```

## Mocks
Mocks da dieta: `src/app/shared/mocks/diets.mock.ts` 

## Fonts usadas
As fonts estão incluídas em `src/index.html`:

- Irish Grover (Google Fonts)
  - https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap

- Inter (Google Fonts)
  - ttps://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap

## Deploy (resumo)
- Workflow: `.github/workflows/deploy.yml`
- Secrets necessários: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET`
- Recomendação: usar `aws s3 sync` e controlar cache (assets com long cache; `index.html` sem cache). Use `actions/upload-artifact` + `download-artifact` se separar build/deploy em jobs.

## Arquivos relevantes
- `src/index.html` — imports de fonts e root
- `src/app/shared/mocks/diets.mock.ts` — mock da dieta