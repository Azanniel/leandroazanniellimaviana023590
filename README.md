# PetManager - Sistema de Gestão de Pets e Tutores

> Sistema moderno para gestão e controle unificado de Pets e Tutores.

## 📋 Sobre o Projeto

O **PetManager** é uma Single Page Application (SPA) desenvolvida para simplificar a administração de registros veterinários e de posse responsável. O sistema atua como uma interface centralizada para o cadastro, monitoramento e vinculação entre animais domésticos e seus proprietários.

O foco principal da aplicação é oferecer uma experiência de usuário (UX) fluida e responsiva, abstraindo a complexidade da gestão de dados através de uma interface limpa e intuitiva.

## 🎯 Objetivo

Projeto prático desenvolvido como parte do Processo Seletivo Simplificado N° 001/2026/SEPLAG - Governo do Estado de Mato Grosso.

**👤 Dados do Candidato**

| Campo | Informação |
| :--- | :--- |
| **Nome** | Leandro Azanniel Lima Viana |
| **Cargo** | Analista de Tecnologia da Informação - Engenheiro da Computação |
| **Perfil** | Frontend (Anexo II-B) |
| **Inscrição** | 16478 |

## 🛠️ Stack Tecnológica

A aplicação utiliza uma stack moderna focada tipagem estrita:

* **Core:** [React 19](https://react.dev/) (Hooks-based architecture).
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode).
* **Build Tool:** [Vite](https://vitejs.dev/).
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) (com `@theme` e variáveis CSS nativas).
* **Componentes UI:** Headless UI via `@base-ui/react` estilizados com `tailwind-variants` e `tailwind-merge`.
* **Gerenciamento de Estado & API:** Context API + Custom Hooks.
* **HTTP Client:** [Axios](https://axios-http.com/).
* **Ambiente:** Docker & Docker Compose.
* **Ícones:** Lucide React.

## ✅ Status do Desenvolvimento

O projeto encontra-se em desenvolvimento ativo. As seguintes funcionalidades estão mapeadas para implementação:

- [ ] Configuração do Ambiente (Vite + Docker).
- [ ] Implementação do Style Guide e Componentes Base.
- [ ] Camada de Serviço HTTP (Axios + Interceptors).
- [ ] Autenticação (Login + Refresh Token).
- [ ] Módulo de Tutores (CRUD + Vínculo de Pets).
- [ ] Módulo de Pets (CRUD + Upload de Fotos).
- [ ] Health Checks (Liveness/Readiness).
- [ ] Testes Unitários.