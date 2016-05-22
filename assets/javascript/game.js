 // Initalize the tallies
    
    var wins = 0, losses = 0;
    var i=0, guessesLeft = 9, yourGuess="", compGuess="",userGuess ="", newGuess=false;
    varInitialization();
    //computer Guesses
    compGuess = randomString();
    //guess a letter
    document.getElementById('myText').onkeyup=function(event){   
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        //yourGuess = yourGuess + userGuess;
        if (newGuess == true){
            //computer Guesses
            compGuess = randomString();
            newGuess = false;
        };
        if (compGuess == userGuess){
            wins++;
            yourGuess = yourGuess + userGuess;
            yourGuess ="";
            guessesLeft = 9;
            compGuess="";
            userGuess ="";
            i=0;
            newGuess=true;
            valAssignment();
           
            //debugger;
        } else {
           if (i=>0 && i < 9){
                i++;
                yourGuess = yourGuess +"," + userGuess;
                guessesLeft = 9 - i;
                if (i == 1){
                    yourGuess =userGuess;
                }
                if (i == 9){
                    losses++;
                    yourGuess ="";
                    guessesLeft = 9;
                    compGuess="";
                    userGuess ="";
                    i=0;
                    newGuess=true;
                }
                valAssignment();              
            } 
        }        
    };
 
    function randomString() {
        var chars = "abcdefghiklmnopqrstuvwxyz";
        var string_length = 1;
        var randomstring = '';
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
        return(randomstring);
    }
    function varInitialization(){
        // Sets the focus to the input
        document.getElementById("myText").focus();
        i=0; guessesLeft = 9; yourGuess=""; compGuess="";userGuess ="";
        newGuess=false;
        valAssignment();
    }
    function valAssignment(){
        //debugger;
        document.getElementById("wins").innerHTML = wins; 
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesLeft").innerHTML = guessesLeft ; 
        document.getElementById("yourGuess").innerHTML = yourGuess;
        document.getElementById('myText').value="";
    }