const todo = document.querySelector('#todo')
const doing = document.querySelector('#doing')
const done = document.querySelector('#done')
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

const colunaDone = (item, lista, conteudo) => {
    const li = document.createElement('li')
    const close = document.createElement('i')

    close.classList.add('fas')
    close.classList.add('fa-times-circle')
    close.classList.add('fa-1x')

    let animation = item.animate([{
        opacity: '1',
        transform: 'scale(1)'
    }, {
        opacity: '0',
        transform: 'scale(0.8)'
    }], 200)

    animation.onfinish = () => {
        li.innerHTML = conteudo
        li.append(close)
        done.appendChild(li)
        lista.removeChild(item)
        close.onclick = () => excluirItem(li, done)
    }
}

const colunaDoing = (item, lista, conteudo) => {
    const li = document.createElement('li')
    const next = document.createElement('i')
    const close = document.createElement('i')

    close.classList.add('fas')
    close.classList.add('fa-times-circle')
    close.classList.add('fa-1x')

    next.classList.add('fas')
    next.classList.add('fa-chevron-circle-right')
    next.classList.add('fa-1x')

    let animation = item.animate([{
        opacity: '1',
        transform: 'scale(1)'
    }, {
        opacity: '0',
        transform: 'scale(0.8)'
    }], 200)

    animation.onfinish = () => {
        li.innerHTML = conteudo
        li.append(close)
        li.append(next)
        doing.appendChild(li)
        lista.removeChild(item)
        close.onclick = () => excluirItem(li, doing)
        next.onclick = () => colunaDone(li, doing, conteudo)
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

    close.onclick = () => excluirItem(li, todo)
    next.onclick = () => colunaDoing(li, todo, conteudo)

    li.innerHTML = conteudo
    li.append(close)
    li.append(next)
    todo.appendChild(li)
}

 const adicionarLista = () => {
    criarItem(input.value)
    input.value = ''
}

 adicionarBt.onclick = adicionarLista
 document.addEventListener('keypress', function(e){
    if(e.which == 13){
      adicionarLista();
    }
  }, false);