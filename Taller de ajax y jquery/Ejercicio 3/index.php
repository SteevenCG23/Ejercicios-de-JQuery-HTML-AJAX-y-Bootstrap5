<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Registrar clientes</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device=width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>

    <!--Este código lo que hace es registrar el nombre de un usuario en una base de datos.-->

        <div class="container">
        <form action="">
         <div class="row">
            <div class="col-md-4">
                <h2 style="text-align: center;">Registrar clientes</h2>
            </div>
         </div>

         <div class="row">
            <div class="col-md-4">
                <label for="">Nombre</label>
                <input type="text" name="nombre" id="nombre" class="form-control">
            </div>
         </div>
        <br>
         <div class="row">
            <div class="col-md-4">
                <button id="upSubmit" type="button" class="btn btn-primary btn-block">Registrar</button>
            </div>
         </div>
        <br>
         <div class="row">
            <div class="col-md-4">
                <span class="text-danger align-middle" id="Msg"></span>
            </div>
         </div>
        </form>
        </div>
    </body>
</html>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        $(document).on("click","#upSubmit", function(){
            var valor = "update";
            var nombre = jQuery('#nombre').val();
            $('#Msg').html('<div class="loading"><img src"files/busy.gif" alt="loading" />&nbsp;&nbsp;Procesando, por favor espere...</div>');
            $.ajax({
                url:"update.php",
                type:"POST",
                cache:false,
                data:{valor:valor,nombre:nombre},
                success:function(data){
                    if (data ==1) {
                        jQuery('#nombre').val('');
                        $("#Msg").html("<div class='alert alert-success' role='alert'>Registrado.</div>");
                        }else{
                        jQuery('#nombre').val('');
                        $("#Msg").html("<div class='alert alert-sanger' role='alert'>Error.</div>");
                    }
                }
            });
        });
    });
</script>