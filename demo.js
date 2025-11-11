import { SmartForm } from './smart-form.js';

/* -----------------------------------------------------------------
   1. FUNÇÃO DE SUBMISSÃO (O SEU CÓDIGO DE NEGÓCIO)
----------------------------------------------------------------- */
const handleContactSubmit = async (formData) => {
    // Simula um delay de API de 1.5 segundos
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("--- SUBMISSÃO COMPLETA ---");
    console.log("Dados Recebidos (JÁ Limpos/Tratados):", formData);
    
    // Simulação de sucesso
    return true; 
    
    /* // Exemplo de como lançar um erro para o bloco catch do SmartForm
    // throw new Error("Ocorreu um erro no servidor. Tente novamente mais tarde.");
    */
};

/* -----------------------------------------------------------------
   2. INSTANCIAÇÃO E CONFIGURAÇÃO
----------------------------------------------------------------- */
const formDemo = new SmartForm('contact-form', handleContactSubmit, {
    // Configurações opcionais (mantendo os padrões para validação em tempo real)
    // validateOnBlur: true,
    // showMessages: true, 
});

// Adiciona regras customizadas para o formulário
formDemo
    // Regra para o campo 'name': Garante que o nome seja Capitalizado e tenha Sobrenome
    .addFieldRule('name', {
        cleaner: (value) => value.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '),
        validator: (value) => value.trim().split(/\s+/).length >= 2,
        message: "Por favor, digite seu nome completo (nome e sobrenome)."
    })
    
    // Regra para o campo 'age': Validação customizada além do HTML5
    .addFieldRule('age', {
        validator: (value) => parseInt(value) <= 120, // Ninguém vive mais de 120, né?
        message: "Idade máxima permitida é 120 anos."
    });

console.log("SmartForm Inicializado!");