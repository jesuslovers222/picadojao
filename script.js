document.addEventListener('DOMContentLoaded', async function () {
    let accessToken = ''; // Variável para armazenar o token de acesso
    let startDateInput = document.getElementById('startDate');
    let endDateInput = document.getElementById('endDate');
    let fetchDataButton = document.getElementById('fetchDataButton');

    // Adicionar evento ao botão para obter dados
    fetchDataButton.addEventListener('click', () => {
        let startDate = startDateInput.value;
        let endDate = endDateInput.value;
        fetchData(startDate, endDate);
    });

    // Função para obter o token de acesso da API usando um servidor proxy PHP
    async function getAccessToken() {
        const proxyUrl = '/picadojao/php.php'; // Substitua pela URL do seu servidor proxy PHP
        try {
            const response = await fetch(proxyUrl);
            const data = await response.json();
            accessToken = data.access_token;
            console.log('Token de acesso obtido:', accessToken);
            // Após obter o token, chama a função para criar os botões de anos
            createYearButtons();
        } catch (error) {
            console.error('Erro ao obter token de acesso:', error);
        }
    }

    // Função para criar botões de anos na interface
    async function createYearButtons() {
        const dateSelector = document.getElementById('dateSelector');
        const years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

        // Remove botões existentes, se houver
        dateSelector.innerHTML = '';

        // Cria um botão para cada ano
        years.forEach(year => {
            const button = document.createElement('button');
            button.textContent = year;
            button.addEventListener('click', () => {
                fetchData(year, year); // Passa o mesmo ano como data de início e fim por enquanto
            });
            dateSelector.appendChild(button);
        });
    }

    // Função para fazer requisição à API com o período selecionado e criar o gráfico
    async function fetchData(startDate, endDate) {
        const apiUrl = `https://api.eumetsat.int/data/browse/1.0.0/collections/EO%3AEUM%3ADAT%3A0836/dates?startDate=${startDate}&endDate=${endDate}&format=json`;
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };

        try {
            const response = await fetch(apiUrl, {
                headers: headers
            });
            const data = await response.json();
            console.log(data);

            // Cria o gráfico com base nos dados obtidos
            createChart(data);
        } catch (error) {
            console.error('Erro ao obter dados da API:', error);
        }
    }

    // Função para criar o gráfico
    function createChart(data) {
        // Substitua este código pela lógica real para criar o gráfico
        console.log('Criar gráfico com os dados:', data);
    }

    // Chama a função para obter o token de acesso ao carregar a página
    getAccessToken();
});
document.addEventListener('DOMContentLoaded', async function () {
    let accessToken = ''; // Variável para armazenar o token de acesso
    let startDateInput = document.getElementById('startDate');
    let endDateInput = document.getElementById('endDate');
    let fetchDataButton = document.getElementById('fetchDataButton');

    // Adicionar evento ao botão para obter dados
    fetchDataButton.addEventListener('click', () => {
        let startDate = startDateInput.value;
        let endDate = endDateInput.value;
        fetchData(startDate, endDate);
    });

    // Função para obter o token de acesso da API usando um servidor proxy PHP
    async function getAccessToken() {
        const proxyUrl = '/picadojao/php.php'; // Substitua pela URL do seu servidor proxy PHP
        try {
            const response = await fetch(proxyUrl);
            const data = await response.json();
            accessToken = data.access_token;
            console.log('Token de acesso obtido:', accessToken);
            // Após obter o token, chama a função para criar os botões de anos
            createYearButtons();
        } catch (error) {
            console.error('Erro ao obter token de acesso:', error);
        }
    }

    // Função para criar botões de anos na interface
    

    // Função para fazer requisição à API com o período selecionado e criar o gráfico
    async function fetchData(startDate, endDate) {
        const apiUrl = `https://api.eumetsat.int/data/browse/1.0.0/collections/EO%3AEUM%3ADAT%3A0836/dates?startDate=${startDate}&endDate=${endDate}&format=json`;
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };

        try {
            const response = await fetch(apiUrl, {
                headers: headers
            });
            const data = await response.json();
            console.log(data);

            // Cria o gráfico com base nos dados obtidos
            createChart(data);
        } catch (error) {
            console.error('Erro ao obter dados da API:', error);
        }
    }

    // Função para criar o gráfico
    function createChart(data) {
        const ctx = document.getElementById('myChart').getContext('2d');
    
        // Extrair os dados necessários para o gráfico (por exemplo, x e y)
        const labels = data.map(item => item.x); // Substitua 'x' pelo nome do campo que representa o eixo x
        const values = data.map(item => item.y); // Substitua 'y' pelo nome do campo que representa o eixo y
    
        // Criar o gráfico usando Chart.js
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Dados do Gráfico',
                    data: values,
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'time', // Se os dados do eixo x representam datas
                        time: {
                            unit: 'day' // A unidade de tempo, por exemplo, 'day', 'month', 'year'
                        }
                    },
                    y: {
                        // Outras opções para o eixo y, se necessário
                    }
                }
            }
        });
    }
     

    // Chama a função para obter o token de acesso ao carregar a página
    getAccessToken();
});
