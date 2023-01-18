let userData = JSON.parse(localStorage.getItem('data'))
let userlogin
userData.forEach(user => {
    userlogin =user.userName
});

document.getElementById('login').innerHTML =`Hi ${userlogin}`

// -----------------------
// let navbar = document.querySelector('.navbar')

window.addEventListener('scroll',function(){
    let windowScroll =window.scrollY
    if(windowScroll > 100){
        $('.navbar').animate({'top':'0px' , 'width':'100%'})
        $('.to-up').css('display', 'flex')
        // navbar.style.top ='0%'
        // navbar.style.width ='100%'
    }
    else if (windowScroll < 100)
    {
        $('.navbar').animate({'top':'50px','width':'70%'})
        $('.to-up').css('display', 'none')
    }
    $('.to-up').click(()=>window.scrollTo(0,0)  )
})

// ----------------------------
// random
// let count =0
let random = document.querySelectorAll('#review-random')
// for (let i = 0; i < random.length; i++) {
//     random[i].innerHTML = count + Math.round(Math.random()*5000)+`K`
    
// }

function random(){
    for (let i = 0; i < random.length; i++) {
        random[i].innerHTML = count + Math.round(Math.random()*5000)+`K`
        
    }
}

setInterval( random , 2000)

// ----------------------------------
// logout 
let logOutBtn = document.getElementById('logOutBtn')
logOutBtn.addEventListener('click',function(){
    localStorage.clear(userData)
    window.location.assign('index.html')
})


// -----------------
// Loading 
$(document).ready(()=>{
     $('#isLoading img').fadeOut(2000 ,()=>{
        $('#isLoading').slideUp(2000 ,()=>{
            $('#isLoading').remove()
            $('body').css('overflow','auto')
        })
     })
    })

