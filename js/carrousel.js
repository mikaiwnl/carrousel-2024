(function(){
    // console.log('début du carrousel')
    let carrousel = document.querySelector(".carrousel")
    // console.log("carrousel = " + carrousel.tagName)
    let bouton = document.querySelector(".bouton__ouvrir")
    // console.log("bouton = " + bouton.tagName)
    let carrousel__x = document.querySelector(".carrousel__x")

    let galerie = document.querySelector('.galerie')
    // let galerie__img = galerie.querySelector('img') // première image seulement


let carrousel__figure = document.querySelector(".carrousel__figure")
let galerie__img = galerie.querySelectorAll('img') // la collection des images de la galerie

let index = 0
for (const elm of galerie__img){
    creer_image_carrousel(index, elm)
    creer_radio_carrousel(index)

    index = index + 1
}


/**
 * Créer une image du carrousel à partir d'une image de la galerie
 * @param {*} index  numéro de l'image
 * @param {*} elm image de la galerie
 */
function creer_image_carrousel(index, elm){
    let carrousel__img = document.createElement('img')
    carrousel__img.classList.add('carrousel__img')
    carrousel__img.dataset.index = index
    console.log(elm.src)
    carrousel__img.src = elm.src
    console.log(carrousel__img.src)
    carrousel__figure.appendChild(carrousel__img)
}


/**
 * Créer les radio bouton de navigation dans le carrousel
 * @param {*} index  numéro du radio bouton
 */
function creer_radio_carrousel(index){
// créer input
// modifier type = radio
// name
// index
// ajouter le radio bouton au formulaire
// écoute de l'événement « change »
    // initialiser le style.opacity=0 pour l'ensemble des images
    // initialise l'image selectionnée à style.opacity=1

}





    bouton.addEventListener('mousedown', function(){
        console.log("bouton mousedown ")
        carrousel.classList.add('carrousel--ouvrir')
    })

    carrousel__x.addEventListener('mousedown', function(){
        console.log("bouton mousedown ")
        carrousel.classList.remove('carrousel--ouvrir')
    })

})()