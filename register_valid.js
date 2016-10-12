/**
 * Created by Mojgan on 16/10/12.
 */


$(document).ready(function () {
    $('#submit').click(function () {

        var name = $("#username").val();
        var email = $("#email").val();
        var number = $("#number").val();
        var message = $("#text").val();
        var password = $("#password").val();
        var repassword = $("#repassword").val();


        var mail_pattern = new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g);
        var password_pattern = new RegExp("^(?=.{8,})");
        var co_no =new RegExp(/^(09)[0-9]{9}$/g);

        if(name == '' || email=='' || number==''){
            alert("Fill all field!");}
        else if(!mail_pattern.test(email)){
            alert("Wrong email!");}
        else if(!co_no.test(number)){
            alert("Wrong contact.no");}
        else if(repassword != password){
            alert("Password not confirmed!");
        }
        else if(!password_pattern.test(password)){
            alert("Password must be 8 charachter at least!")
        }
        else {

            $('#tbody').append('<tr>').append('<td>' + name + '</td>')
                .append('<td>' + number + '</td>').append('<td>' + email + '</td>').append('<td>'+message +'</td>');
        }

    })
})
