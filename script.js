document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();  

   
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let rg = document.getElementById('rg').value;
    let cpf = document.getElementById('cpf').value;
    let endereco = document.getElementById('endereco').value;
    let profissao = document.getElementById('profissao').value;

   
    let resultado = `
        <h2>Cadastro Concluído com Sucesso!</h2>
        <p><strong>Nome completo:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>RG:</strong> ${rg}</p>
        <p><strong>CPF:</strong> ${cpf}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Profissão:</strong> ${profissao}</p>
    `;

   
    document.getElementById('resultado').innerHTML = resultado;
});
