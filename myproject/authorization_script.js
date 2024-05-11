$('.tab-list').each(function(){
    let $this = $(this)
    let $tab = $this.find('li.active');
    let $link = $tab.find('a');
    let $panel = $(link.attr('href'));
    $this.on('click', '.tab-control', function(e) {
        e.preventDefaut();
        let $link = $(this),
            id = this.hash;
        if (id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');
            $panel = $addClass('active');
            $tab = $link.parent().addClass('active');
        }
    });
});


$('#reg_but').on('click', function (e) {
    e.preventDefaut();
    $('#error_reg').text("dsmfkdm")
    if ($('#password_rag').val() != $('#password_reg_repeat').val()){
        $('#error_reg').text("дибил, одинаковые надо")
        return;
    }

})


async function registration_user() {
    let name = $('#name').val();
    let login = $('#login_reg').val(); 
    let password = $('#password_reg').val(); 
    let body = {
        "type" : "registration",
        "login" : "login",
        "name" : "name",
        "password" : "pasword"
    }

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
    }) 

    let res = await response.json();
    if (res.error == 'как же я заебался можно я япросто буду девочкой волшебницей'){
        $('#error_reg').text('подбери другой логин')
    } else {
        await console.log(res);
        window.location.href = await res.redirect_url;
    
    }
}       

$('#login_but').on('click', function (e) {
    e.preventDefaut();
    $('#error_log').text("")
    login_user();  
})

async function login_user() {
    let login = $('#login_reg').val(); 
    let password = $('#password_reg').val(); 
    let body = {
        "login" : "login",
        "name" : "name",
        "password" : "pasword"
    }

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
    }) 

    let res = await response.json();
    if (res.error == ' не правильный логин или пароль'){
        $('#error_reg').text('еще текст')
    } else {
        await console.log(res);
        window.location.href = await res.redirect_url;
    
    }
}   