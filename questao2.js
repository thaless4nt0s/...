const SEQUENCIA = Math.floor(Math.random()*12);
let fib = Array(SEQUENCIA);
fib[0] = 0;
fib[1] = 1;

function fibonacci(sequencia){
    if(sequencia == 0){
        return 0;
    }

    else if(sequencia <=2){
        return 1;
    }

    return fibonacci(sequencia - 2) + fibonacci(sequencia - 1);
}
console.log(`Numero informado: ${SEQUENCIA}`);
console.log(`Resultado: ${fibonacci(SEQUENCIA)}`);