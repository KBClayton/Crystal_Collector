$(document).ready(function() {

    var winaudio = document.createElement("audio");
    winaudio.setAttribute("src", "assets/sounds/win.mp3");
    var lossaudio = document.createElement("audio");
    lossaudio.setAttribute("src", "assets/sounds/loss.ogg");
    var losses=0;
    var wins=0;
    var clicks=0;
    var cscore=0;
    var mscore=0;
    var cryval1=0;
    var cryval2=0;
    var cryval3=0;
    var cryval4=0;
    var dwin=$("#wtext");
    var dlosses=$("#ltext");
    var dmscore=$("#vmatch");
    var dcscore=$("#ctext");
    var dclicks=$("#clicktext");



    var game = {
        display: function(){
            dwin.text(wins);
            dlosses.text(losses);
            dcscore.text(cscore);
            dmscore.text(mscore);
            dclicks.text(clicks)
        },
        
        runcheck: function(cry){
            clicks++;
            switch(cry){
                case "1": cscore=cscore+cryval1;
                            break;
                case "2": cscore=cscore+cryval2;
                            break;
                case "3": cscore=cscore+cryval3; 
                            break;
                case "4": cscore=cscore+cryval4;
                            break;
                default: break;
            };
            this.display();
            if (cscore==mscore){
                winaudio.play();
                alert("You won");
                wins++;
                this.reset();
                return;
            }
            else if (cscore>mscore){
                lossaudio.play();
                alert("You lost");
                losses++;
                this.reset();
                return;
            }
            else{
                return;
            }
        },

        reset: function(){
            clicks=0;
            cscore=0;
            mscore=Math.floor((Math.random()*101+19));
            this.display();
            cryval1=Math.floor((Math.random()*11+1));
            cryval2=Math.floor((Math.random()*11+1));
            cryval3=Math.floor((Math.random()*11+1));
            cryval4=Math.floor((Math.random()*11+1));
        }


    }


    game.reset();

    $("#pic1").on("click", function() {
        game.runcheck("1");
    });
    $("#pic2").on("click",  function() {
        game.runcheck("2");
    });
    $("#pic3").on("click",  function() {
        game.runcheck("3");
    });
    $("#pic4").on("click", function() {
        game.runcheck("4");
    });


});

