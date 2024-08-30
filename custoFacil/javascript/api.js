// URL do endpoint Spring Boot
const apiURL = 'http://localhost:8080/funcionarios'; // Substitua pela URL correta

async function consumirAPI() {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Nenhum funcionário foi encontrado');
        }
        const data = await response.json();
        console.log('Dados recebidos:', data);
        const funcionariosDiv = document.getElementById('funcionarios');
        if (data.length === 0) {
            funcionariosDiv.innerHTML = '<p>Nenhum funcionário foi encontrado.</p>';
        } else {
            let html = '<ul>';
            data.forEach(funcionario => {
                html += `<li>${funcionario.nome} - ${funcionario.status}</li>`;
            });
            html += '</ul>';
            funcionariosDiv.innerHTML = html;
        }
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('funcionarios').innerHTML = '<p>Erro ao buscar funcionários.</p>';
    }
}

// Chama a função ao carregar a página
consumirAPI();