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

const colunaDone = (item, lista) => {
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
/*        
        item.classList.remove('fas')
        item.classList.remove('fa-times-circle')
        item.classList.remove('fa-1x')
    
        item.classList.remove('fas')
        item.classList.remove('fa-chevron-circle-right')
       item.classList.remove('fa-1x')
*/ 
        var copy = item.cloneNode(true)

        copy.append(close)
        done.appendChild(copy)
        lista.removeChild(item)
        close.onclick = () => excluirItem(copy, done)
    }
}

const colunaDoing = (item, lista) => {
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
/*        
        item.classList.remove('fas')
        item.classList.remove('fa-times-circle')
        item.classList.remove('fa-1x')
    
        item.classList.remove('fas')
        item.classList.remove('fa-chevron-circle-right')
       item.classList.remove('fa-1x')
*/ 
        var cop = item.cloneNode(true)

        cop.append(close)
        cop.append(next)
        doing.appendChild(cop)
        lista.removeChild(item)
        close.onclick = () => excluirItem(cop, doing)
        next.onclick = () => colunaDone(cop, doing)
 
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
    next.onclick = () => colunaDoing(li, todo)

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

// load()