<p align="center">
  <img src="./imgs/logo.eqi.png" width="40%" style="align-itens: center"/>
</p>

## <p align="center">EQI Simulador de Investimentos - Fake-API</p>

<p><br></p>
<div align="center">
<p><br></p>
</div>

## ✅ Visão geral

Esse é um desafio proposto pela [EQI Investimentos](https://eqi.com.br/) um dos maiores escritórios de Assessoria de Investimentos com presença em 11 cidades no Brasil e 11 anos de história no Mercado Financeiro.

<p><br></p>

## ✅ Objetivo

O desafio consiste em avaliar a construção do front-end de um Simulador de Investimentos a partir de uma API fake já disponilibilizada. A aplicação deverá permitir ao usuário realizar uma simulação de rendimentos de acordo com o tipo de Indexação e tipo de Rendimento escolhido. O front-end deve ser construído utilizando JavaScript puro ou React e seguindo os wireframes apresentados no [repositório](https://github.com/eqi-investimentos/desafio-frontend).

<p><br></p>

## ✅ Desenvolvimento

Para desenvolver essa aplicação optei utilizar o JavaScript puro pois o objetivo do projeto é entender as minhas habilidades para HTML, CSS e JS. 
Utilizei como ferramenta auxiliar o Bootstrap apanas para que a estilização dos botões da aplicação ficassem idênticas ao modelo apresentado no wireframe. Todo o restante da aplicação fiz com CSS puro também por questões de avaliação.
Para criação do gráfico utilizei a biblioteca [Highcharts](https://www.highcharts.com/), onde encontrei o gráfico mais semelhante ao apresentado no wireframe.
Esse site é completamente responsivo, conforme ilustrato no gif da sessão "Responsividade" desse readme.

<p><br></p>

## ✅ Demonstração do funcionamento 

<br>
<h3 align="center"> Apresentação e visão geral do projeto
  <img alt="Resposta" title="Resposta" src="./imgs/visao_geral.png" />
</h3>
Essa é a visão ao iniciar o projeto. Como uma forma de sumilar o site da empresa criei um header (apenas ilustrativo) baseado no site e um footer com as redes sociais (todos os ícones são clicáveis e serão direcionados para as respectivas redes sociais da EQI Investimentos).

<br>
<h3 align="center"> Tela onde será realizada as interações
  <img alt="Resposta" title="Resposta" src="./imgs/tela_vazio.png" />
</h3>
Assim iniciamos a aplicação com os campos vazios, sem nenhuma interação do usuário.

<br>
<h3 align="center"> Selecionando tipos de de Rendimento e Indexação
  <img alt="Resposta" title="Resposta" src="./imgs/botoes.png" />
</h3>
Só será possível selecionar dois tipos de botões (um para tipo de Rendimento e outro para Tipo de Indexação), caso não atenda os critérios será disparado um "Alert" e ao pressionar "ok" os campos voltarão ao estado inicial para fazer uma nova seleção.

<br>
<h3 align="center"> Campos de Input requeridos
  <img alt="Resposta" title="Resposta" src="./imgs/required.png" />
</h3>
Os campos de input não poderão estar vazios, caso contrário não será possível executar a simulação.
Sendo que os inputs "IPCA ao ano" e "CDI ao ano" já iniciam inseridos na tela a partir da API.

<br>
<h3 align="center"> Campos inválidos
  <img alt="Resposta" title="Resposta" src="./imgs/campos_invalidos.png" />
</h3>
Os campos só poderão ser preenchidos em formato numérico.

<br>
<h3 align="center">Executando a simulação
  <img alt="Resposta" title="Resposta" src="./imgs/sumulacao_completa.png" />
</h3>
Ao executar a simulação as informações serão trazidas da API e exibidas dentro dos cards. Os valores variam de acordo com as opções de indexação e rendimento escolhidos.

<br>
<h3 align="center">Limpar campos
  <img alt="Resposta" title="Resposta" src="./imgs/limpar_campos.png" />
</h3>
Ao clicar no botão "Limpar campos" todos os campos serão zerados e o usuário poderá executar uma nova simulação.

<br>
<h3 align="center"> Campos inválidos
  <img alt="Resposta" title="Resposta" src="./imgs/campos_invalidos.png" />
</h3>
Os campos só poderão ser preenchidos em formato numérico.

<br>
<h3 align="center"> Simulação na prática
  <img alt="Resposta" title="Resposta" src="./imgs/gif_exe.gif" />
</h3>
Esse gif mostra como a sulução funciona na prática.

<br>
<h3 align="center"> Responsividade
  <img alt="Resposta" title="Resposta" src="./imgs/gif_responsividade.gif" />
</h3>
Esse site é totalmente resposivo, como pode ser visto no gif acima.
Toda a responsividade foi feita através do `Media query`.

<br>
## ✅ Como executar esse projeto

Faça o clone/download deste repositório, execute `npm install` e `npx json-server db.json`. A API fica localizada em `http://localhost:3000`.

Requisitos:

* NodeJS
* NPM

<br>

## 🛠 Tecnologias Utilizadas

<div style="display:flex; justify-content:center;">
  <table>
  <div>
    <tr>
      <td ><img aligne="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="50" height="40" style="max-width:100%;"></img>
      </td>
      <td ><img aligne="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="50" height="40" style="max-width:100%;"></img>
      </td>
      <td ><img text-align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JS" width="50" height="40" style="max-width:100%;"></img>
      </td>
       <td ><img text-align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="BOOTSTRAP" width="50" height="40" style="max-width:100%;"></img>
      </td>
    </tr>
  </div>
</table>
</div>

## ✅ Autora

<table>
  <div>
    <tr>
      <td align="center"><a href="https://github.com/AgathaLima"><img style="border-radius: 50%;" src="https://github.com/AgathaLima.png" width="100px;" alt=""/><br /><sub><b>Agatha Lima - Software Developer</b></sub></a><br /><a href="https://github.com/AgathaLima">🧑‍💻</a>
      </td>
    </tr>
  </div>
</table>

