 // Initalize the tallies
    
    var wins = 0, losses = 0;
    var i=0, guessesLeft = 9, yourGuess="", compGuess="",userGuess ="", newGuess=false, compGuessWord = "";
    var animals = ["elephant", "tiger", "cow","monkey", "lion", "panda"];
    console.log(animals);
    varInitialization();
    var comGuessAnimal = randomWord();
    var wordLength = comGuessAnimal.length;
    var emptyString = " ";
    console.log(comGuessAnimal);
    var strComGuessAnimal = comGuessAnimal.split("");
    console.log(strComGuessAnimal);
    for (var i = 0; i < wordLength; i++){
        emptyString = emptyString + "_";
    }
    document.getElementById("curWord").innerHTML = emptyString; 
    //guess a letter
    document.getElementById('myText').onkeyup=function(event){   
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        yourGuess = yourGuess + userGuess;
        for (var j = 0; j < wordLength; j++){
            if (strComGuessAnimal[j] == userGuess){
                emptyString[j] = strComGuessAnimal[j];
                matchLetterFound = true;
                debugger;
                document.getElementById("curWord").innerHTML = emptyString; 
                break;

            } else{
                matchLetterFound = false;
            }
        }
    }

       /* if (compGuess == userGuess){
            //wins++;
            yourGuess = yourGuess + userGuess;
            yourGuess ="";
            //guessesLeft = 9;
            //compGuess="";
            userGuess ="";
            //i=0;
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
    } */
    function randomWord() {
        var animal = animals[Math.floor(Math.random()*animals.length)];
        return(animal);
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