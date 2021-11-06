var upperCase = true;
var lowerCase = true;
var numbers = true;
var symbols = true;

var password_legnth = 8;

const UpperCaseCharacters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const NumbersCharacters = '0123456789';
const SymbolsCharacters = '!@#$%^&*()-=_+';



function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
 
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
 



function createPassword(){
    var password = "";

    var createCase = null;


    for( var i=0; i<password_legnth; i++ ){

        createCase = Math.floor( Math.random() * 4 );

        if( createCase == 0 ){ // UpperCase
            if( upperCase ){
                password += UpperCaseCharacters[ Math.floor( Math.random() * UpperCaseCharacters.length ) ]
            } else{
                i--; 
                continue;
            }
        }
        else if( createCase == 1 ){ // LowerCase
            if( lowerCase ){
                password += LowerCaseCharacters[ Math.floor( Math.random() * LowerCaseCharacters.length ) ]
            } else{
                i--; 
                continue;
            }
        }
        else if( createCase == 2 ){ // NumbersCase
            if( numbers ){
                password += NumbersCharacters[ Math.floor( Math.random() * NumbersCharacters.length ) ]
            } else{
                i--; 
                continue;
            }
        }
        else if( createCase == 3 ){ // SymbolsCase
            if( symbols ){
                password += SymbolsCharacters[ Math.floor( Math.random() * SymbolsCharacters.length ) ]
            } else{
                i--; 
                continue;
            }
        }


    }


    document.querySelector('.input_box').value = password;


}


window.onload = ()=>{

    createPassword();

    // init
    upperCase = document.querySelector('.UpperCase input').checked;
    lowerCase = document.querySelector('.LowerCase input').checked;
    numbers = document.querySelector('.Numbers input').checked;
    symbols = document.querySelector('.Symbols input').checked;

    password_legnth = document.querySelector('.password_length').value;



    document.querySelector('.reload_btn').addEventListener('click', ()=>{
        createPassword();
    })

    document.querySelector('.copy_btn').addEventListener('click', ()=>{
        document.querySelector('.input_box').select();
        document.execCommand('copy');
        alert('복사 완료!');
    })



    
    document.querySelector('.password_length').addEventListener('change', ()=>{
        if( document.querySelector('.password_length').value >= 101 ){
            document.querySelector('.password_length').value = 100;
        } else if( document.querySelector('.password_length').value <= -1 ){
            document.querySelector('.password_length').value = 0;
        }
        
        document.querySelector('.password_length_value').value = document.querySelector('.password_length').value;
        password_legnth = document.querySelector('.password_length').value;

        createPassword();

    })
    document.querySelector('.password_length_value').addEventListener('change', ()=>{
        if( document.querySelector('.password_length_value').value >= 101 ){
            document.querySelector('.password_length_value').value = 100;
        } else if( document.querySelector('.password_length_value').value <= -1 ){
            document.querySelector('.password_length_value').value = 0;
        }

        document.querySelector('.password_length').value = document.querySelector('.password_length_value').value;
        password_legnth = document.querySelector('.password_length_value').value;

        createPassword();

    })

    
    document.querySelector('.UpperCase input').addEventListener('change', ()=>{

        if( ! lowerCase && ! numbers && ! symbols ){
            document.querySelector('.UpperCase input').checked = true;
            alert('하나 이상은 무조건 체크가 되어있어야 합니다.');
        }
        else{
            upperCase = document.querySelector('.UpperCase input').checked;
            createPassword();
        }
    });
    document.querySelector('.LowerCase input').addEventListener('change', ()=>{

        if( ! upperCase && ! numbers && ! symbols ){
            document.querySelector('.LowerCase input').checked = true;
            alert('하나 이상은 무조건 체크가 되어있어야 합니다.');
        }
        else{
            lowerCase = document.querySelector('.LowerCase input').checked;
            createPassword();
        }


    });
    document.querySelector('.Numbers input').addEventListener('change', ()=>{

        if( ! lowerCase && ! upperCase && ! symbols ){
            document.querySelector('.Numbers input').checked = true;
            alert('하나 이상은 무조건 체크가 되어있어야 합니다.');
        }
        else{
            numbers = document.querySelector('.Numbers input').checked;
            createPassword();
        }
    });
    document.querySelector('.Symbols input').addEventListener('change', ()=>{

        if( ! lowerCase && ! numbers && ! upperCase ){
            document.querySelector('.Symbols input').checked = true;
            alert('하나 이상은 무조건 체크가 되어있어야 합니다.');
        }
        else{
            symbols = document.querySelector('.Symbols input').checked;
            createPassword();
        }
    });


    document.querySelector('.save_to_file_area').addEventListener('click', ()=>{
        download('password.txt', document.querySelector('.input_box').value);
    });

    


};