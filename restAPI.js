// $(document).ready(function () {
//     $.ajax({
//         type: "GET",
//         url: "https://localhost:44318/api/form",
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         success: function (data) {
//             //alert(JSON.stringify(data));                  
//             $("#DIV").html('');
//             var DIV = '';
//             $.each(data, function (i, item) {
//                 var rows = "<tr>" +
//                     "<td id='RegdNo'>" + item.email + "</td>" +
//                     "<td id='Name'>" + item.name + "</td>" +
//                     "<td id='Address'>" + item.city + "</td>" +
//                     "<td id='PhoneNo'>" + item.no + "</td>" +
//                     "<td id='pass'>" + item.pass + "</td>" +
//                     "<td id='Edit'><button type='button' onclick='myFunction(" +
//                     item.id +
//                     ")'> Edit </button></td>" +
//                     "<td id='Delete'><button type='button' onclick='myFunction2(" +
//                     item.id +
//                     ")'> Delete </button></td>"
//                 "</tr>";
//                 $('#Table').append(rows);
//             }); //End of foreach Loop   
//             console.log(data);
//         }, //End of AJAX Success function  

//         failure: function (data) {
//             alert(data.responseText);
//         }, //End of AJAX failure function  
//         error: function (data) {
//             alert(data.responseText);
//         } //End of AJAX error function  
//     });

// });



/*$(document).ready(function () {
    $("#Save").click(function () {
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
        });
    });
});*/

// function myFunction(ida) {
//     var person = new Object();
//     person.id = ida
//     person.email = $('#email').val();
//     person.name = $('#name').val();
//     person.city = $('#city').val();
//     person.no = $('#no').val();
//     person.pass = $('#pass').val();
//     const myJSON = JSON.stringify(person)
//     console.log(myJSON);

//     $.ajax({
//         type: "PUT",
//         url: "https://localhost:44318/api/form/" + ida,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         data: myJSON,
//         cache: false,
//         success: function (d) {
//             if (d.success == true)
//                 window.location = "index.html";
//             else { }
//         },
//         error: function (xhr, textStatus, errorThrown) {
//             // TODO: Show error
//         }
//     })

// }

