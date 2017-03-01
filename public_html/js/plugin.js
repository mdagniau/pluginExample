(function ($) {
    $.extend($.fn, {

        // fonction publique à appeler sur un élément jQuery
        advertize: function (options) {

            // L'objet {} peut contenir des options par défaut, sinon ça sert à rien (comme là)
            var settings = $.extend({}, options);
            var carousel = this;

            // fonction privée : permet de décomposer le code du plugin
            function createSlides(params) {
                var slide, img, feature, link, btn;
                // Si les données fournissent des images et si en plus, il y a des caractéristiques
                
                
                
                
                // Si le nom, le prix et l'url de la page produit sont fournis, on affiche dans la dernière slide une page avec un bouton-lien vers la page produit
               
            }

            // Dans le corps de la fonction privée, on ne fait qu'appeler les méthodes privées
            createSlides(settings);
            // Et on transforme notre objet en carousel avec les options carousel
            carousel.slick(settings.carousel);

        }

    });
})(jQuery);