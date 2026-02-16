# NETLIFY DEPLOYMENT GUIDE - Torino Mooca Città

## 📋 Pré-Requisitos

1. Conta no GitHub
2. Repositório do projeto (mocca-citta-torino)
3. Conta no Netlify (https://netlify.com)
4. Domínio customizado (opcional)

## 🚀 Passos para Deploy no Netlify

### PASSO 1: Preparar o Repositório

```bash
# Certifique-se de que todos os arquivos estão commitados
git add .
git commit -m "Atualização final antes do deploy"
git push origin main
```

### PASSO 2: Conectar ao Netlify

#### Opção A: Via Dashboard (Recomendado para iniciantes)

1. Acesse https://app.netlify.com
2. Clique em **"New site from Git"**
3. Selecione seu provedor (GitHub, GitLab, ou Bitbucket)
4. Autorize o Netlify
5. Selecione o repositório **mocca-citta-torino**
6. Em "Build settings":
   - **Base directory:** (deixe em branco)
   - **Build command:** (deixe em branco ou coloque: `echo 'Static site'`)
   - **Publish directory:** `.` ou deixe em branco
7. Clique em **"Deploy site"**

#### Opção B: Via Netlify CLI (Recomendado para devs)

```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. De dentro da pasta do projeto
cd /workspaces/mocca-citta-torino

# 3. Login no Netlify
netlify login

# 4. Inicializar o site
netlify init

# 5. Deploy em produção
netlify deploy --prod
```

### PASSO 3: Configurar Domínio

#### Opção A: Subdomínio Netlify (Automático)

O Netlify fornece URL automática como:
- `https://torinomoocacitta.netlify.app`

Você pode customizar o nome:
1. Dashboard Netlify → Site settings → Site details
2. Mude o "Site name" para "torinomoocacitta"

#### Opção B: Domínio Customizado

Seu domínio será: `https://torinomoocacitta.ezteccorretor.com.br/`

**Passo a passo:**

1. No Netlify Dashboard:
   - Vá para **Site settings**
   - Clique em **Domain management**
   - Clique em **Add domain**
   - Digite: `torinomoocacitta.ezteccorretor.com.br`

2. Atualize os DNS (na sua hospedagem/registrador):
   - Você precisará de um **CNAME** ou **A record**
   - Netlify fornecerá os detalhes exatos
   - Configure apontando para: `torinomoocacitta.netlify.app`

3. Ative HTTPS automático:
   - Netlify oferece SSL gratuito via Let's Encrypt
   - Ative em **Domain management** → **HTTPS**

## 🔧 Configurações Recomendadas no Netlify

### Environment Variables (se necessário)

1. Site settings → Build & deploy → Environment
2. Adicione variáveis como:
   - `ANALYTICS_ID` = seu Google Analytics ID
   - `WHATSAPP_NUMBER` = número do WhatsApp

### Build Hooks (para atualizações automáticas)

1. Site settings → Build & deploy → Build hooks
2. Crie um novo hook com o nome "Deploy"
3. Use a URL fornecida em seus sistemas de CI/CD

### Deploy Previews

O Netlify cria automaticamente:
- ✅ Deploy preview para cada Pull Request
- ✅ Branch previews para outros branches
- ✅ Deploy automático para main

## 📱 Testando o Site

Após o deploy, teste:

- [ ] Homepage carrega corretamente
- [ ] Carrossel funciona (navegação manual + auto)
- [ ] Accordion da ficha técnica abre/fecha
- [ ] Formulário funciona (integração WhatsApp)
- [ ] Botão de download do PDF
- [ ] Links de contato/WhatsApp
- [ ] Responsividade (desktop, tablet, mobile)
- [ ] Velocidade de página (Lighthouse)

### Teste de Performance

1. Acesse: https://pagespeed.web.dev
2. Digite sua URL do Netlify
3. Verifique scores

### Teste de SEO

1. Acesse: https://www.seobility.net
2. Digite sua URL
3. Verifique se sitemap.xml e robots.txt estão sendo lidos

## 🔒 Certificado SSL/HTTPS

✅ Netlify fornece **SSL gratuito** automaticamente

O certificado é renovado automaticamente. Nenhuma ação necessária!

Para verificar:
1. Acesse https://sslchecker.globalsign.com
2. Digite seu domínio
3. Confirme se está "Valid"

## 📊 Monitorar Performance

### Analytics no Netlify

1. Dashboard → Analytics
2. Veja:
   - Visitantes
   - Requisições
   - Bandwidthusage
   - Builds

### Google Search Console

1. Acesse: https://search.google.com/search-console
2. Adicione propriedade: `https://torinomoocacitta.ezteccorretor.com.br`
3. Verifique propriedade (via DNS ou HTML)
4. Envie sitemap.xml

### Google Analytics

1. Configure em index.html
2. Substitua `G-XXXXXXXXXX` por seu ID real
3. Aguarde 24h para dados aparecerem

## 🔄 Como Fazer Atualizações

### Atualizar O Site

1. **Editar arquivos localmente:**
   ```bash
   # Por exemplo, editar index.html
   nano index.html
   ```

2. **Fazer commit:**
   ```bash
   git add .
   git commit -m "Descrição da mudança"
   git push origin main
   ```

3. **Deploy automático:**
   - Netlify detecta o push automaticamente
   - Inicia o build
   - El site é atualizado em segundos!

### Deploy Manual Rápido

```bash
# Se urgente, use:
netlify deploy --prod
```

## 🚨 Troubleshooting

### Site carrega branco/erro

- Verifique no Netlify Dashboard → Deploys → último deploy
- Veja os logs de build
- Procure por red errors

Para debug local:
```bash
# Testas o site localmente antes de fazer push
python -m http.server 8000
# Acesse http://localhost:8000
```

### Domínio aponta para site errado

- Aguarde 24-48h para propagação DNS
- Limpe o cache do browser (Ctrl+Shift+Delete)
- Verifique DNS com: `nslookup torinomoocacitta.ezteccorretor.com.br`

### WhatsApp/Links não funcionam

- Verifique console (F12) para erros JavaScript
- Teste em navegador diferente (incógnito)
- Verifique se números de telefone estão formatados corretamente

### Imagens não carregam

- Verifique paths das imagens (relativos ou absolutos)
- Certifique-se que as imagens foram commitadas no Git
- Verifique extensões de arquivo (.jpg, .png, .gif)

## 📞 Suporte Netlify

- **Docs:** https://docs.netlify.com
- **Community:** https://community.netlify.com
- **Support:** https://app.netlify.com/support

## ✅ Checklist Final de Deploy

- [ ] Repositório criado e sincronizado
- [ ] Todos os arquivos commitados (git push)
- [ ] Conta Netlify criada
- [ ] Site conectado ao Netlify
- [ ] Build bem-sucedido (sem erros)
- [ ] Domínio configurado (CNAME/A record)
- [ ] SSL/HTTPS ativado
- [ ] Google Analytics configurado
- [ ] Search Console conectado
- [ ] Sitemap.xml enviado
- [ ] Testes de performance realizados
- [ ] WhatsApp/contato testado
- [ ] Mobile testado
- [ ] SEO tools testadas

---

**Você está pronto para o deploy! 🚀**

Para dúvidas: contatoequipecorretores@gmail.com