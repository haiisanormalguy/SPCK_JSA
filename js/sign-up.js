let register = document.getElementById('register')
register.addEventListener("submit", (event)=>{
    event.preventDefault()
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let rePassword = document.getElementById('re-password')
    let emailRegex = /^[a-zA-Z0-9]+@(gmail|yahoo)\.com$/
    let passRegex = /^[a-zA-Z0-9]{6,}$/

    if (email.value.trim().length == 0 && password.value.trim().length == 0 && name.value.trim().length == 0 && rePassword.value.trim().length == 0){
        alert('Mời bạn nhập đầy đủ thông tin')
    }else if(email.value.trim().length == 0) {
        alert('moi ban nhap email')
    }else if(password.value.trim().length == 0){
        alert('moi ban nhap mat khau')
    }else if(name.value.trim().length == 0){
        alert('moi ban nhap ten')
    }else if(rePassword.value.trim().length == 0){
        alert('moi ban nhap lai mat khau')
    }else if(password.value.trim().length != rePassword.value.trim().length){
        alert('mat khau khong trung nhau')
    }
    else if(!emailRegex.test(email.value)){
        alert('email sai dinh dang')
    }
    else if(!passRegex.test(password.value)){
        alert('mat khau can nhat 6 ki tu')
    }
    
  
    else {

        if(localStorage.users){
           let users = JSON.parse(localStorage.users)
           users.push({
                name: name.value.trim(),
                email: email.value.trim(),
                password: password.value.trim()
           })
           localStorage.setItem('users', JSON.stringify(users))
           alert('Đăng ký thành công')
        } else {

            localStorage.setItem('users', JSON.stringify(
                [
                    {
                        email: email.value.trim(),
                    password: password.value.trim(),
                    name: name.value.trim()
                }
            ]
            ))
        }
    }
})
