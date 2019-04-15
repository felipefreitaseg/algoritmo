let nome = prompt ("Informe seu nome:");
let idade = prompt ("Informe sua idade:");
let disponivel = 0;
if (idade >= 25 && idade <= 55){
    let salario = prompt ("Informe seu salario:");

    if (idade >= 1500){
        let tempo = prompt ("A quanto tempo está trabalhando ? (numero de meses)");

        if (tempo >= 8) {
            disponivel = salario*5
            let desejo = prompt ("Qual o valor de emprestimo desejado ?");
            if (desejo <= disponivel){
            alert (nome + " Seu emprestimo foi aprovado !");
            }
            else{
            alert (nome + ", Infelizmente seu emprestimo não foi aprovado, pois o valor desejado extrapola o valor disponivel para você.")
            }
        }
        else{
            alert (nome + ", você não atende ao tempo minimo de trabalho.")
        }
    }
    
}
else{
    alert ("Idade invalida para emprestimo.");
}