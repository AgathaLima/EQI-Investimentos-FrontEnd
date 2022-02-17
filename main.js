const url_indicadires = "http://localhost:3000/indicadores"
const url_sumulacoes = "http://localhost:3000/simulacoes"
const container = document.querySelector('#section2')




// Pegando dados da API indicadores e exibindo no front 

function ApiDataIndicadores(){
    fetch(url_indicadires)
    .then((response)=>response.json())
    .then((data)=>{

        data.map((item)=> {
            
           const nome = item.nome
           const valor = item.valor  

            if(nome === 'ipca'){
                 document.getElementById('ipca_valor').value = valor
            }if(nome === 'cdi'){
                document.getElementById('cdi_valor').value = valor
            }
        })   
    })
    .catch(error => console.log(error))
}

ApiDataIndicadores()

// Consumindo API silumulações e inserindo dinamicamente no front 

function ApiDataSimulacoes(){
    fetch(url_sumulacoes)
    .then((response)=>response.json())
    .then((data)=>{

        data.map((itens)=> {

        if(itens.tipoRendimento === valorBotoes[0] && itens.tipoIndexacao === valorBotoes[1]){
                const cards = document.createElement('div')
                 cards.id = "divsDados"

                    const dadosCards = `
                    <h4>Resultado da Simulação</h4>
                    <div>
                        <div class='card'>
                            <h5>Valor final Bruto</h5><br>
                            <p>R$${itens.valorFinalBruto}</p>
                        </div>
                        <div class='card'>
                            <h5>Aliquota do IR</h5><br>
                            <p>${itens.aliquotaIR}%</p>
                        </div>
                        <div class='card'>
                            <h5>Valor pago em IR</h5><br>
                            <p>R$${itens.valorPagoIR}</p>
                        </div>
                        <div class='card'>
                            <h5>Valor final Líquido</h5><br>
                            <p style="color: green;">R$${itens.valorFinalLiquido}</p>
                        </div>
                        <div class='card'>
                            <h5>Valor Total Investido</h5><br>
                            <p>R$${itens.valorTotalInvestido}</p>
                        </div>
                        <div class='card'>
                            <h5>Ganho Líquido</h5><br>
                            <p style="color: #04e004;">R$${itens.ganhoLiquido}</p>
                        </div>
                    </div> 
                    <section id="container-grafico">
                    <figure class="highcharts-figure">
                        <div id="container1"></div>
                        <p class="highcharts-description">
                          
                        </p>
                      </figure>
                    </section>
                    `
                    cards.innerHTML = dadosCards
                    container.appendChild(cards) 
                    grafico()
        }
                    
        })   
    })
    .catch(error => console.log(error))

    document.getElementById('simular').style.background = '#EB8E54'
}


//CAPTURAR VALORES DOS BOTOES 

const valorBotoes = []

function selecionarButton(valor){

    valorBotoes.push(valor)

    
    document.getElementById(`${valor}`).style.background = '#EB8E54'
    document.getElementById(`${valor}`).style.color = '#ffffff'

    validarTipos()
   
}

// VALIDAR TIPOS DE BOTÕES

function validarTipos(){
    if(valorBotoes.length > 2  ){
        alert(`Escolha apenas UMA opção de Rendimento UMA opção de Indexação` )
        valorBotoes.pop()
        valorBotoes.pop()
        valorBotoes.pop()
        valorBotoes.pop()
        valorBotoes.pop()
        const botoes  =document.querySelectorAll('button')
        botoes.forEach(botao =>{
            botao.style.background = '#EFEFEF'
            botao.style.color = '#000000'
        })
        
        
    }if(valorBotoes[0] === 'bruto' && valorBotoes[1] === 'liquido' || valorBotoes[1] === 'bruto' && valorBotoes[0] === 'liquido'){
        alert(`Escolha apenas UMA opção de Rendimento UMA opção de Indexação` )
        valorBotoes.pop()
        valorBotoes.pop()
        valorBotoes.pop()
        valorBotoes.pop()
        valorBotoes.pop()
        const botoes  =document.querySelectorAll('button')
        botoes.forEach(botao =>{
            botao.style.background = '#EFEFEF'
            botao.style.color = '#000000'
        })
    }
}

    // VALIDAR CAMPOS DO INPUT

function checarInput(){
    const small = document.createElement('small')
    
    let apInicial = document.querySelector('#aporte-inicial').value
    let apMensal = document.querySelector('#aporte-mensal').value
    let prazo = document.querySelector('#prazo').value
    let rentabilidade = document.querySelector('#rentabilidade').value
    let divApInicial =  document.querySelector('.apInicial')
    let divApMensal =  document.querySelector('.apMensal')
    let divRentabilidade =  document.querySelector('.rentabilidade')
    let divPrazo =  document.querySelector('.prazo')
    
    

        if(isNaN(apInicial) || apInicial === ''){
            
            divApInicial.className = 'erro apInicial'

            small.innerHTML = `Aporte deve ser um número` 
            divApInicial.appendChild(small)
            
        }else if(isNaN(apMensal) || apMensal === ''){
            
            small.innerHTML = `Aporte deve ser um número` 
            divApMensal.appendChild(small)
            divApMensal.className = 'erro apMensal'

        }else if(isNaN(prazo) || prazo === ''){
            let mensagemErro = `Prazo deve ser um número` 

            small.innerHTML = mensagemErro
            divPrazo.appendChild(small)
            divPrazo.className = 'erro prazo'
            

        }else if(isNaN(rentabilidade) || rentabilidade === ''){
            let mensagemErro = `Deve ser um número` 

            divRentabilidade.className = 'erro rentabilidade'

            small.innerHTML = mensagemErro
            divRentabilidade.appendChild(small)
          
            
        }else if(valorBotoes.length === 0 ){
            alert(`Por favor, escolha tipo de Rendimento e Indexação  `)
            
        }else {
            ApiDataSimulacoes()
            document.getElementById('simular').disabled = true
            

        }
    }

//Cancelar comportamento padrão do input

const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
})


// GRÁFICO  


function grafico(){
    Highcharts.chart('container1', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },

        colors: [ '#EB8E54' , '#000000'],
        xAxis: {
            min: 0,
            title: {
                text: 'Tempo (meses)'
            },
            categories: [0, 1, 2, 3, 4,5 ,6 ,7 ,8 ,9, 10, 11, 12, 13, 14, 15, 16, 17]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Valor (R$)'
            }
        },
        tooltip: {

            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },

        plotOptions: {
            column: {
                stacking: 'bar'
            }
        },
        series: [{
            name: 'Com Aporte',
            data: [20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180]
            
        }, {
            name: 'Sem aporte',
            data: [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20]
        }]
    });
   
}
