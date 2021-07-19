const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `<img src= ../assets/loader.gif width=50px,height=50px>`

    let pronto = `<h4 style="color: #fff">Cadastro efetuado com sucesso!</h4>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000);
})