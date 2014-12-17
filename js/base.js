/*------------------------------------------------------------------------------
 JS Document (https://developer.mozilla.org/en/JavaScript)

 project:    penisole
 created:    2013-02
 author:     sanjus

 ----------------------------------------------------------------------------- */

/*  =VARIABLES PARAMETRABLES
 ----------------------------------------------------------------------------- */

var errors = new Array(); //the key: has to be the identifiant of the element to check
errors["nom"] = "Veuillez renseigner votre nom";
errors["prenom"] = "Veuillez renseigner votre pr\xE9nom";
errors["email"] = "Veuillez renseigner correctement votre email";
errors["comment"] = "Veuillez saisir votre message";

/* =MAJX_CORE (http://code.google.com/p/majx-js/)
 ----------------------------------------------------------------------------- */
(function(){if(typeof majx=="undefined"){majx={};majx.init=function(){if(!majx.config){majx.config={};}}();}}());majx.set=function(){var e=arguments[0]||{};var b=null;var d=arguments.length;var c=1;if(d==c){e=majx.config;--c;}for(;c<d;c++){if((b=arguments[c])!=null){for(var a in b){var f=e[a];var g=b[a];if(e===g){continue;}else{if(g!==undefined){e[a]=g;}}}}}majx.config=e;};


/*  =CONSTANTES
 ----------------------------------------------------------------------------- */
//jQuery.noConflict();
var d = document;
var w = window;
pm = {};
majx.set({
    /*firebuglite : {
     active : false, // disable (false) in production environment
     url : 'js/firebug-lite-modem.js'
     }*/
});


/*  =UTILITIES
 ----------------------------------------------------------------------------- */
var log = function(x) {
    if (typeof console != 'undefined') {
        console.log(x);
    }
};



/*  =WINDOW.ONLOAD
----------------------------------------------------------------------------- */
jQuery(document).ready(function(){

    // Call Functions
    pm.scrollToMe('.link-scroll');	// smooth scroll to anchors
    pm.parralax();
    pm.LetterEffect();
    pm.animateMenu();
    pm.carrousel();
    pm.inform.go(); //form control on : 06- ; 09- ; 10-


});

/* =SCROLL_TO_ME
 ------------------------------------------------------------------------------*/
pm.scrollToMe = function(classname) {
    var sourceLink = jQuery(classname);
    if(sourceLink.length > 0) {
        sourceLink.bind('click', function(){
            var id = jQuery(this).attr('href').split('#')[1];
            jQuery('html,body').animate({scrollTop: jQuery('#'+id).offset().top});
            return false;
        });
    }
};


/* parralax
-------------------------------------------------------------------------------------*/
//.parallax(xPosition, adjuster, inertia, outerHeight)
//xPosition - Position horizontale de l'élément (css)
//adjuster - La position Y de départ
//inertia - Vitesse en fonction du Scroll. Exemple: 0.1 est 1/10 ème de la vitesse du scroll. 2 = deux fois la vitesse du scroll.
//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

pm.parralax = function(){
    $('#slide1').parallax("center", 0,    0.1, true);
    $('#slide2').parallax("center", 1000, 0.1, true);
    $('#slide3').parallax("center", 2000, 0.1, true);
    $('#slide4').parallax("center", 3000, 0.1, true);
    $('#slide5').parallax("center", 4200, 0.1, true);
    $('#footer').parallax("center", 4600, 0.1, true);


};

/* letter Effects
 -------------------------------------------------------------------------------------*/

pm.LetterEffect = function(){

    $(".cs-text-cut").lettering('words');

};

/* =ANIMATE_MENU
 ------------------------------------------------------------------------------*/
pm.animateMenu = function() {

    jQuery('#bottom').hide();

    // Animate menu scroll to content
    jQuery('#menu li a').click(function(){
        jQuery('#menu li a').removeClass('active');
        jQuery(this).addClass('active');

        var id = jQuery(this).attr('href').split('#')[1];

        jQuery('html,body').animate({scrollTop: jQuery('#'+id).offset().top },1000);

        return false;
    });

    // Adjust menu
    jQuery(window).scroll(function(){
        var winTop = jQuery(window).scrollTop();

        var sections = [];
        jQuery('#menu li').find('a.link').each(function(){
            sections.push(jQuery(jQuery(this).attr('href')).offset().top-60);
        });

        sections.push(jQuery('#footer').offset().top);

        jQuery('#header').addClass('scrolled');
        jQuery('#menu li a.link').removeClass('active');

        if(winTop == 0){
            jQuery('#header').removeClass('scrolled');
            jQuery('#menu li a.link').removeClass('active');
        }

        for(var i = 0; i < sections.length-1; i++){
            if(winTop >= sections[i] && winTop < sections[i+1]){
                jQuery('#menu li a.link').removeClass('active');
                jQuery('#menu li a:.linkeq('+i+')').addClass('active');
            }
        }
console.log(sections);
        if(winTop < 200)

        {
            jQuery('#bottom').hide();
        } else {
            jQuery('#bottom').fadeIn();
        }
    });

};

/* =carouFredSel
 ------------------------------------------------------------------------------*/

pm.carrousel = function() {
    var $l = $('#carousel-left'),
        $c = $('#carousel-center'),
        $r = $('#carousel-right');
    $l.carouFredSel({
        auto: false,
        items: 1,
        direction: 'right',
        prev: {
            button: '#prev',
            fx: 'uncover',
            onBefore: function() {
                setTimeout(function() {
                    $c.trigger( 'prev' );
                }, 100);
            }
        },
        next: {
            fx: 'cover'
        }
    });
    $c.carouFredSel({
        auto: false,
        items: 1,
        prev: {
            onBefore: function() {
                setTimeout(function() {
                    $r.trigger( 'prev' );
                }, 100);
            }
        },
        next: {
            onBefore: function() {
                setTimeout(function() {
                    $l.trigger( 'next' );
                }, 100);
            }
        }
    });
    $r.carouFredSel({
        auto: false,
        items: 1,
        prev: {
            fx: 'cover'
        },
        next: {
            button: '#next',
            fx: 'uncover',
            onBefore: function() {
                setTimeout(function() {
                    $c.trigger( 'next' );
                }, 100);
            }
        }
    });
};

/* =formulaire
----------------------------------------------------------*/
pm.inform = {};
pm.inform.go = function(){
    var formulaire = $("#form-suggestion");
    if (formulaire.length != 1) return;

    var fontClass = formulaire.find("label:eq(0)").attr("class");
    var error = new Array()
    $("[data-control]").each(function(){
        error.push($(this).attr("id"));
    });
    error.reverse();
    formulaire.submit(function(ze){
        $(".error").remove();
        $(".remplaced").removeClass("remplaced");
        for (var i = 0;i<error.length;i++){
            var toPut = $("#" + error[i]);
            if (! eval("pm.inform." + toPut.data("control"))(toPut.val())){
                var div = toPut.parent("div");
                div.find("label").addClass("remplaced");
                $('<label>',{ 'for' : error[i], 'class' : 'error ' + fontClass, 'text' : errors[error[i]] }).prependTo(div);
                /*toPut.focus();*/
            }
        }
        if ($(".error").length > 0) ze.preventDefault();
    });

};

pm.inform.saisie = function(str){
    return ! str ? false : str.replace(/ /g,"").length == 0 ? false : true;
};
pm.inform.mail = function(str){
    //http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return ! str ? false : re.test(str);
};
