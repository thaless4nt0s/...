const faturamento = [
    {
        estado: 'SP',
        valor: 67836.43,
    },
    {
        estado: 'RJ',
        valor: 36678.66,
    },
    {
        estado: 'MG',
        valor: 29229.88,
    },
    {
        estado: 'ES',
        valor: 27165.48,
    },
    {
        estado: 'OUTROS',
        valor: 19849.53,
    },
]

const valorTotal = faturamento.reduce((soma, elemento) => soma+elemento.valor, 0); // 180759.98

const percentualDeCadaEstado = faturamento.forEach(elemento => {
    const percentual = (elemento.valor / valorTotal)*100
    console.log(`Estado: ${elemento.estado}\nvalor: ${elemento.valor}\npercentual: ${percentual.toFixed(2)}%\n`);
    console.log('-------------');
})