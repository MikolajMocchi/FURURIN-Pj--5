
const oblicz = document.querySelector('button')
const kursy = document.querySelector("input[type='checkbox']")

function funkcja_obliczeniowa(event){

    

    event.preventDefault()

    const checkboxy = document.querySelectorAll("input[type='checkbox']:checked")

    const miasto = document.querySelector('.miasta').value

    const raty = document.querySelector('.rata').value

    const tabela = document.querySelector('table')    // tabela którą zrobię

    let suma = 0

    tabela.innerHTML = `<tr>
        <th>kurs</th>
        <th>kwota</th>
    </tr>`

    for(let kurs of checkboxy){
        if(kurs.checked){
            tabela.innerHTML += `<tr>
                <td>${kurs.name}</td>
                <td>${kurs.value}</td>
            </tr>`
            
            suma += Number(kurs.value)
        }
    }


    const raty_span = document.querySelector('')
    const suma_span = document.querySelector('')

    raty_span.textContent = ilosc_rat
    suma_span.textContent = Number(suma / ilosc_rat).toFixed(2)


}



oblicz.addEventListener('click', funkcja_obliczeniowa)
