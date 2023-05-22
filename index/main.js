function redirectToSignIn() {
    window.location.href = "./sign-in.html";
}
function redirectToJoinNow() {
    window.location.href = "./join-now.html";
}

function redirectToMenu(){
    window.location.href="./menu.html"
}


let coffeArrays=[
    {
        img:'https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png',
        header:'Customize your drink',
        paragraph:'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.'
    },
    {
        img:'https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png',
        header:'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
        paragraph:'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.'
    },
    {
        img:'https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png',
        header:'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
        paragraph:'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.'
    },
    {
        img:'https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png',
        header:'Sandwich, protein box or at-home coffee',
    paragraph:'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant'
    },
    {
    img:'https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png',
    header:'Select Starbucks® merchandise',
    paragraph:'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.'
    }
    ]
    const btns=document.querySelectorAll('.rewards-body-average-bottom button')
    const second_div=document.querySelector('.created-div')
    btns.forEach(button=>{
        button.addEventListener('click',()=>{
            const arrayindx=button.id
            console.log(coffeArrays[arrayindx].img);
            const div_inf=` <div class="imgDiv"><img src="${coffeArrays[arrayindx].img}"></div>
            <div class="aboutDiv">
            <h5>${coffeArrays[arrayindx].header}</h5>
            <p>${coffeArrays[arrayindx].paragraph}</p>
            </div>
            `
      second_div.innerHTML=div_inf
        })
    })



var passwordVisible = false;

function togglePassword() {
    var passwordIcon = document.getElementById("password-icon");
    var passwordInput = document.getElementById("password-input");

    if (passwordVisible) {
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye");
        passwordInput.type = "password";
    } else {
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash");
        passwordInput.type = "text";
    }

    passwordVisible = !passwordVisible;
}


document.getElementById("myCheckbox").addEventListener("change", function () {
    var checkbox = document.getElementById("myCheckbox");
    var label = document.getElementById("label");

    if (checkbox.checked) {
        label.style.backgroundColor = "green";
    } else {
        label.style.backgroundColor = "blue";
    }
});





