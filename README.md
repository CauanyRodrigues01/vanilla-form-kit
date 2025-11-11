# 📦 Vanilla-Form-Kit: Solução Completa e Modular para Formulários (JS Puro)

![Badge de Status - Exemplo: Versão 1.0.0](https://img.shields.io/badge/Status-Estável-brightgreen)
![Badge de Licença - Exemplo](https://img.shields.io/badge/Licença-MIT-blue)

**[Soluções sólidas, código com propósito.]**

O **Vanilla-Form-Kit** é uma solução *frontend* completa e modular que oferece a base para construir formulários robustos e consistentes. Ele combina a **Classe JS `SmartForm`** para toda a lógica (*validação e limpeza*) com um **Sistema CSS** reutilizável para a apresentação (*UI/UX*).

## ✨ Por Que Usar o Vanilla-Form-Kit?

Cansado de reescrever lógica de validação **e** estilização de formulários? Este Kit oferece produtividade e qualidade (DRY), entregando um formulário pronto, validado e limpo.

### A. Lógica Sólida com `SmartForm.js`

* **Validação Total:** Suporta validações nativas do HTML5 e permite regras customizadas (`addFieldRule`).
* **Limpeza de Dados (Cleaners):** Funções genéricas e customizáveis que garantem que o *backend* receba dados formatados e limpos.
* **Controle de Submissão:** Gerencia o estado `isSubmitting` e evita múltiplos envios de forma inteligente.
* **UX Aprimorada:** Validação opcional em **`blur`** e **`input`**, e foco automático no erro.

### B. Estilos Reutilizáveis e Modularidade (UI/UX)

O módulo CSS é estruturado para consistência e facilidade de manutenção:

| Módulo CSS | Propósito Primário (O Que Faz) | Dependência Essencial | Reutilização em Outros Projetos? |
| :--- | :--- | :--- | :--- |
| **`variables.css`** | **Alicerce da Identidade Visual.** Define constantes como cores, espaçamentos (`var(--space-sm)`) e tipografia. É o ponto central para customização do projeto. | N/A (É o definidor) | **Universal.** Pode ser o ponto de partida de estilo para **qualquer projeto** seu. |
| **`reset.css`** | **Consistência Cross-Browser.** Neutraliza os estilos padrão dos navegadores, eliminando diferenças indesejadas e garantindo um ponto de partida limpo para o *layout* a partir das definições em (`variables.css`). | **`variables.css`** | **Universal.** Ideal para ser usado como base de estilo para **qualquer projeto**. |
| **`form-base.css`** | **Componentização da UI.** Estiliza a estrutura do formulário (containers, *field groups*, inputs, etc.) e implementa o feedback visual de erro (`.is-invalid`, `.error-message`) gerado pela classe `SmartForm.js`. | **`variables.css`** | **Componente Específico.** Reutilizável em projetos que adotem a mesma **estrutura HTML** de formulário e importem suas variáveis. |

**Resultado:** Um formulário visualmente profissional e funcional, pronto para o uso.

## 🚀 Como Usar

### 1. Instalação

Copie todos os arquivos .js e .css para o seu projeto. Inclua o link de estilo e os scripts no seu HTML da seguinte forma:

```html
<link rel="stylesheet" href="style.css"> 

<script type="module" src="smart-form.js"></script>
<script type="module" src="demo.js"></script>

Para usar a classe SmartForm em qualquer arquivo JavaScript do seu projeto, utilize a sintaxe de importação do módulo ES6:

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

Sinta-se à vontade para abrir **Issues** ou enviar **Pull Requests** para melhorias\! Sugestões de novos cleaners ou validações customizadas são sempre bem-vindas.

Este projeto está sob a Licença MIT.

## ❤ Construído por [Cauany Rodrigues](https://www.linkedin.com/in/cauany-rodrigues-78700b193/)

Se você gostou desta abordagem de código com propósito e soluções sólidas, conecte-se comigo no LinkedIn para acompanhar outros projetos e aprendizados!