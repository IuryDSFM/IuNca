let btn = document.getElementById("calcular");
let d100 = document.getElementsByClassName("d-100");
let d50 = document.getElementsByClassName("d-50");
let d20 = document.getElementsByClassName("d-20");
let d10 = document.getElementsByClassName("d-10");
let d5 = document.getElementsByClassName("d-5");
let d2 = document.getElementsByClassName("d-2");
let d1 = document.getElementsByClassName("d-1");

let inpRecebido = document.getElementById("recebido");
let inpTotal = document.getElementById("total");

let res = document.getElementsByClassName("resultado");


//collection[0].classList.toggle("none");

function verificar() {
    let recebido = parseFloat(inpRecebido.value);
    let total = parseFloat(inpTotal.value);
    let troco = recebido - total;
    let valida = 0;
    let memoria = [];

    let n100, n50, n20, n10, n5, n2, n1;

    let j = 0;
    do {
        j++
        n100 = j;
        j > 3 ? j = troco + 1 : j = j;

    } while (troco >= (j * 100))
    n100--;
    j = 0;

    do {
        j++
        n50 = j;
        j > 3 ? j = troco + 1 : j = j;

    } while (troco >= (j * 50))
    n50--;
    j = 0;

    do {
        j++
        n20 = j;
        j > 3 ? j = troco + 1 : j = j;

    } while (troco >= (j * 20))
    n20--;
    j = 0;

    do {
        j++
        n10 = j;
        j > 3 ? j = troco + 1 : j = j;

    } while (troco >= (j * 10))
    n10--;
    j = 0;

    do {
        j++
        n5 = j;
        j > 3 ? j = troco + 1 : j = j;

    } while (troco >= (j * 5))
    n5--;
    j = 0;

    do {
        j++
        n2 = j;
        j > 3 ? j = troco + 1 : j = j;

    } while (troco >= (j * 2))
    n2--;
    j = 0;

    do {
        j++
        n1 = j;
        j > 3 ? j = troco + 1 : j = j;

    } while (troco >= (j * 1))
    n1--;
    j = 0;

    let i = 0;

    let conf = false;


    for (let qtd100 = n100; qtd100 >= 0; qtd100--) {

        for (let qtd50 = n50; qtd50 >= 0; qtd50--) {

            for (let qtd20 = n20; qtd20 >= 0; qtd20--) {

                for (let qtd10 = n10; qtd10 >= 0; qtd10--) {

                    for (let qtd5 = n5; qtd5 >= 0; qtd5--) {

                        for (let qtd2 = n2; qtd2 >= 0; qtd2--) {

                            for (let qtd1 = n1; qtd1 >= 0; qtd1--) {
                                i++
                                valida = (qtd100 * 100) + (qtd50 * 50) + (qtd20 * 20) + (qtd10 * 10) + (qtd5 * 5) + (qtd2 * 2) + (qtd1 * 1);
                                if (valida == troco) {
                                    let salvar = {
                                        cem: qtd100,
                                        cinquenta: qtd50,
                                        vinte: qtd20,
                                        dez: qtd10,
                                        cinco: qtd5,
                                        dois: qtd2,
                                        um: qtd1
                                    }
                                    memoria.push(salvar);
                                }

                            }
                        }
                    }
                }
            }
        }
    }

    for (i = 0; i < memoria.length; i++) {

        res[0].innerHTML += `
        <div class="my-5 d-flex align-items-center section bg-light border border-1 border-dark-subtle justify-content-center rounded">
            <div class="row justify-content-around w-100 text-light text-center">
                <div class="notas column bg-primary col-sm-1 col-12 mb-1">
                    <div class="fw-semibold">R$100</div>
                    <div>${memoria[i].cem}</div>
                </div>
                <div class="notas column bg-primary col-1 mb-1">
                    <div class="fw-semibold">R$50</div>
                    <div>${memoria[i].cinquenta}</div>
                </div>
                <div class="notas column bg-primary col-1 mb-1">
                    <div class="fw-semibold">R$20</div>
                    <div>${memoria[i].vinte}</div>
                </div>
                <div class="notas column bg-primary col-1 mb-1">
                    <div class="fw-semibold">R$10</div>
                    <div>${memoria[i].dez}</div>
                </div>
                <div class="notas column bg-primary col-1 mb-1">
                    <div class="fw-semibold">R$5</div>
                    <div>${memoria[i].cinco}</div>
                </div>
                <div class="notas column bg-primary col-1 mb-1">
                    <div class="fw-semibold">R$2</div>
                    <div>${memoria[i].dois}</div>
                </div>
                <div class="notas column bg-primary col-1 mb-1">
                    <div class="fw-semibold">R$1</div>
                    <div>${memoria[i].um}</div>
                </div>
            </div>
        </div>
        `;
        /*
        console.log(memoria[i].cem,
            memoria[i].cinquenta,
            memoria[i].vinte,
            memoria[i].dez,
            memoria[i].cinco,
            memoria[i].dois,
            memoria[i].um);
        */
    }

    //console.log(n100, n50, n20, n10, n5, n2);
}

