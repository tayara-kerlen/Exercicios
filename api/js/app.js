
// Link da API
// const url = 'https://66a29be8967c89168f20a323.mockapi.io/api/users';
const url = 'https://marneicardoso.com/api/';

// Conecta com a API pelo link
fetch(url)
    // Se tiver sucesso na conexão (então == then)
    .then(response => response.json())
    // Se conseguir converter para JSON (então == then)
    .then(data => {
        // Mostre os dados retornados
        console.log(data); // LOG
    })