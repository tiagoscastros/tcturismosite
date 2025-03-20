# 📌 Guia para Alterar o Código da TCTurismo

Este guia explica como você pode modificar o código do site da TCTurismo usando GitHub e Visual Studio Code (VS Code). As instruções são simples e detalhadas para quem não tem experiência com programação. 😊

---

## 📌 Como Alterar o Código pelo GitHub

### 1️⃣ Acessando o Repositório

1. Acesse o site do GitHub: [GitHub](https://github.com).
2. Faça login na sua conta.
3. No campo de busca, procure pelo repositório da **TCTurismosite**.
4. Clique no repositório para visualizar os arquivos.

### 2️⃣ Editando um Arquivo Diretamente pelo GitHub

1. Dentro do repositório, navegue até o arquivo que deseja modificar (por exemplo, `index.html` ou `style.css`).
2. Clique no arquivo para abri-lo.
3. No canto superior direito, clique no ícone de lápis (✏️) para editar o arquivo.
4. Faça as alterações necessárias no código.
5. No final da página, escreva um pequeno resumo da alteração no campo **"Commit changes"**.
6. Clique em **"Commit changes"** para salvar as modificações.

---

## 📌 Como Alterar o Código pelo VS Code

### 1️⃣ Instalando o VS Code e o Git

Antes de começar, é necessário instalar algumas ferramentas:

- 🔹 [Visual Studio Code (VS Code)](https://code.visualstudio.com/) - Baixe e instale.
- 🔹 [Git](https://git-scm.com/) - Baixe e instale.

### 2️⃣ Baixando o Código no Computador

1. Abra o **GitHub** e copie o link do repositório (clique no botão verde **"Code"** e copie o link HTTPS).
2. Abra o **VS Code** e abra o terminal (`Ctrl + J`).
3. No terminal, digite o seguinte comando para clonar o repositório:

   ```sh
   git clone https://github.com/seu-usuario/tcturismo.git
   ```
   _(Substitua `seu-usuario` pelo seu nome de usuário no GitHub.)_

4. Acesse a pasta do projeto:

   ```sh
   cd tcturismo
   ```

### 3️⃣ Editando o Código

1. No **VS Code**, abra a pasta do projeto (`File > Open Folder` e selecione a pasta clonada).
2. Edite os arquivos desejados (`index.html`, `style.css`, etc.).
3. Salve as alterações (`Ctrl + S`).

### 4️⃣ Enviando as Alterações para o GitHub

1. No terminal do **VS Code**, digite os seguintes comandos:

   ```sh
   git add .
   ```

   ```sh
   git commit -m "Descrição da alteração"
   ```

   ```sh
   git push origin main
   ```
   _(Substitua `main` pelo nome da sua branch, se for diferente.)_

✅ **Pronto!** Agora você já sabe como editar e atualizar o código do site da **TCTurismo**. Se tiver dúvidas, sinta-se à vontade para perguntar! 🚀
