# 🌐 HD Aquecedores - Website Oficial

> 🥇 **Website comercial de alta conversão. Otimizado para SEO local e vendas de aquecedores a gás, oferecendo agendamento online integrado diretamente ao CRM.**

---

## 📄 Sobre o Projeto

Este repositório contém o código-fonte do website oficial da **HD Aquecedores**, que atua como o principal canal de marketing e captação de clientes. O projeto é focado em alta conversão na região de São Bernardo do Campo (SBC) e utiliza tecnologias leves para garantir velocidade, dinâmica e uma experiência de usuário aprimorada.

## 💡 Recursos de Destaque

* **Agendamento Inteligente:** O modal de agendamento online utiliza o **Supabase** para enviar solicitações de serviço (Leads) diretamente para a sua base de dados, alimentando o seu sistema de gestão (HD System PRO) em tempo real.
* **Foco em Vendas:** Vitrine de aquecedores a gás com carrossel dinâmico (**Swiper.js**) para Rinnai, Bosch, Lorenzetti, etc., facilitando o orçamento via WhatsApp.
* **SEO Local:** Otimizado para termos de busca em **São Bernardo do Campo** e região, com uma seção dedicada a Síndicos (B2B) para fechar pacotes de manutenção coletiva.
* **Experiência de Usuário (UX):** Uso de animações fluidas e recursos como Lightbox e Carrosséis para engajamento e navegação intuitiva.

## 🛠️ Stack Tecnológica (Client-Side)

O site é construído para ser rápido e de fácil manutenção:

| Categoria | Tecnologia | Uso no Projeto |
| :--- | :--- | :--- |
| **Estrutura** | HTML5, CSS3, JavaScript (Puro) | Base leve e performática. |
| **Banco de Dados** | Supabase (Client SDK) | Inserção dos dados de Agendamento Online no banco de dados. |
| **Componentes Visuais** | Swiper.js | Criação de carrosséis responsivos para **Serviços**, **Produtos** e **Marcas**. |
| **UX/Animação** | `Intersection Observer` | Efeito "Fade-in" e "Slide-up" nas seções ao rolar a página para uma navegação fluida. |
| **Detalhe de Imagem** | Lightbox (JS Puro) | Permite dar zoom nas imagens dos aquecedores na vitrine de vendas. |

## 💻 Detalhamento do JavaScript (`script.js`)

O JavaScript nativo é responsável pela dinâmica da página:

1.  **Carrosséis (Swiper.js):** Inicializa três carrosséis independentes, com *breakpoints* configurados para serem responsivos em mobile e desktop. O carrossel de Marcas utiliza `loop: true` e `autoplay` para criar um efeito de rolagem contínua.
2.  **LightBox (Zoom):** Implementa uma função simples que abre um modal com a imagem em tamanho real ao clicar em qualquer produto na seção de vendas.
3.  **Animação de Scroll:** Utiliza a API nativa `IntersectionObserver` para aplicar a animação de entrada (`.animate-on-scroll`) apenas quando a seção se torna visível na tela, melhorando a percepção de performance.
4.  **Integração Supabase:** Trata a coleta de dados do formulário de agendamento e o envio assíncrono para a tabela de Leads.

## ⚙️ Configuração e Implantação

1.  **Clonagem:**
    ```bash
    git clone [https://github.com/casettarafael/website-hd-aquecedores.git](https://github.com/casettarafael/website-hd-aquecedores.git)
    cd website-hd-aquecedores
    ```
2.  **Configuração do Supabase:**
    Você deve inserir suas chaves `supabaseUrl` e `supabaseKey` no código HTML/JavaScript do agendamento para que os leads sejam devidamente registrados na sua tabela `agendamentos`.
3.  **Execução:**
    Como é uma aplicação estática, abra o arquivo `index.html` em qualquer navegador.

---
Desenvolvido por **casettarafael**
