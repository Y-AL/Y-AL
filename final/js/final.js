$(() => {

    var totalexpenses = 0
    var totalincome = 0

    var theme = 0
        //var balance = 0

    $('#usernamebtn').on('click', () => {
        console.log('按到了喔')
        var name = $('#username').val()
        $('#title').text(name + "'s Money Manager")
    })

    //change the theme
    $('#colorbtn').on('click', () => {
        if (theme == 0) {
            $('#bgcolor').css({ "background-color": "#d6e5fa" })
            $('#blncard').css({ "background-color": "#d6e5fa" })
            $('#blncard').css({ "color": "#3c6f9c" })
                //$('#bgcolor').css({ "background-color": "#ffc6c7" })
            $('#title1').css({ "color": "#3c6f9c" })
            $('#title').css({ "color": "#3c6f9c" })
            theme = 1
        } else if (theme == 1) {
            $('#bgcolor').css({ "background-color": "#ffd369" })
            $('#blncard').css({ "background-color": "#ffd369" })
            $('#blncard').css({ "color": "black" })
            $('#title1').css({ "color": "black" })
            $('#title').css({ "color": "black" })
            theme = 0
        }
        $('#gsbtn').toggleClass("btn-dark")
        $('#usbtn').toggleClass("btn-dark")
        $('#hebtn').toggleClass("btn-dark")
        $('#colorbtn').toggleClass("btn-outline-dark")
        $('#usernamebtn').toggleClass("btn-outline-dark")

    })

    $('#exbtn').on('click', () => {
        console.log('按到了喔')

        // 輸入
        var addtotalexpenses = $('#exmoney').val()
        var expdate = $('#exdate').val()
        if ($('#excategory').val() == 01) {
            $('#food').append("$ " + addtotalexpenses + " " + "/" + " " + expdate + "<br>")
        } else if ($('#excategory').val() == 02) {
            $('#bills').append("$ " + addtotalexpenses + " " + "/" + " " + expdate + "<br>")
        } else if ($('#excategory').val() == 03) {
            $('#tax').append("$ " + addtotalexpenses + " " + "/" + " " + expdate + "<br>")
        } else if ($('#excategory').val() == 04) {
            $('#transportation').append("$ " + addtotalexpenses + " " + "/" + " " + expdate + "<br>")
        } else if ($('#excategory').val() == 05) {
            $('#entertainment').append("$ " + addtotalexpenses + " " + "/" + " " + expdate + "<br>")
        } else if ($('#excategory').val() == 06) {
            $('#sport').append("$ " + addtotalexpenses + " " + "/" + " " + expdate + "<br>")
        } else if ($('#excategory').val() == 07) {
            $('#pet').append("$ " + addtotalexpenses + " " + "/" + " " + expdate + "<br>")
        } else if ($('#excategory').val() == 08) {
            $('#health').append("$ " + addtotalexpenses + " " + "/" + " " + expdate + "<br>")
        } else if ($('#excategory').val() == 09) {
            $('#others').append("$ " + addtotalexpenses + " " + "/" + " " + expdate + "<br>")
        }


        addtotalexpenses = Number(addtotalexpenses)
        totalexpenses += addtotalexpenses

        var exprogress = totalexpenses / (totalexpenses + totalincome) * 100
        $('#exprog').css({ "width": exprogress + "%" })
        $('#exprog').html("<div>" + exprogress + " %</div>")
        $('#inprog').css({ "width": (100 - exprogress) + "%" })
        $('#inprog').html("<div>" + (100 - exprogress) + " %</div>")
        $('#bln').html("<p>Balance: " + (totalincome - totalexpenses) + "</p>")


        // 輸出
        $('#extotal').val(totalexpenses)
        $('#exmoney').val("")
        $('#excategory').val("00")
        $('exdate').val()


    })

    $('#inbtn').on('click', () => {
        console.log('按到了喔')

        // 輸入

        var addtotalincome = $('#inmoney').val()
        var incdate = $('#indate').val()
        if ($('#incategory').val() == 11) {
            $('#salary').append("$ " + addtotalincome + " " + "/" + " " + incdate + "<br>")
        } else if ($('#incategory').val() == 12) {
            $('#awards').append("$ " + addtotalincome + " " + "/" + " " + incdate + "<br>")
        } else if ($('#incategory').val() == 13) {
            $('#grants').append("$ " + addtotalincome + " " + "/" + " " + incdate + "<br>")
        } else if ($('#incategory').val() == 14) {
            $('#refunds').append("$ " + addtotalincome + " " + "/" + " " + incdate + "<br>")
        } else if ($('#incategory').val() == 15) {
            $('#investments').append("$ " + addtotalincome + " " + "/" + " " + incdate + "<br>")
        } else if ($('#incategory').val() == 16) {
            $('#lottery').append("$ " + addtotalincome + " " + "/" + " " + incdate + "<br>")
        } else if ($('#incategory').val() == 17) {
            $('#others').append("$ " + addtotalincome + " " + "/" + " " + incdate + "<br>")
        }

        addtotalincome = Number(addtotalincome)
        totalincome += addtotalincome

        var inprogress = totalincome / (totalincome + totalexpenses) * 100
        $('#inprog').css({ "width": inprogress + "%" })
        $('#inprog').html("<div>" + inprogress + " %</div>")
        $('#exprog').css({ "width": (100 - inprogress) + "%" })
        $('#exprog').html("<div>" + (100 - inprogress) + " %</div>")

        $('#bln').html("<p>Balance: " + (totalincome - totalexpenses) + "</p>")




        // 輸出
        $('#intotal').val(totalincome)
        $('#inmoney').val("")
        $('#incategory').val("00")
    })
})
