document.getElementById("button").onclick = function (){

    //Variaveis
    let name = document.getElementById("name").value;
    let salario = Number (document.getElementById("salario").value);
    let desconto_INSS; 
    let porcentagem_INSS;
    let porcentagem_IRPF;
    let salario_pos_INSS;
    let desconto_final_IRPF;
    let salario_final;
    let parcela_IRPF;
    let tabela = document.getElementById("tabela");
    
    //Validação para a entrada de valores a calcular
    if (name!="" && salario!=""){

        //Imposto INSS
        if ( salario <= 1751.81 ){
            porcentagem_INSS = 0.08;
            desconto_INSS = salario * porcentagem_INSS;
        }

        else if ( salario >= 1751.82 && salario <= 2919.72 ){
            porcentagem_INSS = 0.09;
            desconto_INSS = salario * porcentagem_INSS;
        }

        else if ( salario >= 2919.72 && salario <= 5839.45 ){
            porcentagem_INSS = 0.11;
            desconto_INSS = salario * porcentagem_INSS;
        }

        else if ( salario > 5839.45){
            porcentagem_INSS = 0.00;
            desconto_INSS = 621.04;
        }

        
        salario_pos_INSS = salario - desconto_INSS;

        //Imposto IRPF
        if ( salario_pos_INSS <= 1903.98){
            porcentagem_IRPF = 0.00;
            parcela_IRPF = 0.00;
        }

        else if ( salario_pos_INSS >= 1903.99 && salario_pos_INSS <= 2826.65 ){
            porcentagem_IRPF = 0.075;
            parcela_IRPF = 142.80;
        }

        else if ( salario_pos_INSS >= 2826.66 && salario_pos_INSS <= 3751.05 ){
            porcentagem_IRPF = 0.15;
            parcela_IRPF = 354.80;
        }

        else if ( salario_pos_INSS >= 3751.06 && salario_pos_INSS <= 4664.68){
            porcentagem_IRPF = 0.225;
            parcela_IRPF = 636.13;
        }

        else if ( salario_pos_INSS > 4664.68){
            porcentagem_IRPF = 0.275;
            parcela_IRPF = 869.36
        }

        //Dedução
        desconto_final_IRPF = salario_pos_INSS * porcentagem_IRPF - parcela_IRPF;
        salario_final = salario_pos_INSS - desconto_final_IRPF;

        //Arredondamentos
        salario = salario.toFixed(2);
        porcentagem_INSS = porcentagem_INSS.toFixed(2);
        desconto_INSS = desconto_INSS.toFixed(2);
        porcentagem_IRPF = porcentagem_IRPF.toFixed(2);
        desconto_final_IRPF = desconto_final_IRPF.toFixed(2);
        salario_final = salario_final.toFixed(2);

        
        tabela.innerHTML += `
                            <tr class = "limpar">
                            <th>${name}</th>
                            <th>${salario}</th>
                            <th>${porcentagem_INSS}</th>
                            <th>${desconto_INSS}</th>
                            <th>${porcentagem_IRPF}</th>
                            <th>${desconto_final_IRPF}</th>
                            <th>${salario_final}</th>
                            </tr>
                            `

        //Limpeza dos campos(input) após o uso.                 
        document.getElementById("name").value = null
        document.getElementById("salario").value = null
    }

    //Alerta caso os campos não sejam preenchidos corretamente 
    else{
        alert ("Preencha os Campos para Calcular");
    }
    
}
    //Função para a limpeza da tabela
    document.getElementById("limpar").onclick = function(){
        location.reload();        
    }
