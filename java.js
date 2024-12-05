"strict"
const btn = document.getElementById('btn')
        let reg = document.getElementById('hidden-reg')
        let name = document.getElementById('name')
        let email = document.getElementById('email')    
        let password = document.getElementById('password')    
        let confirmPassword = document.getElementById('confirmPassword')
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('active');
        }

        function loanApply(e) {
            reg.classList.toggle("visible")

        }
        btn.addEventListener('click', loanApply)

let btns = document.querySelector('text')
console.log(btns);


