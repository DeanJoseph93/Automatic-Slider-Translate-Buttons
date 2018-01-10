/**
 * Created by  Dean Dolev Joseph.
 */

(function () {

    var



        status          =   ['english'],
        paraMain1		=   document.getElementById("paraMain1"),
        spanishBtn      =   document.getElementById("spanishBtn"),
        englishBtn      =   document.getElementById("englishBtn"),
        germanBtn       =   document.getElementById("germanBtn"),
        italianBtn      =   document.getElementById("italianBtn"),
        frenchBtn       =   document.getElementById("frenchBtn"),
        picMain         =   document.getElementById("picContainer"),
        myMainImage     =   document.getElementById("bannerHead"),
        imageArray      =   ["Images/slide1.jpg", "Images/slide2.jpg", "Images/slide3.jpg"],
        imageIndex      =   0,
        btns            =   document.querySelectorAll(".btn"),
        buttons         =   [
                                {
                                    id     : "englishBtn",
                                    src    : "Images/buckingham-palace.jpeg",
                                    value  : "english",
                                    text   : "The world is the planet Earth and all life upon it, including human civilization. In a philosophical context, the world is the whole of the physical Universe, or an ontological world. In a theological context, the world is the material or the profane sphere, as opposed to the celestial, spiritual, transcendent or sacred. The end of the world refers to scenarios of the final end of human history, often in religious contexts."

                                } ,

                                {
                                    id     : "spanishBtn",
                                    src    : "Images/spain.jpeg",
                                    value  : "spanish12",
                                    text   : "El mundo es el planeta Tierra y toda la vida sobre él, incluyendo la civilización humana. En un contexto filosófico, el mundo es todo el Universo físico, o un mundo ontológico. En un contexto teológico, el mundo es la esfera material o profana, en oposición a lo celeste, espiritual, trascendente o sagrado. El fin del mundo se refiere a escenarios del final de la historia humana, a menudo en contextos religiosos."
                                } ,

                                {
                                    id     : "germanBtn",
                                    src    : "Images/ls-german-dresden.jpeg",
                                    value  : "german",
                                    text   : "Die Welt ist der Planet Erde und alles Leben auf ihr, einschließlich der menschlichen Zivilisation. In einem philosophischen Kontext ist die Welt das ganze physische Universum oder eine ontologische Welt. In einem theologischen Kontext ist die Welt die materielle oder die profane Sphäre, im Gegensatz zum himmlischen, geistigen, transzendenten oder heiligen. Das Ende der Welt bezieht sich auf Szenarien des letzten Endes der Menschheitsgeschichte, oft im religiösen Kontext."

                                } ,

                                {
                                    id     : "italianBtn",
                                    src    : "Images/Tourist-Attractions-in-Italy.jpeg",
                                    value  : "italian",
                                    text   : "Il mondo è il pianeta Terra e tutta la vita su di essa, tra cui la civiltà umana. In un contesto filosofico, il mondo è tutto l'universo fisico, o un mondo ontologica. In un contesto teologico, il mondo è il materiale o la sfera profana, in contrasto con il celeste, spirituale, trascendente o sacro. La fine del mondo si riferisce a scenari del fine ultimo della storia umana, spesso in contesti religiosi."


                                } ,


                                {
                                    id     : "frenchBtn",
                                    src    : "Images/eiffel_tower.jpeg",
                                    value  : "french",
                                    text   : "Le monde est la planète Terre et toute vie sur elle, y compris la civilisation humaine. Dans un contexte philosophique, le monde est l'ensemble de l'univers physique ou un monde ontologique. Dans un contexte théologique, le monde est la sphère matérielle ou profane, par opposition au céleste, spirituel, transcendant ou sacré. La «fin du monde» se réfère à des scénarios de la fin de l'histoire humaine, souvent dans des contextes religieux."
                                }

                            ],


        /**
         * subscribing handlers to click events on buttons
         */

        bindTranslateBtns = function()  {

            for (var i = 0; i < btns.length; i++) {


                btns[i].addEventListener("click", translate);

                function translate() {
                    if (this.value == "english" ){

                        paraMain1.innerHTML =   buttons[0].text;
                        picMain.src = buttons[0].src;

                    } else if (this.value == "spanish"){

                        paraMain1.innerHTML =   buttons[1].text;
                        picMain.src = buttons[1].src;

                    } else if (this.value == "german"){

                        paraMain1.innerHTML =   buttons[2].text;
                        picMain.src = buttons[2].src;

                    } else if (this.value == "italian"){

                        paraMain1.innerHTML =   buttons[3].text;
                        picMain.src = buttons[3].src;

                    } else if (this.value == "french"){

                        paraMain1.innerHTML =   buttons[4].text;
                        picMain.src = buttons[4].src;
                    } else {

                        status = "english";

                    } //if



                } //translate()


            }//for loop


        },// bindTranslateBtns









       changeImageAuto  = function () {


           //console.log(document.getElementById("bannerHead"));
           imageIndex++;

           if(imageIndex >= imageArray.length){
               imageIndex = 0;

           }//if*/

           myMainImage.setAttribute("src", imageArray [ imageIndex]);

           setTimeout(function () {
               changeImageAuto();
           },
               4000 );

       }, //changeImageAuto





        init = function (){
        bindTranslateBtns();
        changeImageAuto();


        }//init

        ;


window.addEventListener("load", init);


})();//function end iffy





