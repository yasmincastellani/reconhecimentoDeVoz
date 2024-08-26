# Acerte o Número Secreto

Este é um jogo simples em que o usuário deve adivinhar um número secreto gerado aleatoriamente pelo sistema. O jogo utiliza reconhecimento de voz para captar as tentativas do usuário e exibe mensagens indicando se o número secreto é maior ou menor que o número chutado.

## 🛠️ Tecnologias Utilizadas

- **HTML**
- **CSS**
- **JavaScript**
- **SpeechRecognition API** (Reconhecimento de voz)

## 🚀 Funcionalidades

1. **Geração de Número Aleatório**: Um número secreto é gerado aleatoriamente entre dois valores definidos (`menorValor` e `maiorValor`).
2. **Reconhecimento de Voz**: O jogo utiliza a API de Reconhecimento de Voz do navegador para permitir que o usuário fale suas tentativas.
3. **Feedback Visual**: O número chutado pelo usuário é exibido na tela, juntamente com uma indicação se o número secreto é maior ou menor.
4. **Estilo**: O layout foi projetado para ser atraente, utilizando uma combinação de CSS e fontes personalizadas.

## ▶️ Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em um navegador compatível.
3. O jogo começará automaticamente, e o reconhecimento de voz será ativado.

## 📂 Estrutura do Projeto

- `index.html`: Contém a estrutura do jogo e a ligação com os arquivos CSS e JavaScript.
- `style.css`: Responsável pelo estilo da interface do usuário.
- `sortearNumero.js`: Lógica para gerar o número aleatório.
- `reconhecimentoVoz.js`: Implementa o reconhecimento de voz e exibe as tentativas na tela.

## 🎮 Como Jogar

1. Ao iniciar o jogo, o sistema escutará automaticamente sua voz.
2. Fale um número para tentar adivinhar o número secreto.
3. O jogo informará se o número secreto é maior ou menor que sua tentativa.
4. Continue tentando até acertar o número.

## 💻 Requisitos do Sistema

- Navegador com suporte à API de Reconhecimento de Voz (por exemplo, Google Chrome).
- Conexão com a internet para carregar as bibliotecas externas de CSS.

## 📈 Melhorias Futuras

- Adicionar um contador de tentativas.
- **Validação de Entrada**: Verificar se o valor reconhecido pelo sistema é realmente um número e lidar adequadamente com entradas inválidas (como palavras ou frases que não sejam números).
