//Categorias//

function limpiarCamposCat() {
    var campo = $("#ID_category");
    campo.val("");
    campo = $("#Name_category");
    campo.val("");
    campo = $("#Description_category");
    campo.val("");
}

function consultarCat() {
    $.ajax({
        url: "http://150.230.30.111:8080/api/Category/all",
        type: "GET",
        dataType: "json",
        complete: function(xhr, status) {},
        success: function(json) {
            console.log(json)
            if (json.length > 0) {
                $("#Tabla_Categoria").empty();
                tabla =
                    //"<table  border='1'><tr><th>Id<th>Name<th>Description";
                    "<tr><th>Id<th>Name<th>Description";
                filas = "";
                for (i = 0; i < json.length; i++) {
                    console.log(i)
                    filas += "<tr>";
                    filas += "<td>" + json[i].id;
                    filas += "<td>" + json[i].name;
                    filas += "<td>" + json[i].description;
                    filas +=
                        '<td><button onclick="BorrarIdCat(' +
                        json[i].id +
                        ')">Borrar</button></td>';
                    filas += "</td>";
                }
                $("#Tabla_Categoria").append(tabla + filas);

                $("#Tabla_Categoria").append("</tr>");

                setTimeout(function() {
                    $("#Tabla_Categoria").empty();
                }, 10000);
            } else {
                alert("No hay nada por mostrar");
            }
        },
    });
}

function AgregarCat() {
    console.log("Agregar");

    var datos = {
        id: parseInt($("#ID_category").val()),
        name: $("#Name_category").val(),
        description:$("#Description_category").val() ,
    };
    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)
    console.log(datos)
    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Category/save",
        data: dataToSend,
        type: "POST",

        

        success:function(json){
                console.log(json);
            console.log("Se guardo la informacion con exito");
            alert("Se guardo la informacion con exito");
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown){
                window.location.reload()
            alert("No se guardo la informacion correctamente");
            console.log(textStatus, errorThrown)
        }
    });

    limpiarCamposCat();
}

function BorrarIdCat(Numid) {
    var datos = {
        id: Numid,
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "json",
        url: "http://150.230.30.111:8080/api/Category/" + datos.id,
        data: datos,
        contentType: "application/json",
        type: "DELETE",

        success:function(json){
            console.log(json);
        console.log("Se borro la informacion con exito");
        alert("Se borro la informacion con exito");
        window.location.reload()
    },

    error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
        alert("No se borro la informacion correctamente");
    }
    });
    consultarCat();
    limpiarCamposCat();
}

function BorrarCat() {
    console.log("Borrar");

    var datos = {
        id: parseInt($("#ID_category").val()),
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        url: "http://150.230.30.111:8080/api/Category/" + datos.id,
        data: dataToSend,
        contentType: "application/json",
        type: "DELETE",

        success:function(json){
            console.log(json);
        console.log("Se borro la informacion con exito");
        alert("Se borro la informacion con exito");
        window.location.reload()
    },

    error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
        alert("No se borro la informacion correctamente");
    }
    });
    limpiarCamposCat();
}

function ActualizarCat() {
    console.log("Actualizar");

    var datos = {
        id:parseInt($("#ID_category").val()),
        name: $("#Name_category").val(),
        description: $("#Description_category").val(),
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        url: "http://150.230.30.111:8080/api/Category/update",
        data: dataToSend,
        contentType: "application/JSON",
        type: "PUT",

    });
    limpiarCamposCat();
}

function consultarPorIdCat() {
    var id = $("#ID_category").val();
    $.ajax({
        url: "http://150.230.30.111:8080/api/Category/all",
        type: "GET",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        complete: function(xhr, status) {},
        success: function(json) {
            con = 0;
            if (json.length > 0) {
                console.log(json)
                console.log(id)
                for (i = 0; i < json.length; i++) {
                    if (id == json[i].id) {
                        con = 1;
                        $("#Tabla_Categoria").empty();
                        tabla =
                            "<table  border='1'><tr><th>Id<th>Name<th>Description<th>";
                        filas = "";
                        filas += "<tr>";
                        filas += "<td>" + json[i].id;
                        filas += "<td>" + json[i].name;
                        filas += "<td>" + json[i].description;
                        filas +=
                            '<td><button onclick="BorrarId(' +
                            json[i].id +
                            ')">Borrar</button></td>';
                        filas += "</td>";
                        $("#Tabla_Categoria").append(tabla + filas);
                        $("#Tabla_Categoria").append("</tr>");
                    }
                }
                setTimeout(function() {
                    $("#Tabla_Categoria").empty();
                }, 10000);
            }

            if (con == 0) {
                alert("No hay nada por mostrar");
            }
        },
    });
    limpiarCamposCat();
}


//Alquiler cubiculos//
function Agregar() {
    console.log("Agregar");

    var datos = {
        id: parseInt($("#mi_ID").val()),
        name: $("#mi_NAME").val(),
        target: $("#mi_TARGET").val(),
        capacity: parseInt($("#mi_CAPACITY").val()),
        description: $("#mi_description").val()        
    };
    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)
    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Lib/save",
        data: dataToSend,
        type: "POST",
    });
    alert("Se guardo correctamente")

    limpiarCampos1();
}

function BorrarId(Numid) {
    var datos = {
        id: Numid,
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Lib/" + datos.id,
        data: datos,
        contentType: "application/json",
        type: "DELETE",
    });
    alert("Se borro correctamente")

    consultar();
    limpiarCampos1();
}

function Borrar() {
    console.log("Borrar");

    var datos = {
        id: parseInt($("#mi_ID").val()),
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Lib/" + datos.id,
        data: datos,
        contentType: "application/json",
        type: "DELETE",
    });
    alert("Se borro correctamente")
    limpiarCampos1();
}

function Actualizar() {
    console.log("Actualizar");

    var datos = {
        id: parseInt($("#mi_ID").val()),
        name: $("#mi_NAME").val(),
        target: $("#mi_TARGET").val(),
        capacity: parseInt($("#mi_CAPACITY").val()),
        description: $("#mi_description").val() 
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Lib/update",
        data: dataToSend,
        contentType: "application/json",
        type: "PUT",
    });
    alert("Se actualizo correctamente")
    limpiarCampos1();
}

function consultar() {
    $.ajax({
        url: "http://150.230.30.111:8080/api/Lib/all",
        type: "GET",
        dataType: "JSON",
        complete: function(xhr, status) {},
        success: function(json) {
            console.log (json)
            let items = json
            if (json.length > 0) {
                $("#Tabla_Cubiculos").empty();
                tabla =
                    "<table  border='1'><tr><th>Id<th>Name<th>Target<th>Capacity<th>Description<th>";
                filas = "";
                for (i = 0; i < json.length; i++) {
                    filas += "<tr>";
                    filas += "<td>" + json[i].id;
                    filas += "<td>" + json[i].name;
                    filas += "<td>" + json[i].target;
                    filas += "<td>" + json[i].capacity;
                    filas += "<td>" + json[i].description;

                    filas +=
                        '<td><button onclick="BorrarId(' +
                        json[i].id +
                        ')">Borrar</button></td>';
                    filas += "</td>";
                }
                $("#Tabla_Cubiculos").append(tabla + filas);

                $("#Tabla_resultados").append("</tr>");

                setTimeout(function() {
                    $("#Tabla_Cubiculos").empty();
                }, 10000);
            } else {
                alert("No hay nada por mostrar");
            }
        },
    });
}

function consultarPorId() {
    var id = $("#mi_ID").val();
    $.ajax({
        url: "http://150.230.30.111:8080/api/Lib/all",
        type: "GET",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        complete: function(xhr, status) {},
        success: function(json) {
            con = 0;
            if (json.length > 0) {
                console.log(json)
                console.log(id)
                for (i = 0; i < json.length; i++) {
                    if (id == json[i].id) {
                        con = 1;
                        $("#Tabla_Cubiculos").empty();
                        tabla =
                            "<table  border='1'><tr><th>Id<th>Nombre<th>Target<th>Capacidad<th>Description<th>";
                        filas = "";
                        filas += "<tr>";
                        filas += "<td>" + json[i].id;
                        filas += "<td>" + json[i].name;
                        filas += "<td>" + json[i].target;
                        filas += "<td>" + json[i].capacity;
                        filas += "<td>" + json[i].description;
                        filas +=
                            '<td><button onclick="BorrarId(' +
                            json[i].id +
                            ')">Borrar</button></td>';
                        filas += "</td>";
                        $("#Tabla_Cubiculos").append(tabla + filas);
                        $("#Tabla_resultados").append("</tr>");
                    }
                }
                setTimeout(function() {
                    $("#Tabla_Cubiculos").empty();
                }, 10000);
            }

            if (con == 0) {
                alert("No hay nada por mostrar");
            }
        },
    });
    limpiarCampos1();
}

function limpiarCampos1() {
    var campo = $("#mi_ID");
    campo.val("");
    campo = $("#mi_TARGET");
    campo.val("");
    campo = $("#mi_CAPACITY");
    campo.val("");
    campo = $("#mi_CATEGORY_ID");
    campo.val("");
    campo = $("#mi_NAME");
    campo.val("");
    campo = $("#mi_description");
    campo.val("");
}

//-- -- -- -- -- -- -- -- CLIENTE -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//

function Agregar2() {
    console.log("Agregar");

    var datos = {
        id: $("#ID_client").val(),
        email: $("#Email_client").val(),
        password:$("#password").val(),
        name: $("#Name_client").val(),
        age: $("#age_client").val(),
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Client/save",
        data: dataToSend,
        type: "POST",
    });
    alert("Se guardo correctamente")
    limpiarCampos2();
}

function BorrarId2(Numid) {
    var datos = {
        id: Numid,
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Client/" + datos.id,
        data: datos,
        contentType: "application/json",
        type: "DELETE",
    });
    alert("Se borro correctamente")

    consultar2();
    limpiarCampos2();
}

function Borrar2() {
    console.log("Borrar");

    var datos = {
        id: parseInt($("#ID_client").val()),
    };

    let dataToSend = JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        url: "http://150.230.30.111:8080/api/Client/" + datos.id,
        data: datos,
        contentType: "application/json",
        type: "DELETE",
    });
    limpiarCampos2();
}

function Actualizar2() {
    console.log("Actualizar");

    var datos = {
        idClient: parseInt($("#ID_client").val()),
        email: $("#Email_client").val(),
        password: $("#password").val(),
        name: $("#Name_client").val(),
        age: parseInt($("#age_client").val()),
    };

    let dataToSend = JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        url: "http://150.230.30.111:8080/api/Client/update",
        data: dataToSend,
        contentType: "application/JSON",
        type: "PUT",
    });
    alert("Se actualizo correctamente")
    limpiarCampos2();
}

function consultar2() {
    $.ajax({
        url: "http://150.230.30.111:8080/api/Client/all",
        type: "GET",
        dataType: "json",
        complete: function(xhr, status) {},
        success: function(json) {
            console.log(json)
            if (json.length > 0) {
                $("#Tabla_Clientes").empty();
                tabla =
                    //"<table  border='1'><tr><th>Id<th>email<th>password<th>name<th>age<th>";
                    "<tr><th>Id<th>email<th>password<th>name<th>age<th>";
                filas = "";
                for (i = 0; i < json.length; i++) {
                    console.log(i)
                    filas += "<tr>";
                    filas += "<td>" + json[i].idClient;
                    filas += "<td>" + json[i].email;
                    filas += "<td>" + json[i].password;
                    filas += "<td>" + json[i].name;
                    filas += "<td>" + json[i].age;
                    filas +=
                        '<td><button onclick="BorrarId2(' +
                        json[i].idClient +
                        ')">Borrar</button></td>';
                    filas += "</td>";
                }
                $("#Tabla_Clientes").append(tabla + filas);

                $("#Tabla_Clientes").append("</tr>");

                setTimeout(function() {
                    $("#Tabla_Clientes").empty();
                }, 10000);
            } else {
                alert("No hay nada por mostrar");
            }
        },
    });
}

function consultarPorId2() {
    var id = $("#ID_client").val();
    $.ajax({
        url: "http://150.230.30.111:8080/api/Client/all",
        type: "GET",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        complete: function(xhr, status) {},
        success: function(json) {
            con = 0;
            if (json.length > 0) {
                console.log(json)
                console.log(id)
                for (i = 0; i < json.length; i++) {
                    if (id == json[i].id) {
                        con = 1;
                        $("#Tabla_Clientes").empty();
                        tabla =
                            "<table  border='1'><tr><th>idClient<th>email<th>password<th>name<th>age<th>";
                        filas = "";
                        filas += "<tr>";
                        filas += "<td>" + json[i].idClient;
                        filas += "<td>" + json[i].email;
                        filas += "<td>" + json[i].password;
                        filas += "<td>" + json[i].name;
                        filas += "<td>" + json[i].age;
                        filas +=
                            '<td><button onclick="BorrarId2(' +
                            json[i].idClient +
                            ')">Borrar</button></td>';
                        filas += "</td>";
                        $("#Tabla_Clientes").append(tabla + filas);
                        $("#Tabla_Clientes").append("</tr>");
                    }
                }
                setTimeout(function() {
                    $("#Tabla_Clientes").empty();
                }, 10000);
            }

            if (con == 0) {
                alert("No hay nada por mostrar");
            }
        },
    });
    limpiarCampos2();
}

function limpiarCampos2() {
    var campo = $("#ID_client");
    campo.val("");
    campo = $("#Name_client");
    campo.val("");
    campo = $("#Email_client");
    campo.val("");
    campo = $("#age_client");
    campo.val("");
    campo = $("#password");
    campo.val("");
}
//-- -- -- -- -- -- -- --MENESAJE -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -function Agregar2() {
//https://g1b3f1809d5e702-dbreto2.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message
function Agregar3() {
    console.log("Agregar");

    var datos = {
        id: parseInt($("#mensaje_ID").val()),
        messageText: $("#mensaje_text").val(),
    };
    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Message/save",
        data: dataToSend,
        type: "POST",
    });
    limpiarCampos3();
}

function BorrarId3(Numid) {
    var datos = {
        id: Numid,
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Message/"+ datos.id,
        data: datos,
        contentType: "application/json",
        type: "DELETE",
    });
    consultar3();
    limpiarCampos3();
}

function Borrar3() {
    console.log("Borrar");

    var datos = {
        id: $("#mensaje_ID").val(),
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Message/" + datos.id,
        data: datos,
        contentType: "application/json",
        type: "DELETE",
    });
    limpiarCampos3();
}

function Actualizar3() {
    console.log("Actualizar");

    var datos = {
        idMessage: parseInt($("#mensaje_ID").val()),
        messageText: $("#mensaje_text").val(),
    };

    let dataToSend = JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Message/update",
        data: dataToSend,
        contentType: "application/JSON",
        type: "PUT",
    });

    limpiarCampos3();
}

function consultar3() {
    $.ajax({
        url: "http://150.230.30.111:8080/api/Message/all",
        type: "GET",
        dataType: "json",
        complete: function(xhr, status) {},
        success: function(json) {
            if (json.length > 0) {
                $("#Tabla_Mensajes").empty();
                tabla = "<table  border='1'><tr><th>Id<th>Mensaje";
                filas = "";
                for (i = 0; i < json.length; i++) {
                    filas += "<tr>";
                    filas += "<td>" + json[i].idMessage;
                    filas += "<td>" + json[i].messageText;
                    filas +=
                        '<td><button onclick="BorrarId3(' +
                        json[i].idMessage +
                        ')">Borrar</button></td>';
                    filas += "</td>";
                }
                $("#Tabla_Mensajes").append(tabla + filas);

                $("#Tabla_Mensajes").append("</tr>");

                setTimeout(function() {
                    $("#Tabla_Mensajes").empty();
                }, 10000);
            } else {
                alert("No hay nada por mostrar");
            }
        },
    });
}

function consultarPorId3() {
    var id = $("#mensaje_ID").val();
    $.ajax({
        url: "http://150.230.30.111:8080/api/Message/all",
        type: "GET",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        complete: function(xhr, status) {},
        success: function(json) {
            con = 0;
            console.log(json)
            if (json.length > 0) {
                                console.log(id)
                for (i = 0; i < json.length; i++) {
                    if (id == json[i].id) {
                        con = 1;
                        $("#Tabla_Mensajes").empty();
                        tabla =
                            "<table  border='1'><tr><th>Id<th>messageText<th>";
                        filas = "";
                        filas += "<tr>";
                        filas += "<td>" + json[i].idMessage;
                        filas += "<td>" + json[i].messageText;
                        filas +=
                            '<td><button onclick="BorrarId3(' +
                            json[i].idMessage +
                            ')">Borrar</button></td>';
                        filas += "</td>";
                        $("#Tabla_Mensajes").append(tabla + filas);
                        $("#Tabla_Mensajes").append("</tr>");
                    }
                }
                setTimeout(function() {
                    $("#Tabla_Mensajes").empty();
                }, 10000);
            }

            if (con == 0) {
                alert("No hay nada por mostrar");
            }
        },
    });
    limpiarCampos3();
}

function limpiarCampos3() {
    var campo = $("#mensaje_ID ");
    campo.val("");
    campo = $("#mensaje_text");
    campo.val("");
}

//Reservation//

function limpiarCamposRes() {
    var campo = $("#ID_reservation");
    campo.val("");
    campo = $("#startDate");
    campo.val("");
    campo = $("#devolutionDate");
    campo.val("");
}

function consultarRes() {
    $.ajax({
        url: "http://150.230.30.111:8080/api/Reservation/all",
        type: "GET",
        dataType: "json",
        complete: function(xhr, status) {},
        success: function(json) {
            console.log(json)
            if (json.length > 0) {
                $("#Tabla_Categoria").empty();
                tabla =
                    //"<table  border='1'><tr><th>Id<th>StartDate<th>DevolutionDate<th>";
                    "<tr><th>idReservation<th>startDate<th>devolutionDate<th>";
                filas = "";
                for (i = 0; i < json.length; i++) {
                    console.log(i)
                    filas += "<tr>";
                    filas += "<td>" + json[i].idReservation;
                    filas += "<td>" + json[i].startDate;
                    filas += "<td>" + json[i].devolutionDate;
                    filas +=
                        '<td><button onclick="BorrarIdRes(' +
                        json[i].idReservation +
                        ')">Borrar</button></td>';
                    filas += "</td>";
                }
                $("#Tabla_Reservation").append(tabla + filas);

                $("#Tabla_Reservation").append("</tr>");

                setTimeout(function() {
                    $("#Tabla_Reservation").empty();
                }, 10000);
            } else {
                alert("No hay nada por mostrar");
            }
        },
    });
}

function AgregarRes() {
    console.log("Agregar");

    var datos = {
        idReservation: $("#ID_reservation").val(),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
    };
    
    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)
    $.ajax({
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        url: "http://150.230.30.111:8080/api/Reservation/save",
        data: dataToSend,
        type: "POST",

        

        success:function(json){
                console.log(json);
            console.log("Se guardo la informacion con exito");
            alert("Se guardo la informacion con exito");
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown){
                window.location.reload()
            alert("No se guardo la informacion correctamente");
            console.log(textStatus, errorThrown)
        }
    });

    limpiarCamposRes();
}

function BorrarIdRes(Numid) {
    var datos = {
        id: Numid,
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        url: "http://150.230.30.111:8080/api/Reservation/" + + datos.id,
        data: datos,
        contentType: "application/json",
        type: "DELETE",

        success:function(json){
            console.log(json);
        console.log("Se borro la informacion con exito");
        alert("Se borro la informacion con exito");
        window.location.reload()
    },

    error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
        alert("No se borro la informacion correctamente");
    }
    });
    consultarRes();
    limpiarCamposRes();
}

function BorrarRes() {
    console.log("Borrar");

    var datos = {
        id: parseInt($("#ID_reservation").val()),
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        url: "http://150.230.30.111:8080/api/Reservation/" + datos.id,
        data: dataToSend,
        contentType: "application/json",
        type: "DELETE",

        success:function(json){
            console.log(json);
        console.log("Se borro la informacion con exito");
        alert("Se borro la informacion con exito");
        window.location.reload()
    },

    error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
        alert("No se borro la informacion correctamente");
    }
    });
    limpiarCamposRes();
}

function ActualizarRes() {
    console.log("Actualizar");

    var datos = {
        idReservation:parseInt($("#ID_reservation").val()),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
    };

    let dataToSend=JSON.stringify(datos);
    console.log(dataToSend)

    $.ajax({
        dataType: "JSON",
        url: "http://150.230.30.111:8080/api/Reservation/update",
        data: dataToSend,
        contentType: "application/JSON",
        type: "PUT",

    });
    limpiarCamposRes();
}

function consultarPorIdRes() {
    var id = $("#ID_reservation").val();
    $.ajax({
        url: "http://150.230.30.111:8080/api/Reservation/all",
        type: "GET",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        complete: function(xhr, status) {},
        success: function(json) {
            con = 0;
            if (json.length > 0) {
                console.log(json)
                console.log(id)
                for (i = 0; i < json.length; i++) {
                    if (id == json[i].id) {
                        con = 1;
                        $("#Tabla_Reservation").empty();
                        tabla =
                            //"<table  border='1'><tr><th>idReservation<th>startDate<th>devolutionDate<th>";
                            "<tr><th>idReservation<th>startDate<th>devolutionDate<th>";
                        filas = "";
                        filas += "<tr>";
                        filas += "<td>" + json[i].idReservation;
                        filas += "<td>" + json[i].startDate;
                        filas += "<td>" + json[i].devolutionDate;
                        filas +=
                            '<td><button onclick="BorrarIdRes(' +
                            json[i].idReservation +
                            ')">Borrar</button></td>';
                        filas += "</td>";
                        $("#Tabla_Reservation").append(tabla + filas);
                        $("#Tabla_Reservation").append("</tr>");
                    }
                }
                setTimeout(function() {
                    $("#Tabla_Reservation").empty();
                }, 10000);
            }

            if (con == 0) {
                alert("No hay nada por mostrar");
            }
        },
    });
    limpiarCamposRes();
}