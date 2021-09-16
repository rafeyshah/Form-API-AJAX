//GET
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://localhost:44318/api/form",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //alert(JSON.stringify(data));
            $("#DIV").html('');
            var DIV = '';
            $.each(data, function (i, item) {
                var rows = "<tr>" +
                    "<td id='RegdNo'>" + item.email + "</td>" +
                    "<td id='Name'>" + item.name + "</td>" +
                    "<td id='Address'>" + item.city + "</td>" +
                    "<td id='PhoneNo'>" + item.no + "</td>" +
                    "<td id='pass'>" + item.pass + "</td>" +
                    "<td id='Edit'><button class='btn' type='button' onclick='myFunction(" +
                    item.id +
                    ")'> Edit </button></td>" +
                    "<td id='Delete'><button class='btn' type='button' onclick='myFunction2(" +
                    item.id +
                    ")'> Delete </button></td>"
                "</tr>";
                $('#Table').append(rows);
            }); //End of foreach Loop
            console.log(data);
        }, //End of AJAX Success function

        failure: function (data) {
            alert(data.responseText);
        }, //End of AJAX failure function
        error: function (data) {
            alert(data.responseText);
        } //End of AJAX error function
    });

});


function formValidate() {
    //MAIN
    var email = document.getElementById("email").value;
    if (email.length < 1) {
        alert("Empty Email")
    }
    else
        (validateEmail(email)) ? "" : alert("Invalid Email")


    var name = document.getElementById("name").value;
    if (name.length < 1) {
        alert("Empty Name")
    }
    else
        (validateName(name)) ? "" : alert("Invalid Email");


    var password = document.getElementById("pass").value;
    if (password.length < 1) {
        alert("Empty Password")
    }
    else if (password.length < 6) {
        alert("Password should be atleast 6 characters long.")
    }
    else
        (validatePassword(password)) ? "" : alert("Password can only contain digits and alphabets ")


    var confPassword = document.getElementById("txtConfirmPass").value;
    if (confPassword.length < 1) {
        alert("Confirm Password")
    }
    else {
        (matchPassword(password, confPassword)) ? "" : alert("Password and onfirm password are not same")
    }

    var city = document.getElementById("city").value;

    if (city.length < 1) {
        alert("Error City Name")
    }
    else {
        (validateCity(city)) ? "" : alert("Invalid City Name");
        var no = document.getElementById("no").value;
    }

    if (no.length < 1) {
        alert("Number empty")
    }
    else {
        (validateNo(no)) ? "" : alert("Invalid Number")
    }

    // POST
    var person = new Object();
    person.email = $('#email').val();
    person.name = $('#name').val();
    person.city = $('#city').val();
    person.no = $('#no').val();
    person.pass = $('#pass').val();
    const myJSON = JSON.stringify(person);
    console.log(myJSON);
    $.ajax({
        url: 'https://localhost:44318/api/form',
        type: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: myJSON,
        success: function (data, textStatus, xhr) {
            console.log(data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }
    })
    location.reload()
}



// PUT
function myFunction(ida) {
    var person = new Object();
    person.id = ida
    person.email = $('#email').val();
    person.name = $('#name').val();
    person.city = $('#city').val();
    person.no = $('#no').val();
    person.pass = $('#pass').val();
    const myJSON = JSON.stringify(person)
    console.log(myJSON);

    $.ajax({
        type: "PUT",
        url: "https://localhost:44318/api/form/" + ida,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: myJSON,
        cache: false,
        success: function (d) {
            if (d.success == true)
                window.location = "index.html";
            else { }
        },
        error: function (xhr, textStatus, errorThrown) {
            // TODO: Show error
        }
    })
    location.reload()
}



//DELETE
function myFunction2(ida) {
    $.ajax({
        type: "DELETE",
        url: "https://localhost:44318/api/form/" + ida,
        cache: false,
        success: function (d) {
            if (d.success == true)
                window.location = "index.html";
            else { }
        },
        error: function (xhr, textStatus, errorThrown) {
            // TODO: Show error
        }
    })
    location.reload();

}




