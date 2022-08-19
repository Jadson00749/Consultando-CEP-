const cep = document.querySelector('#cep');

const showData = (result) => {
        for(const campo in result){
            if(document.querySelector("#"+campo)){
                document.querySelector('#'+campo).value = result[campo]
            }
        }
}

cep.addEventListener("blur", (e) => {
    let seach = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    /*acesse*/  fetch(`https://viacep.com.br/ws/${seach}/json/`, options)
    /*se der certo*/ .then(response => {
    /*se der errado*/ response.json().then(data => showData(data))
    })
    .catch(e => console.log('Deu algo errado...'+ e,massage))
    
})  
