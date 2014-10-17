function submitCom(){
    if($('#namebox').val() === "Clear"){
        clearStorage();
        return;
    }
    var Comment_Header = $('#namebox').val();
    var Comment_body = $('#textbox').val();
    if(Comment_Header === ''){
        Comment_Header = 'Anonymous';
    }

    var comhtml = '<section>' +
        '<h4>' + Comment_Header + '</h4>' +
        '<p>' +
        Comment_body +
        '</p>' +
        '</section>';

    if(Comment_body === ''){
    alert('Your comment must contain something')
    }else{
        setStorage('Comments',
                   comhtml +
                   getStorage('Comments'));
        showCom();




    }


}

function showCom(){
    $('#comments').html(getStorage('Comments'));

}

function clearCom(){
    $('#namebox').val('');
    $('#textbox').val('');
}


function setStorage(key, value){
    window.localStorage.setItem(key, value);
}

function getStorage(key){
    return window.localStorage.getItem(key);
}

function clearStorage(){
        window.localStorage.clear();
        showCom();
};

function checkLocalStorage(){
    if(typeof(window.localStorage) === "undefined"){
        return false;
    } else {
        return true;
    }
}


