/*=============== TARJETA EMERGENTE JS ===============*/
const modal= document.querySelectorAll('.modal'),
        cardBtn= document.querySelectorAll('.card__product'),
        modalClose= document.querySelectorAll('.modal__close'),
        modalCard= document.querySelectorAll('.modal__card')

let activeModal = (modalClick) =>{
    modal[modalClick].classList.add('active-modal')
}

/* Mostrar modal */
cardBtn.forEach((cardBtn, i) =>{
    cardBtn.addEventListener('click', () =>{
        activeModal(i)
    })
})

/* Ocultar modal */

modalClose.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modal.forEach((modalRemove) =>{
            modalRemove.classList.remove('active-modal')
        })
    })
})

/* Ocultar modal al hacer clic en segundo plano */

modal.forEach((modal) =>{
    modal.addEventListener('click', () =>{
        modal.classList.remove('active-modal')
    })
})

/* No ocultar el modal al hacer clic en la tarjeta (por propagación de eventos)*/

modalCard.forEach((modalCard) =>{
    modalCard.addEventListener('click', (e) =>{
        e.stopPropagation()
    })
})