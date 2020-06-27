setInterval(_=>{
    if (window.location.href.indexOf("https://vanguardacademy-ng.com/portal/users/login.php")!=-1){
        document.getElementById('username').value = 'musthy';
        document.getElementById('password').value = 'hamdan';
        document.getElementById('login').click();    
    }
},5000);