const btnSomarJs = document.getElementById("somar__js"); //JS
const btnSomarJq = $("#somar__jq"); //JQ

//Código Javascript
btnSomarJs.addEventListener('click', () => {
    const valor1 = document.getElementById("v1").value;
    const valor2 = document.getElementById("v2").value;
    let somar = parseInt(valor1) + parseInt(valor2);
    console.log(somar);
    const resp = document.getElementById("resp");
    resp.value = somar;
});

//Código JQuery
btnSomarJq.click(() => {
    const valor1 = $("#v1").val();
    const valor2 = $("#v2").val();
    let somar = parseInt(valor1) + parseInt(valor2);
    console.log(somar);
    const resp = $("#resp");
    resp.val(somar);
})
