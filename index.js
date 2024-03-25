const form = document.forms.namedItem('login')
const dialog = document.querySelector('dialog')
const span = dialog.querySelector('span')
const b = dialog.querySelector('b')
const p = dialog.querySelector('p')
const inputs = form.querySelectorAll('input')
const inp_span = form.querySelectorAll('.inp_span')


const patterns = {
    name: /^[a-z ,.'-]+$/i,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    phone: /^998([378]{2}|(9[013-57-9]))\d{7}$/g
}


inputs.forEach((inp) => {
    inp.onkeyup = () => {
        if (!patterns[inp.name].test(inp.value)) {
            inp.classList.add('error')
        } else {
            inp.classList.remove('error')
        }
    }
})

form.onsubmit = (event) => {
    event.preventDefault()
    let fm = new FormData(form)
    let error = false

    let user = {}

    fm.forEach((val, key) => {
        user[key] = val
        if (val === 'not') error = true
    })
    inputs.forEach((inp) => {
        if (inp.value.length === 0 || inp.classList.contains('error')) {
            error = true
        }
    })

    if (error) {
        alert("Something is getting wrong")
        return
    }

    let inp = 3

    inp_span.forEach((e) => {
        if (inputs.length === inp) {
            e.innerHTML = 'minimum 3'
        }
    })

    b.innerHTML = user.name
    p.innerHTML = `After 10 years you'll be a seanior developer on ${user.language} language`
    dialog.showModal()
}

span.onclick = () => {
    dialog.close()
}
