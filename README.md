# 📦 SmartForm.js: Classe Javascript Pura para Gestão Inteligente de Formulários

![Badge de Status - Exemplo: Versão 1.0.0](https://img.shields.io/badge/Status-Estável-brightgreen)
![Badge de Licença - Exemplo](https://img.shields.io/badge/Licença-MIT-blue)

O `SmartForm.js` é uma classe pura em Javascript, **independente de frameworks**, projetada para centralizar e simplificar o gerenciamento de qualquer formulário HTML. Ele separa as preocupações de validação, limpeza e submissão, permitindo que você se concentre na lógica de negócio.

## ✨ Por Que Usar SmartForm?

Cansado de reescrever a mesma lógica de validação e limpeza de dados em todo projeto? Esta solução foca na produtividade e na qualidade do código (DRY - Don't Repeat Yourself), abstraindo as complexidades de UX e garantindo que o seu *backend* receba dados limpos e validados.

### Recursos Principais:

* **Validação Total:** Suporta validações nativas do HTML5 (`required`, `email`, `minlength`, etc.) e permite regras de validação customizadas (`addFieldRule`).
* **Limpeza de Dados (Cleaners):** Funções genéricas e customizáveis que garantem a formatação correta dos dados (ex: `email` em *lower case*, remoção de espaços extras, etc.) antes da submissão.
* **Controle de Submissão:** Gerencia o estado `isSubmitting`, desabilitando o botão de envio e evitando múltiplos cliques durante o processo assíncrono.
* **UX Aprimorada:** Validação opcional em **`blur`** e **`input`**, e foco automático no primeiro campo inválido após a tentativa de envio.
* **Arquitetura Sólida:** Mensagens de erro injetadas dinamicamente via JS.

## 🚀 Como Usar

### 1. Instalação

Inclua o arquivo `SmartForm.js` no seu projeto (ou use-o como um módulo ES6).

```javascript
// Exemplo de importação
import { SmartForm } from './SmartForm.js';
````

### 2\. Exemplo de Implementação

Apenas forneça o ID do seu formulário e a função que deve ser executada quando o formulário for considerado **válido**.

```javascript
// 1. Defina a função que será chamada para enviar os dados (lógica de negócio).
// Esta função só será executada se o formulário passar por todas as validações.
const handleFormSubmit = async (formData) => {
    // formData é um objeto com chave/valor de todos os campos do formulário, 
    // com valores JÁ limpos pela regra de cleaner!
    
    console.log("🚀 Dados prontos e válidos para a API:", formData);
    
    // Simulação de chamada de API
    // await fetch('/seu-endpoint', {
    //     method: 'POST',
    //     body: JSON.stringify(formData)
    // });
    
    // O SmartForm exibirá a mensagem de sucesso e limpará o formulário ao final.
};

// 2. Instancie o SmartForm passando o ID do HTML e a função de envio.
const formularioDeContato = new SmartForm("formulario-contato", handleFormSubmit);

// 3. Adicione regras de validação/limpeza customizadas (Opcional)
formularioDeContato
    // Adiciona uma regra para o campo 'nomeDoUsuario'
    .addFieldRule('nomeDoUsuario', { 
        // Cleaner customizado: garante que o nome vá para o backend em maiúsculas
        cleaner: (value) => value.toUpperCase(),
        // Validator customizado: verifica se o nome tem pelo menos duas palavras
        validator: (value) => value.trim().split(/\s+/).length >= 2,
        message: "Por favor, digite seu nome e sobrenome."
    })
    // Adiciona uma regra para o campo 'termos' (exemplo de checkbox)
    .addFieldRule('termos', {
        validator: (value) => value === 'on',
        message: "Você deve aceitar os termos de uso."
    });
```

## 🛠️ Métodos Chave (API)

| Método | Argumentos | Descrição |
| :--- | :--- | :--- |
| `constructor` | `formId`, `onSubmit`, `options` | Inicializa a classe e configura os *event listeners*. |
| `addFieldRule` | `fieldName`, `{ cleaner, validator, message }` | Adiciona regras de limpeza e/ou validação customizada a um campo. |
| `getFormData` | N/A | Retorna os dados do formulário como um objeto chave/valor (`{ nome: 'Valor', email: 'valor@email.com' }`). |
| `validateForm` | N/A | Executa a validação de todos os campos e retorna `true` ou `false`. |
| `clearForm` | N/A | Limpa o formulário, removendo valores e mensagens de erro. |

## 🤝 Contribuição e Licença

Sinta-se à vontade para abrir **Issues** ou enviar **Pull Requests** para melhorias\!

Este projeto está sob a Licença MIT.

## ❤ Construído por [Cauany Rodrigues](https://www.linkedin.com/in/cauany-rodrigues-78700b193/)
