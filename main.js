$(".bl").hide()
//data 
var data = [
    {
        username: "admin",
        password: "admin"
    }
]
//

//patient onclick
$("#lst").on("click", function () {
    $(".bli").hide()
    $(".bl").hide()
    $(".bll").show()


})
//admin onclick
$("#lst1").on("click", function () {
    $(".bll").hide()
    $(".bl").hide()
    $(".bli").show()
    $("#password").val("")
    $("#login").val("")
})
//data modling
function createAlist(Firstname, lastname, email, birthday, occupation) {
    var obj = {}
    obj.name = Firstname
    obj.lastname = lastname
    obj.email = email
    obj.birthday = birthday
    obj.occupation = occupation
    return obj
}
//take a apointment
$("#btn1").click(function (e) {

    e.preventDefault();
    $("#list1").empty()
    var client = createAlist($("#first-name").val(), $("#latst-name").val(), $("#email").val(), $("#birth-day").val(), $("#dropdown").val())
    data.push(client)
    $("#first-name").val("")
    $("#latst-name").val("")
    $("#email").val("")
    $("#birth-day").val("")
    $("#dropdown").val("")

})
var str = ""
//login as a doctor
$("#btn").click(function () {

    if ($("#login").val() === data[0].username && $("#password").val() === data[0].password) {
        $("#list-ul").empty()
        for (var i = 1; i < data.length; i++) {
            str += "patient" + i + ":" + data[i].name + " " + data[i].lastname + " " + data[i].email + " " + data[i].birthday + " " + data[i].occupation
            $("#list-ul").append("<li>" + str + "</li>")
            str = ""
        }

        $(".bli").hide()
        
        $(".bl").show()
    }
    else {
        alert('password or loging wrong')
    }
    $("#password").val("")
    $("#login").val("")
})