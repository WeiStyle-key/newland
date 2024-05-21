const gameWrap = document.querySelector('.game_wrap')
const game = document.querySelector('.game')
const gameItem = document.querySelectorAll('.case_item')
const modal = document.querySelector('.modal-section')

const questWrap = document.querySelector('.quest-wrap')
const questList = document.querySelectorAll('.quest_list')

const loaderWrap = document.querySelector('.infoChecker')
const loaderSpan = document.querySelector('.infoChecker__loader-value span')
const loaderItem = document.querySelectorAll('.infoChecker__list-item')
const loaderItem2 = document.querySelectorAll('.infoChecker__loading-action')

let step = 1



function anim() {
    console.log('anim')
    setTimeout(() => {
        gameItem.forEach((item, index) => {
            if (index === 0 || index === 2) {
                item.classList.add('animate_coin')
            } else {
                item.classList.add('animate_coin2')
            }
        })
    }, 1000)


    setTimeout(() => {
        gameItem.forEach((item, index) => {
            if (index === 0 || index === 2) {
                item.classList.remove('animate_coin')
            } else {
                item.classList.remove('animate_coin2')
            }
        })
    }, 2000)

    setTimeout(() => {
        game.classList.add('mix')
    }, 6000)

    setTimeout(() => {
        game.classList.remove('hiddenClick')
    }, 8000)


}


// function animRemove() {
//     gameItem.forEach((item, index) => {
//         if (index === 0 || index === 2) {
//             item.classList.remove('animate_coin')
//         } else {
//             item.classList.remove('animate_coin2')
//         }
//     })
// }

// setTimeout(() => {
//     game.classList.add('mix')
//     game.classList.remove('hiddenClick')
// }, 6000)


// setTimeout(() => animRemove(), 4000)


// function randomAnim () {
//
//
//     const random = Math.floor(Math.random() * gameItem.length) ;
//     console.log(gameItem)
//
//     gameItem[random].classList.add('shake')
//
//     setTimeout(() => {
//         gameItem[random].classList.remove('shake')
//         randomAnim()
//     }, 2000)
// }


function startWheel(item) {

    if (step === 2) {
        item.classList.add('win')
    } else {
        item.classList.add('lose')
    }


    game.setAttribute('data-spin', step)

    setTimeout(() => modal.setAttribute('data-modal', step + 1), 2000);
    setTimeout(() => modal.classList.add('show'), 2000);

    if (step <= 2) {
        setTimeout(() => step = step + 1, 2000);
    }

}

function closeModal() {
    modal.classList.remove('show')

    gameItem.forEach((item) => {
        item.classList.remove('lose')
        item.classList.remove('win')
        game.classList.remove('mix')
    })

}

function closeModal2() {
    modal.classList.remove('show')

    gameItem.forEach((item) => {
        item.classList.remove('lose')
        item.classList.remove('win')
        game.classList.remove('mix')
    })

    setTimeout(() => {
        game.classList.add('mix')
    }, 2000)
}

function closeModal3() {
    closeModal()
    f()
}

let quest = 0

function question() {
    quest++
    questWrap.setAttribute('data-quest', quest)

    if (questList.length === quest) {
        questWrap.classList.remove('active')
        loaderWrap.classList.add('active')
        loader()
    }
}

let loading = 0


function loader() {

    document.querySelector('.new_text').style.display = 'none'


    setInterval(() => {
        if (loading !== 100) {
            loading++
            loaderWrap.setAttribute('data-load', loading)
            loaderSpan.innerHTML = loading
        } else {
            clearInterval()
        }

        if (loading === 30) {
            loaderItem[0].classList.add('active')
            loaderItem2.forEach((item) => {
                item.classList.remove('active')
            })
            loaderItem2[0].classList.add('active')
        }
        if (loading === 60) {
            loaderItem[1].classList.add('active')
            loaderItem2.forEach((item) => {
                item.classList.remove('active')
            })
            loaderItem2[1].classList.add('active')
        }
        if (loading === 100) {
            loaderItem[2].classList.add('active')
            loaderItem2.forEach((item) => {
                item.classList.remove('active')
            })
            loaderItem2[2].classList.add('active')
        }

    }, 30)

    setTimeout(() => {
        loaderWrap.classList.remove('active')
        gameWrap.classList.add('active')
        anim()
    }, 5000)
}

const people = document.querySelectorAll('.people');


const arrr = []

// тело цикла
people.forEach((item) => {
    if (!item.classList.contains('act')) {
        arrr.push(item)
    }
})


var i = 0;
f = function () {


    arrr[i].classList.add('act')


    // счётчик и условие исполнения цикла

    i = i + 1;
    if (i < 10) setTimeout(f, "7000");

};


