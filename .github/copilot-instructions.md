# GitHub Copilot Instructions

## Projeto
- SPA Angular de controle de dieta.
- Usa Angular 20, TypeScript e SCSS.
- Código principal em `src/app`.
- Funcionalidades atuais:
  - `src/app/features/home`
  - `src/app/features/login`
  - `src/app/shared/services`
  - `src/app/shared/mocks`

## Comandos principais
- `npm start` — inicia o app com `ng serve`
- `npm build` — compila o projeto com `ng build`
- `npm test` — roda testes com `ng test`

## Estrutura importante
- `src/app/app.ts` — ponto de inicialização do aplicativo
- `src/app/app.routes.ts` — configura rotas do SPA
- `src/app/features/*` — componentes por funcionalidade
- `src/app/shared/services` — serviços compartilhados
- `src/app/shared/mocks` — dados falsos(mock) usados no app enquanto não há backend
- `.specify/` — fluxo de especificação e templates do Spec Kit

## Convenções do projeto
- Use padrões Angular e TypeScript.
- Prefira texto em português nas telas, mantendo o estilo atual.
- Mantenha componentes e estilos auto-contidos.
- Preserve import paths ao renomear ou mover arquivos.
- Este projeto é um frontend SPA e terá um backend em outro repositório.

## Especificações / Spec Kit
- O repositório já contém `.specify/` com templates e workflows.
- Ao criar specs, use os modelos existentes em:
  - `.specify/templates/spec-template.md`
  - `.specify/templates/plan-template.md`
  - `.specify/templates/tasks-template.md`
- O arquivo de constituição do projeto está em `.specify/memory/constitution.md`.

## Como o agente deve ajudar
- Sempre verifique o contexto atual antes de propor mudanças.
- Para mudanças de UI, confirme a rota e o componente existente.
- Para novas funcionalidades, sugira usar o padrão de feature modules e serviços.
- Para ajustes na spec, mantenha o estilo e o formato do `.specify`.

## Observações
- Este projeto não tem backend nem API externa definida.
- O foco atual é front-end Angular leve, com mocks locais em `src/app/shared/mocks`.

