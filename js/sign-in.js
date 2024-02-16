let login = document.getElementById('login')
login.addEventListener('submit', (event)=>{
    event.preventDefault()

    let person = JSON.parse(localStorage.users)
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    
    for(let index=0; index < person.length; index++){
        if (email.value.trim() == person[index].email && 
          password.value.trim()==person[index].password){
            window.location.href = "index.html"
            return
        }
        else{
            alert('sai tên đăng nhập hoặc mật khẩu')
            return
        }
    }
})