const lista = document.querySelector('#todo')
const input = document.querySelector('#input')
const adicionarBt = document.querySelector('section.fundo button')


const excluirItem = (item, lista) => {

    let animation = item.animate([{
        opacity: '1',
        transform: 'scale(1)'
    }, {
        opacity: '0',
        transform: 'scale(0.8)'
    }], 200)

    animation.onfinish = () => {

        lista.removeChild(item)
    }
}

const criarItem = (conteudo) => {
    const li = document.createElement('li')
    const next = document.createElement('i')
    const close = document.createElement('i')

    close.classList.add('fas')
    close.classList.add('fa-times-circle')
    close.classList.add('fa-1x')

    next.classList.add('fas')
    next.classList.add('fa-chevron-circle-right')
    next.classList.add('fa-1x')

 //   close.onclick = () => excluirItem(li, lista)
    next.onclick = () => excluirItem(li, lista)


//  li.append(close)
    li.innerHTML = conteudo
    li.append(next)
    lista.appendChild(li)
}

 const adicionarLista = () => {
    criarItem(input.value)
    input.value = ''
}

 adicionarBt.onclick = adicionarLista

// load()