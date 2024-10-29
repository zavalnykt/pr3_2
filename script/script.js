document.getElementById('checkPassword').addEventListener('click', function(){
    let passwwordInput = document.getElementById('passwordInput').value;
    let PatternPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   let message = PatternPass.test(passwwordInput) ? 'Пароль вірний!' : 'Пароль невірний!';
    document.getElementById('MessagePassword').textContent = message;
});
 
