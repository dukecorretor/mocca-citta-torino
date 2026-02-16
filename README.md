# Torino Mooca Città - Website Oficial

Website do lançamento imobiliário **Torino Mooca Città** - Empreendimento EZTEC na região da Mooca, São Paulo.

## 📋 Informações do Projeto

- **Nome:** Torino Mooca Città
- **URL:** https://torinomoocacitta.ezteccorretor.com.br/
- **Plataforma:** Netlify
- **Tipo:** Single Page Application (SPA)
- **Framework:** HTML5, CSS3, JavaScript Vanilla

## 🚀 Como Deploy no Netlify

### Opção 1: Via Dashboard do Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Autorize o acesso ao GitHub/GitLab
4. Selecione o repositório `mocca-citta-torino`
5. Configurações de build:
   - **Build command:** Deixe em branco ou coloque `echo 'No build needed'`
   - **Publish directory:** `/` (raiz do repositório)
6. Clique em "Deploy site"

### Opção 2: Via CLI (Command Line)

```bash
# 1. Instalar Netlify CLI (se ainda não tem)
npm install -g netlify-cli

# 2. Fazer login no Netlify
netlify login

# 3. Fazer deploy (a partir da pasta do projeto)
netlify deploy --prod
```

### Opção 3: Usar netlify.toml

O arquivo `netlify.toml` já está configurado. Apenas faça:

```bash
netlify deploy --prod
```

## 🔗 Configuração do Domínio

Após o deploy, configure o domínio personalizado:

1. No Netlify Dashboard, vá para **Domain settings**
2. Clique em "Add domain"
3. Digite: `torinomoocacitta.ezteccorretor.com.br`
4. Siga as instruções para atualizar o DNS

## 📁 Estrutura de Arquivos

```
.
├── index.html               # Página principal
├── styles.css               # Estilos globais
├── script.js                # Scripts e interações
├── manifest.json            # PWA Manifest
├── sitemap.xml              # Sitemap para SEO
├── robots.txt               # Configuração de bots
├── netlify.toml             # Configuração Netlify
├── _redirects               # Regras de redirecionamento
├── .htaccess                # Configuração Apache
└── [imagens]                # Pasta com imagens do projeto
    ├── banner-mooca-citta-torino-lg-1.jpg
    ├── img-mooca-citta-torino-1.jpg
    ├── img-mooca-citta-firenze.jpg
    ├── logo-mooca-citta-*.png
    ├── icon-*.png
    └── moocacitta-*.jpg
```

## 🎨 Componentes Principais

### 1. **Hero Carousel**
- Carrossel de slides automático (5s cada)
- Navegação por dots
- Conteúdo responsivo

### 2. **Seções**
- Projeto
- Diferenciais
- Apartamentos (com abas)
- Plantas
- Lazer

### 3. **Ficha Técnica (Accordion)**
- Informações Gerais
- Localização
- Características Físicas
- Áreas Disponíveis
- Expansível/Colapsável

### 4. **Formulário de Cadastro**
- Integração com WhatsApp
- Download de PDF do Book
- Validação de dados
- Máscara de telefone

### 5. **Botões de Contato**
- Bolha flutuante (lado direito)
- Botão fixo WhatsApp
- Links para WhatsApp com mensagens pré-preenchidas

## 🔍 SEO e Otimizações

### Meta Tags
- Open Graph (compartilhamento social)
- Twitter Card
- Descrição e keywords
- Canonical URL

### Sitemaps
- `sitemap.xml` - Indexação do Google
- `robots.txt` - Controle de bots

### Performance
- Compressão GZIP (via netlify.toml)
- Cache control para assets
- Lazy loading de imagens (recomendado adicionar)

### PWA (Progressive Web App)
- `manifest.json` para instalação mobile
- Ícones para homescreen
- Modo standalone

## 📱 Responsividade

O site é totalmente responsivo para:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (até 480px)

## 🔐 Segurança

Implementado:
- X-Frame-Options (clickjacking)
- X-Content-Type-Options (MIME sniffing)
- Referrer-Policy
- Cache control adequado

## 📊 Google Analytics

Configure no arquivo `index.html`:
- Altere `G-XXXXXXXXXX` pelo seu ID do Google Analytics
- ID: `G-[SEU_ID_AQUI]`

## 🔗 Links Importantes

- **WhatsApp:** (11) 95460-6125
- **Email:** contatoequipecorretores@gmail.com
- **Localização:** Rua Barão de Monte Santo, 1.040 - Mooca - SP

## 📝 Como Adicionar Conteúdo

### Adicionar Imagens
1. Coloque a imagem na pasta raiz
2. Adicione a referência no HTML: `<img src="nome-imagem.jpg" alt="Descrição">`

### Alterar Informações
Edite direto no `index.html`:
- Meta tags
- Textos
- Links
- Contatos

### Download do Book
1. Coloque seu PDF na pasta
2. Altere a URL na função `downloadBook()` no `script.js`

## 🚨 Troubleshooting

### Site não carrega corretamente
- Limpe o cache do browser (Ctrl+Shift+Del)
- Verifique o console (F12)

### WhatsApp não abre
- Widget pode estar bloqueado em desktop
- Teste em dispositivo mobile

### Imagens não aparecem
- Verifique o caminho da imagem
- Use caminhos relativos: `./imagem.jpg`

## 📞 Suporte

Para dúvidas ou problemas, contate:
- **Email:** contatoequipecorretores@gmail.com
- **WhatsApp:** (11) 95460-6125

---

**Última atualização:** 16/02/2026