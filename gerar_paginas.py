# -*- coding: utf-8 -*-
import os
import sys

# Template HTML sem indentacao para evitar erros de Python
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1HXL6L6YV3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1HXL6L6YV3');
    </script>
    <title>Conserto de Aquecedores em {NOME_BAIRRO} | HD AQUECEDORES</title>
    <meta name="description" content="Mora em {NOME_BAIRRO}? Assistência técnica de aquecedores a gás com chegada rápida. Manutenção Rinnai, Bosch e Lorenzetti na região de {REF_LOCAL}. Visita Grátis.">
    <link rel="canonical" href="https://hdaquecedores.com.br/{NOME_ARQUIVO}" />
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="icon" href="imagens/00001.png" type="image/png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
    <style>
        :root { --primary-blue: #003366; --primary-orange: #FF7733; --light-gray: #f4f4f4; }
        .breadcrumbs { background: var(--light-gray); padding: 10px 0; font-size: 0.9rem; color: #555; }
        .breadcrumbs a { color: var(--primary-blue); text-decoration: none; }
        .section-title { text-align: center; color: var(--primary-blue); font-size: 2rem; margin-bottom: 10px; text-transform: uppercase; font-weight: 800; }
        .highlight-orange { color: var(--primary-orange); }
        .trust-bar { background: var(--primary-blue); color: white; padding: 15px 0; border-bottom: 3px solid var(--primary-orange); }
        .trust-grid { display: flex; justify-content: space-around; flex-wrap: wrap; text-align: center; }
        .trust-item { flex: 1; min-width: 200px; margin: 5px 0; font-weight: 500; }
        .trust-item i { color: var(--primary-orange); margin-right: 8px; }
        .local-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 40px; }
        .local-card { background: #f9f9f9; padding: 30px; border-radius: 12px; border-left: 5px solid var(--primary-blue); }
        .local-card h4 { color: var(--primary-blue); margin-bottom: 15px; font-size: 1.3rem; font-weight: bold; }
        @media (max-width: 768px) { .local-grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <header class="main-header">
        <div class="container">
            <h1 class="logo">
                <a href="index.html" class="logo-link">
                    <img src="imagens/00001.png" alt="HD Aquecedores {NOME_BAIRRO}" class="header-logo-img">
                </a>
            </h1>
            <nav class="main-nav">
                <ul>
                    <li><a href="index.html#servicos">Serviços</a></li>
                    <li><a href="area-de-atendimento.html">Locais</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="breadcrumbs">
        <div class="container">
            <a href="index.html">Home</a> <span>></span> 
            <a href="area-de-atendimento.html">Locais</a> <span>></span> 
            <strong>{NOME_BAIRRO}</strong>
        </div>
    </div>
    <section class="hero-banner">
        <div class="container">
            <h2>Assistência Técnica em {NOME_BAIRRO}</h2>
            <p class="hero-highlight-text animate-on-scroll" style="animation-delay: 0.6s;">
                Atendimento especializado em <strong>{NOME_BAIRRO}</strong> e proximidades.<br>
                Técnicos prontos para atender {TIPO_IMOVEL}. <strong>Visita Grátis na Região!</strong>
            </p>
            <div class="hero-buttons-group">
                <a href="https://wa.me/5511986826712?text=Ola! Estou em {NOME_BAIRRO} e preciso de um tecnico." target="_blank" class="btn-primary-whatsapp animate-on-scroll">
                    <i class="fab fa-whatsapp"></i> Chamar Técnico ({NOME_BAIRRO})
                </a>
                <a href="tel:+5511986826712" class="btn-primary-call animate-on-scroll">Ligue Agora: (11) 98682-6712</a>
            </div>
        </div>
    </section>
    <div class="trust-bar animate-on-scroll">
        <div class="container">
            <div class="trust-grid">
                <div class="trust-item"><i class="fas fa-map-marker-alt"></i> Chegada Rápida: <strong>{NOME_BAIRRO}</strong></div>
                <div class="trust-item"><i class="fas fa-clock"></i> Atendimento 24h: <strong>Emergências</strong></div>
                <div class="trust-item"><i class="fas fa-star"></i> Avaliação: <strong>4.9/5.0 Estrelas</strong></div>
                <div class="trust-item"><i class="fas fa-shield-alt"></i> Peças: <strong>Originais</strong></div>
            </div>
        </div>
    </div>
    <section id="local" style="padding: 60px 0; background: #fff;">
        <div class="container">
            <h3 class="section-title">Especialistas na Região de <span class="highlight-orange">{NOME_BAIRRO}</span></h3>
            <p style="text-align: center; color: #666; max-width: 800px; margin: 0 auto;">
                Conhecemos as particularidades da região. Atendemos próximo a {REF_LOCAL} com agilidade.
            </p>
            <div class="local-grid">
                <div class="local-card">
                    <h4><i class="fas fa-building"></i> Pressão de Água</h4>
                    <p>Ajustamos aquecedores Rinnai e Rheem para a pressão hidráulica específica dos prédios e casas de {NOME_BAIRRO}, garantindo banho quente constante.</p>
                </div>
                <div class="local-card">
                    <h4><i class="fas fa-wrench"></i> Manutenção Preventiva</h4>
                    <p>Mantenha seu imóvel seguro e seu aquecedor valorizado com nossa revisão anual NBR 13103, evitando fuligem e monóxido de carbono.</p>
                </div>
                <div class="local-card">
                    <h4><i class="fas fa-gas-pump"></i> Modernização (Retrofit)</h4>
                    <p>Seu imóvel em {NOME_BAIRRO} ainda usa aquecedor antigo? Realizamos a troca por modelos digitais modernos com instalação estética impecável.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="contato" class="contact-section animate-on-scroll" style="padding: 60px 0;">
        <div class="container">
            <h3 class="section-title">Agende sua Visita</h3>
            <div style="text-align: center;">
                <a href="tel:+5511986826712" style="font-size: 1.5rem; color: var(--primary-blue); font-weight: bold; text-decoration: none;">
                    <i class="fas fa-phone-alt animate-pulse"></i> (11) 98682-6712
                </a>
            </div>
        </div>
    </section>
    <footer class="main-footer" style="background: var(--primary-blue); color: white; padding: 30px 0; text-align: center;">
        <div class="container">
            <p>© 2025 HD AQUECEDORES. Referência em {NOME_BAIRRO}.</p>
            <p style="font-size: 0.9rem; margin-top: 15px; opacity: 0.8;">
                <a href="index.html" style="color: white; text-decoration: none;">Home</a> | 
                <a href="area-de-atendimento.html" style="color: white; text-decoration: none;">Outros Bairros</a>
            </p>
        </div>
    </footer>
    <div class="floating-whatsapp">
        <a href="https://wa.me/5511986826712?text=Ola! Estou em {NOME_BAIRRO} e preciso de atendimento." target="_blank">
            <i class="fab fa-whatsapp" style="font-size: 34px; color: white;"></i>
        </a>
    </div>
    <script src="script.js"></script>
</body>
</html>"""

def main():
    print("--- INICIANDO SCRIPT ---")
    
    # Lista de Bairros
    bairros = [
        {"nome": "Moema", "arquivo": "aquecedores-moema.html", "ref": "Parque Ibirapuera", "tipo": "apartamentos de alto padrao"},
        {"nome": "Vila Mariana", "arquivo": "aquecedores-vila-mariana.html", "ref": "Metro Vila Mariana", "tipo": "condominios"},
        {"nome": "Perdizes", "arquivo": "aquecedores-perdizes.html", "ref": "PUC e Allianz Parque", "tipo": "apartamentos"},
        {"nome": "Pinheiros", "arquivo": "aquecedores-pinheiros.html", "ref": "Faria Lima", "tipo": "studios"},
        {"nome": "Tatuape", "arquivo": "aquecedores-tatuape.html", "ref": "Shopping Analia Franco", "tipo": "condominios clube"},
        {"nome": "Santana", "arquivo": "aquecedores-santana.html", "ref": "Braz Leme", "tipo": "residencias"},
        {"nome": "Morumbi", "arquivo": "aquecedores-morumbi.html", "ref": "Estadio do Morumbi", "tipo": "mansoes"},
        {"nome": "Brooklin", "arquivo": "aquecedores-brooklin.html", "ref": "Berrini", "tipo": "flats"},
        {"nome": "Higienopolis", "arquivo": "aquecedores-higienopolis.html", "ref": "Shopping Patio Higienopolis", "tipo": "edificios classicos"},
        {"nome": "Jardins", "arquivo": "aquecedores-jardins.html", "ref": "Oscar Freire", "tipo": "apartamentos de luxo"},
        {"nome": "Pompeia", "arquivo": "aquecedores-pompeia.html", "ref": "Sesc Pompeia", "tipo": "apartamentos modernos"},
        {"nome": "Aclimacao", "arquivo": "aquecedores-aclimacao.html", "ref": "Parque da Aclimacao", "tipo": "apartamentos familiares"},
        {"nome": "Campo Belo", "arquivo": "aquecedores-campo-belo.html", "ref": "Aeroporto de Congonhas", "tipo": "edificios residenciais"},
        {"nome": "Analia Franco", "arquivo": "aquecedores-analia-franco.html", "ref": "Parque Ceret", "tipo": "imoveis de alto luxo"},
        {"nome": "Bela Vista", "arquivo": "aquecedores-bela-vista.html", "ref": "Av. Paulista", "tipo": "apartamentos e studios"},
        {"nome": "Ipiranga", "arquivo": "aquecedores-ipiranga.html", "ref": "Museu do Ipiranga", "tipo": "condominios tradicionais"},
        {"nome": "Saude", "arquivo": "aquecedores-saude.html", "ref": "Metro Saude", "tipo": "apartamentos e casas"},
        {"nome": "Vila Madalena", "arquivo": "aquecedores-vila-madalena.html", "ref": "Beco do Batman", "tipo": "casas e predios baixos"},
        {"nome": "Itaim Bibi", "arquivo": "aquecedores-itaim-bibi.html", "ref": "Av. JK", "tipo": "apartamentos de alto padrao"},
        {"nome": "Vila Nova Conceicao", "arquivo": "aquecedores-vila-nova-conceicao.html", "ref": "Praca Pereira Coutinho", "tipo": "imoveis de luxo"},
        {"nome": "Alto da Lapa", "arquivo": "aquecedores-alto-da-lapa.html", "ref": "Rua Cerro Cora", "tipo": "casas e condominios"},
        {"nome": "Pacaembu", "arquivo": "aquecedores-pacaembu.html", "ref": "Estadio do Pacaembu", "tipo": "casas de alto padrao"},
        {"nome": "Paraiso", "arquivo": "aquecedores-paraiso.html", "ref": "Av. 23 de Maio", "tipo": "apartamentos amplos"},
        {"nome": "Consolacao", "arquivo": "aquecedores-consolacao.html", "ref": "Rua Augusta", "tipo": "apartamentos antigos"},
        {"nome": "Mooca", "arquivo": "aquecedores-mooca.html", "ref": "Av. Paes de Barros", "tipo": "condominios tradicionais"},
        {"nome": "Belem", "arquivo": "aquecedores-belem.html", "ref": "Largo do Belem", "tipo": "apartamentos residenciais"},
        {"nome": "Vila Olimpia", "arquivo": "aquecedores-vila-olimpia.html", "ref": "Shopping Vila Olimpia", "tipo": "flats"},
        {"nome": "Chacara Klabin", "arquivo": "aquecedores-chacara-klabin.html", "ref": "Metro Klabin", "tipo": "condominios familiares"},
        {"nome": "Alto de Pinheiros", "arquivo": "aquecedores-alto-de-pinheiros.html", "ref": "Parque Villa-Lobos", "tipo": "casas e condominios"},
        {"nome": "Jardim Paulista", "arquivo": "aquecedores-jardim-paulista.html", "ref": "Av. Brigadeiro", "tipo": "apartamentos classicos"}
    ]

    # Gerar Paginas Individuais
    print("Gerando paginas de bairros...")
    for bairro in bairros:
        try:
            conteudo = HTML_TEMPLATE.replace("{NOME_BAIRRO}", bairro["nome"])
            conteudo = conteudo.replace("{NOME_ARQUIVO}", bairro["arquivo"])
            conteudo = conteudo.replace("{REF_LOCAL}", bairro["ref"])
            conteudo = conteudo.replace("{TIPO_IMOVEL}", bairro["tipo"])
            
            with open(bairro["arquivo"], "w", encoding="utf-8") as f:
                f.write(conteudo)
            print("OK: " + bairro["arquivo"])
        except Exception as e:
            print("ERRO ao criar " + bairro["arquivo"] + ": " + str(e))

    # Gerar Pagina Central (Hub)
    print("Gerando pagina central area-de-atendimento.html...")
    
    hub_start = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Locais de Atendimento | HD Aquecedores SP</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
    <style>
        .locations-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; padding: 40px 0; }
        .location-link { display: block; background: #fff; padding: 20px; border-radius: 8px; text-decoration: none; color: #003366; border: 1px solid #eee; transition: 0.3s; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .location-link:hover { background: #003366; color: #fff; transform: translateY(-5px); }
        .location-link i { margin-right: 10px; color: #FF7733; }
        .location-link:hover i { color: #fff; }
    </style>
</head>
<body>
    <header class="main-header">
        <div class="container">
            <h1 class="logo"><a href="index.html" style="color:#fff; text-decoration:none;">HD AQUECEDORES</a></h1>
            <nav class="main-nav"><ul><li><a href="index.html">Voltar ao Inicio</a></li></ul></nav>
        </div>
    </header>
    <section style="padding: 60px 0; background: #f4f4f4;">
        <div class="container">
            <h2 style="text-align: center; color: #003366; margin-bottom: 20px;">Regioes de Atendimento em Sao Paulo</h2>
            <p style="text-align: center; margin-bottom: 40px;">Selecione seu bairro para atendimento especializado:</p>
            <div class="locations-grid">
"""
    hub_end = """
            </div>
        </div>
    </section>
    <footer class="main-footer" style="text-align: center; padding: 20px; background: #003366; color: white;">
        <p>2025 HD Aquecedores</p>
    </footer>
</body>
</html>
"""
    
    links = ""
    for bairro in bairros:
        links += '<a href="' + bairro["arquivo"] + '" class="location-link"><i class="fas fa-map-marker-alt"></i> ' + bairro["nome"] + '</a>\n'
    
    try:
        with open("area-de-atendimento.html", "w", encoding="utf-8") as f:
            f.write(hub_start + links + hub_end)
        print("OK: area-de-atendimento.html gerado com sucesso.")
    except Exception as e:
        print("ERRO ao gerar hub: " + str(e))

    print("--- CONCLUIDO ---")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print("ERRO FATAL: " + str(e))
    finally:
        input("Pressione ENTER para sair...")
