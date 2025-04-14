# 🖥️ System Monitor – Node.js

Este é um dos **meus primeiros projetos com Node.js**, criado como exercício de prática para aprender os módulos nativos da linguagem.  
Neste projeto, optei por **não utilizar TypeScript** para focar no básico e dominar os fundamentos do JavaScript puro com Node.

---

## 📚 Sobre o projeto

O objetivo foi construir um **monitor de sistema** simples, que a cada 1 segundo:

- Exibe no terminal os seguintes dados do computador:
  - Nome do sistema operacional
  - Arquitetura do sistema
  - Modelo do processador
  - Tempo de atividade do sistema (uptime formatado)
  - Quantidade de RAM total e RAM livre

- Salva essas mesmas informações em um arquivo `log.txt`, localizado dentro de uma pasta chamada `log`.

---

## 🔧 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)  
- Apenas **módulos nativos**: `os`, `fs`, `path`

---

## 🚀 Como executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone ou baixe este repositório.
3. Execute o projeto com:

```bash
node monitor.js
