// Guarda o formulário
const formCadastro = document.getElementById('formCadastro');

// Adiciona o ouvinte do evento do formulário (submit)
formCadastro.addEventListener('submit', (evento) => {
    // Previne (bloqueia) o comportamento padrão
    evento.preventDefault();
    
    // Buscando os dados da tela
    // const nomeEvento = document.getElementById('evento').value;
    // const dataEvento = document.getElementById('data').value;

    cadastrarEvento(formCadastro);
});

function cadastrarEvento(formCadastro) {
    // Buscando os dados do formulário
    const nomeEvento = formCadastro.nomeEvento.value;
    const dataEvento = formCadastro.dataEvento.value;

    // Busca os dados do LocalStorage (ou devolve um array vazio)
    const listaEventos = localStorage.getItem('eventos') || [];

    // === O mesmo que a linha acima ===
    // if (localStorage.getItem('eventos')) {
    //     console.log(`Tem`);
    //     listaEventos = localStorage.getItem('eventos');
        
    // } else {
    //     console.log(`Não tem`);
    //     listaEventos = [];
    // }

    // Adiciona o objeto com os dados no array
    listaEventos.push(  // <-- array
        // objeto
        {
            nomeEvento,
            dataEvento,
        }
    );

    // Adiciona o array preenchido na LocalStorage
    localStorage.setItem('eventos', JSON.stringify(listaEventos));
    
    // SET
    // verbo: atribuir
    // substantivo: conjunto
    
    console.log(listaEventos);
    
    document.getElementById('lista').textContent = `Nome do Evento: ${nomeEvento} - Data: ${dataEvento}`;
}
