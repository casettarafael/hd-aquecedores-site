/**
 * c:\Users\tikco\Desktop\hdaquecedores\hd-aquecedores-site\ai-agent.js
 * Lógica do Agente de IA Flutuante - Versão Avançada (Knowledge Base)
 */

document.addEventListener('DOMContentLoaded', function() {
    const aiBtn = document.getElementById('ai-agent-btn');
    const aiModal = document.getElementById('aiModal');
    const closeAi = document.querySelector('.close-ai-modal');
    const sendBtn = document.getElementById('ai-send-btn');
    const userInput = document.getElementById('ai-user-input');
    const chatBody = document.getElementById('ai-chat-body');

    // Abrir Modal
    if(aiBtn) {
        aiBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(aiModal) {
                aiModal.style.display = 'flex';
                setTimeout(() => userInput.focus(), 100);
            }
        });
    }

    // Fechar Modal
    if(closeAi) {
        closeAi.addEventListener('click', () => {
            aiModal.style.display = 'none';
        });
    }

    // Fechar ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target == aiModal) {
            aiModal.style.display = 'none';
        }
    });

    // Lógica de Envio de Mensagem
    function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        userInput.value = '';

        const loadingId = addLoading();
        
        // Simula tempo de processamento variável para parecer mais natural
        setTimeout(() => {
            removeLoading(loadingId);
            const response = getAiResponse(text);
            addMessage(response, 'ai');
        }, 800 + Math.random() * 800);
    }

    if(sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    if(userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.classList.add('message', sender === 'user' ? 'user-msg' : 'ai-msg');
        div.innerHTML = `<p>${text}</p>`;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function addLoading() {
        const id = 'loading-' + Date.now();
        const div = document.createElement('div');
        div.id = id;
        div.classList.add('message', 'ai-msg');
        div.innerHTML = `<p><i class="fas fa-ellipsis-h"></i></p>`;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
        return id;
    }

    function removeLoading(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }

    // ============================================================
    // CÉREBRO DA IA (BASE DE CONHECIMENTO)
    // ============================================================
    
    // Normaliza texto (remove acentos e caixa baixa)
    function normalize(str) {
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const knowledgeBase = [
        // Saudações
        {
            keywords: ['ola', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'eai', 'opa', 'tudo bem'],
            response: "Olá! Sou o especialista virtual da HD Aquecedores. 🔧<br>Sei tudo sobre dimensionamento, marcas, erros e manutenção.<br><br>Exemplos do que pode perguntar:<br>• 'Qual aquecedor para 2 chuveiros?'<br>• 'O que é erro E1?'<br>• 'Rinnai é bom?'<br>• 'Cheiro de gás'"
        },
        // Dimensionamento (Litragem)
        {
            keywords: ['1 ducha', 'uma ducha', '1 banheiro', 'um banheiro', 'kitnet', 'studio', 'apartamento pequeno'],
            response: "Para <strong>1 ducha</strong> e uma torneira, aquecedores de <strong>12 a 15 Litros</strong> são ideais e econômicos.<br>Recomendamos:<br>✅ Rinnai 15L (Digital)<br>✅ Lorenzetti 1600D (15L)<br>✅ Bosch 15L"
        },
        {
            keywords: ['2 ducha', 'duas ducha', '2 banheiro', 'dois banheiro'],
            response: "Para <strong>2 duchas simultâneas</strong>, o ideal é um aquecedor entre <strong>20 e 26 Litros</strong>.<br>Isso garante banho quente mesmo se alguém abrir a torneira da cozinha.<br>Modelos:<br>✅ Rinnai E-21 (21L)<br>✅ Rheem 26L<br>✅ Komeco 21L"
        },
        {
            keywords: ['3 ducha', 'tres ducha', '3 banheiro', 'tres banheiro'],
            response: "Para <strong>3 duchas</strong> ao mesmo tempo, você precisa de alta capacidade: <strong>30 a 36 Litros</strong>.<br>Indicamos:<br>✅ Rinnai E-33<br>✅ Rheem 32L ou 36L<br>⚠️ Verifique se a tubulação de gás do imóvel é de 3/4 polegadas."
        },
        {
            keywords: ['4 ducha', 'quatro ducha', 'banheira', 'hidro', 'jacuzzi'],
            response: "Para <strong>4 duchas ou encher banheira rápido</strong>, use modelos de <strong>35 Litros ou mais</strong>.<br>O Rinnai E-35 ou Rheem 36L são excelentes. Para demandas maiores, podemos instalar sistema em cascata."
        },
        // Tipos de Gás
        {
            keywords: ['gn', 'glp', 'gas natural', 'encanado', 'comgas', 'botijao', 'cilindro', 'tipo de gas'],
            response: "Existem dois tipos de gás e os aparelhos <strong>NÃO são bivolt de gás</strong>:<br>🔹 <strong>GN (Gás Natural):</strong> Encanado da rua (Comgás).<br>🔹 <strong>GLP:</strong> Gás de botijão ou cilindro de condomínio.<br><br>Verifique qual é o seu antes de comprar! Se precisar trocar, fazemos a conversão."
        },
        // Marcas Específicas
        {
            keywords: ['rinnai'],
            response: "A <strong>Rinnai</strong> é líder de mercado com tecnologia japonesa. Seus aparelhos digitais têm 3 anos de garantia e são extremamente duráveis. Somos assistência autorizada."
        },
        {
            keywords: ['lorenzetti'],
            response: "A <strong>Lorenzetti</strong> tem ótimo custo-benefício. A linha LZ (digital) é muito vendida e tem peças de reposição acessíveis. Excelente para apartamentos."
        },
        {
            keywords: ['rheem'],
            response: "A <strong>Rheem</strong> (Paloma Group) é conhecida pela robustez. Seus aparelhos 'Prestige' e 'Performance' aguentam uso intenso. Tecnologia japonesa/chilena."
        },
        {
            keywords: ['bosch'],
            response: "A <strong>Bosch</strong> é sinônimo de tradição. Os modelos mecânicos (GWH) são muito resistentes, e a linha digital Therm é compacta e eficiente."
        },
        {
            keywords: ['komeco'],
            response: "A <strong>Komeco</strong> oferece design moderno e boa eletrônica. O modelo KO 21D é um campeão de vendas para 2 banheiros."
        },
        // Funcionamento
        {
            keywords: ['pilha', 'bateria', 'tomada', 'energia', 'eletricidade', 'luz'],
            response: "💡 <strong>Mecânicos:</strong> Usam pilhas grandes (tipo D) para a faísca. Funcionam sem luz elétrica.<br>🔌 <strong>Digitais:</strong> Ligam na tomada (bivolt ou 110/220v) para o painel e ventoinha. Se faltar luz, não funcionam (mas são mais seguros e eficientes)."
        },
        // Erros Comuns
        {
            keywords: ['erro', 'codigo', 'e1', 'e10', 'e11', '11', '10', 'e12'],
            response: "Erro <strong>E1, 10, 11 ou 12</strong> geralmente é <strong>falta de gás</strong> ou falha na ignição.<br>1. Verifique se o registro de gás está aberto.<br>2. Se for GN, veja se a conta está paga.<br>3. Se persistir, pode ser sujeira no sensor de chama."
        },
        {
            keywords: ['e90', 'e99', 'c2', '61', 'exaustao', 'ventoinha'],
            response: "Erro <strong>E90, C2 ou 61</strong> indica problema na <strong>exaustão</strong> ou fluxo de ar.<br>Pode ser chaminé entupida, ventoinha suja ou vento forte voltando pelo duto. Requer visita técnica."
        },
        // Manutenção e Segurança
        {
            keywords: ['manutencao', 'limpeza', 'revisao', 'preventiva', 'tempo'],
            response: "A manutenção preventiva deve ser feita <strong>anualmente</strong> (norma NBR 13103).<br>Limpamos queimadores, ventoinha e verificamos vazamentos. Isso aumenta a vida útil e economiza gás."
        },
        {
            keywords: ['cheiro', 'vazamento', 'perigo'],
            response: "🚨 <strong>URGENTE:</strong> Se sentir cheiro de gás:<br>1. Feche o registro de gás.<br>2. Abra todas as janelas.<br>3. Não acenda luzes ou use o celular no local.<br>4. Saia e chame ajuda técnica."
        },
        {
            keywords: ['consumo', 'gasta muito', 'economico', 'conta'],
            response: "Aquecedores a gás são mais econômicos que chuveiros elétricos em volume de água quente. Os modelos digitais são mais eficientes (Classificação A do INMETRO) pois modulam a chama conforme a necessidade."
        },
        // Comercial
        {
            keywords: ['preco', 'valor', 'custa', 'orcamento', 'comprar', 'pagamento'],
            response: "Os preços variam conforme o modelo e instalação. Temos condições especiais e parcelamento.<br><br>Posso pedir para um consultor te enviar o catálogo no WhatsApp?"
        },
        {
            keywords: ['agendar', 'visita', 'tecnico', 'marcar'],
            response: "Para agendar uma visita técnica (sem custo de deslocamento em muitas regiões), clique no botão abaixo ou use nosso formulário de agendamento no topo do site."
        }
    ];

    function getAiResponse(input) {
        const text = normalize(input);
        
        // Verifica palavras-chave
        for (const entry of knowledgeBase) {
            // Se encontrar alguma das palavras-chave da categoria
            if (entry.keywords.some(key => text.includes(key))) {
                return entry.response;
            }
        }

        // Resposta padrão inteligente com botão
        return `Entendi que você tem uma dúvida, mas preciso de mais detalhes. 🤔<br><br>
        Tente perguntar sobre:<br>
        🔹 <strong>Litragem</strong> (ex: "para 2 duchas")<br>
        🔹 <strong>Marcas</strong> (ex: "Rinnai é boa?")<br>
        🔹 <strong>Problemas</strong> (ex: "erro E1", "cheiro de gás")<br><br>
        Ou fale com um humano agora:
        <br><a href='https://wa.me/5511986826712' target='_blank' style='display:inline-block; margin-top:10px; padding:10px 20px; background:#25D366; color:white; text-decoration:none; border-radius:20px; font-weight:bold;'><i class='fab fa-whatsapp'></i> WhatsApp</a>`;
    }
});
