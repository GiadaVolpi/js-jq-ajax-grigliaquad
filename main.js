// creare una griglia formata da 6x6 quadratini (anche in html va bene). Ad ogni click su un quadratino parte una chiamata AJAX all'API boolean che restituisce un numero intero
// A seconda del valore restituito dall'API bisogna colorare il quadratino su cui si è cliccato, secondo queste regole:
// se il numero restituito dalle API è <= 5, il quadratino diventa giallo
// se il numero restituito dalle API è > 5, il quadratino diventa verde

$ (document).ready (function () {

    var casella = '<div class="quad"></div>';

    for (var i = 1; i <= 36; i++) {
        $ (".container").append (casella);
    }

    $ (".quad").click (function () {
        var that = $(this);

        $.ajax ({
            "url": "https://flynn.boolean.careers/exercises/api/random/int",
            "method": "GET",
            "success": function (data) {
                var estrazione = data.response;
                console.log("Il numero estratto è: " + estrazione);
                if (!that.hasClass('giallo') && !that.hasClass('verde')) {
                    if (estrazione <= 5) {
                        that.addClass ("giallo");
                        that.append (estrazione);
                    } else {
                        that.addClass ("verde");
                        that.append (estrazione);
                    }
                }
            },
            "error": function () {
                alert ("Error");
            }
        });


    })
});
