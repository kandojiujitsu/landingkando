# Equipe Kando Jiu Jitsu - Landing Page

Esta é uma landing page profissional, moderna e responsiva para a Equipe Kando Jiu Jitsu.

## 🚀 Tecnologias Utilizadas

- **React 19**
- **Tailwind CSS 4**
- **Motion (Framer Motion)** para animações
- **Lucide React** para ícones
- **Firebase** (Firestore) para captura de leads

## 🛠️ Configuração do Firebase

Para que o formulário de contato funcione, você precisa configurar um projeto no Firebase:

1. Vá para o [Console do Firebase](https://console.firebase.google.com/).
2. Crie um novo projeto chamado "Kando Jiu Jitsu".
3. No menu lateral, vá em **Firestore Database** e clique em "Criar banco de dados". Comece no **modo de teste** (ou configure as regras de segurança).
4. Vá em **Configurações do Projeto** (ícone de engrenagem) > **Geral**.
5. Em "Seus aplicativos", clique no ícone de web (`</>`) para registrar um novo app.
6. Copie as credenciais do objeto `firebaseConfig`.
7. Crie um arquivo `.env` na raiz do projeto (ou use as variáveis de ambiente da sua plataforma de deploy) e preencha com seus dados:

```env
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```

## 🔒 Regras de Segurança do Firestore

Para permitir que os visitantes enviem o formulário, mas manter os dados protegidos, copie e cole estas regras na aba **Rules** do seu Firestore no Console do Firebase:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permite que qualquer pessoa envie um lead (escrita)
    // Mas impede que qualquer pessoa leia a lista de leads (leitura)
    match /leads/{leadId} {
      allow create: if true;
      allow read, update, delete: if false; 
    }
  }
}
```

## 📦 Como subir no GitHub

1. Crie um novo repositório no GitHub.
2. No seu terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Kando Jiu Jitsu Landing Page"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   git push -u origin main
   ```

## 🌐 Deploy na Vercel

1. Vá para [Vercel](https://vercel.com/).
2. Clique em "Add New" > "Project".
3. Importe o repositório do GitHub que você acabou de criar.
4. Em **Environment Variables**, adicione todas as variáveis do Firebase listadas acima.
5. Clique em **Deploy**.

## 🎨 Personalização

- **Imagens:** As imagens atuais são placeholders do Unsplash. Você pode trocá-las nos componentes correspondentes.
- **Cores:** O tema utiliza o sistema de cores do Tailwind. A cor principal é o Vermelho (`red-600`) e o fundo principal é Branco/Cinza (`zinc`).
- **WhatsApp:** No componente `Hero.tsx`, altere o link do WhatsApp para o número da academia.

---
Desenvolvido com ❤️ para a Equipe Kando Jiu Jitsu.
