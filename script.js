document.getElementById('convert').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    let conversionRate = 1;

    // Define conversion rates (example rates)
    const rates = {
        'BRL': { 'USD': 0.19, 'EUR': 0.17, 'GBP': 0.15, 'JPY': 25.00 },
        'USD': { 'BRL': 5.24, 'EUR': 0.89, 'GBP': 0.79, 'JPY': 132.00 },
        'EUR': { 'BRL': 5.88, 'USD': 1.12, 'GBP': 0.89, 'JPY': 148.00 },
        'GBP': { 'BRL': 6.67, 'USD': 1.27, 'EUR': 1.12, 'JPY': 166.00 },
        'JPY': { 'BRL': 0.04, 'USD': 0.0076, 'EUR': 0.0068, 'GBP': 0.0060 }
    };

    if (fromCurrency !== toCurrency) {
        conversionRate = rates[fromCurrency][toCurrency];
    }

    const result = amount * conversionRate;
    document.getElementById('result').innerHTML = `<p>Resultado da conversão: ${result.toFixed(2)} ${toCurrency}</p>`;
});
