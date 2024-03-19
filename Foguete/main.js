        // Quando a página é rolada, chama a função para manipular o cabeçalho
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("myHeader").style.top = "0";
            } else {
                document.getElementById("myHeader").style.top = "-120px"; /* Altura do cabeçalho + espaço de margem */
            }
        }