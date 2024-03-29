function preencherFormulario(endereco){
    document.getElementById('endereço').value = endereco.logradouro;
    document.getElementById('complemento').value = endereco.complemento;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

const pesquisaCep = async() => {
    document.getElementById('loading').style.display = 'block';
    let cep = document.getElementById('cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let dados = await fetch(url);
    let endereco = await dados.json();
    
    preencherFormulario(endereco);
    document.getElementById('loading').style.display = 'none';
}
document.getElementById('cep').addEventListener('onclick', pesquisaCep);