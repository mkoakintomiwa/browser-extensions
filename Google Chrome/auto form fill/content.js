var login_parameters = {
    
    "50.116.98.84:2087":{
        "username":{
            "querySelector":"#user",
            "value":"root"
        },
        "password":{
            "querySelector":"#pass",
            "value":"(m$A%xEZGqdg"
        },
        "login_button":{
            "querySelector":"#login_submit"
        }
    },

    ":2083":{
        "username":{
            "querySelector":"#user",
            "value":queryString("u")
        },
        "password":{
            "querySelector":"#pass",
            "value":queryString("p")
        },
        "login_button":{
            "querySelector":"#login_submit"
        }
    },

    "my.bluehost.com/web-hosting/cplogin":{
        "username":{
            "querySelector":"#ldomain",
            "value":"albushraschools.com"
        },
        "password":{
            "querySelector":"#lpass",
            "value":"$E5r6t7y123#"
        },
        "login_button":{
            "querySelector":"[type='submit']"
        }
    },

    "dashboard.paystack.com/#/login_":{
        "username":{
            "querySelector":"[type='email']",
            "value":"icitifysolution@gmail.com"
        },
        "password":{
            "querySelector":"[type='password']",
            "value":"1Q234rt678@"
        },
        "login_button":{
            "querySelector":"loading-button"
        }
    },
    
    "##icitifyportals@gmail.com":{
        "username":{
            "querySelector":"[type='email']",
            "value":"icitifyportals@gmail.com"
        },
        "password":{
            "querySelector":"[type='password']",
            "value":"5h7XL5KwXQrLHdQ"
        },
        "login_button":{
            "querySelector":"loading-button"
        }
    },
    "/telnet/keys/importkey.html":{
        "username":{
            "querySelector":"#keyname",
            "value":"id_rsa"
        },
        "password":{
            "querySelector":"#pass",
            "value":"(m$A%xEZGqdg"
        },
        "login_button":{
            "querySelector":"#login_submit"
        }
    }
}


setTimeout(_=>{

    if (document.querySelector("#user") && window.location.href.indexOf("/telnet/keys/importkey.html")!=-1){
        if (queryString("passphrase")){
            navigator.clipboard.readText().then(clipText=>{
                document.querySelector("#keyname").value = "id_rsa_kkk";
                document.querySelector("#privkey").value = clipText;
                document.querySelector("#pass").value = queryString("passphrase");
                document.querySelector('#btnImport').click();
            });
        }
    }else{
        for (let address_match in login_parameters){
            var login_values = login_parameters[address_match];

            if (window.location.href.indexOf(address_match)!=-1){ 
                if(document.querySelector(login_values.username.querySelector) && document.querySelector(login_values.password.querySelector) && document.querySelector(login_values.login_button.querySelector)){             
                    document.querySelector(login_values.username.querySelector).value = login_values.username.value;
                    document.querySelector(login_values.password.querySelector).value = login_values.password.value;
                    document.querySelector(login_values.login_button.querySelector).click();
                }
            }
        }
    }

},1000);


function queryString(name=null,url=null) {
    if (!name) return window.location.search;
    if (!url) url = window.location.href;
    name = name.replace(/[\\[\\]]/g, '\\\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\\+/g, ' '));
};