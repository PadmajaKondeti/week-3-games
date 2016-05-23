 // Initalize the tallies
    
    var wins = 0, losses = 0;
    var numGuesses=0, guessesLeft = 9, yourGuess="", compGuess="",userGuess ="", newGuess=false, compGuessWord = "";
    var animals = ["elephant", "tiger", "cow","monkey", "lion", "panda"];
    varInitialization();
    var comGuessAnimal = randomWord();
    var wordLength = comGuessAnimal.length;
    var emptyString = [], correctGuesses=0;
    console.log(comGuessAnimal);
    var strComGuessAnimal = comGuessAnimal.split("");
    for (var i = 0; i < wordLength; i++){
        emptyString[i] = "_";
    };
    //emptyString =emptyString.split("");
    document.getElementById("curWord").innerHTML = emptyString; 
    var wordFound=false;
    //guess a letter
    document.getElementById("myText").onkeyup = function(event){   
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        yourGuess = yourGuess + userGuess +",";
        numGuesses++;
        for (var j = 0; j < wordLength; j++) {
            if (strComGuessAnimal[j] == userGuess) {
                correctGuesses++;
                emptyString[j] = userGuess;
                matchLetterFound = true;
                
                document.getElementById("curWord").innerHTML = emptyString; 
                
                //break;

            } else {
                matchLetterFound = false;
            }
        };
        if (correctGuesses == strComGuessAnimal.length) {
            wins++;
            wordFound = true;
            document.getElementById("wins").innerHTML = wins; 
            correctGuesses = 0;
            document.getElementById("name").innerHTML = comGuessAnimal.toUpperCase(); 
             // creating  and appending image object
            var image = document.createElement("img");
            var imageParent = document.getElementById("imgAnimal");
            image.id = "imgName";
            image.className = "img-rounded";
            image.alt = comGuessAnimal;
            image.width="304";
            image.height="236";

            image.src = "assets/images/"+comGuessAnimal+".jpg";
            
            
            imageParent.appendChild(image);
            // creating  and appending audio object
            if (comGuessAnimal == "cow"){
                srcAnimalsound_1 = "http://static1.grsites.com/archive/sounds/animals/animals055.wav";
                srcAnimalsound_2 = "http://static1.grsites.com/archive/sounds/animals/animals055.mp3";

            } else if (comGuessAnimal == "tiger"){
                srcAnimalsound_1 = "http://static1.grsites.com/archive/sounds/animals/animals031.wav";
                srcAnimalsound_2 = "http://static1.grsites.com/archive/sounds/animals/animals031.mp3";
                
            } else if (comGuessAnimal == "monkey") {
                srcAnimalsound_1 = "http://static1.grsites.com/archive/sounds/animals/animals059.wav";
                srcAnimalsound_2 = "http://static1.grsites.com/archive/sounds/animals/animals059.mp3";
                
            } else if (comGuessAnimal == "elephant"){
                srcAnimalsound_1 = "http://static1.grsites.com/archive/sounds/animals/animals130.mp3";
                srcAnimalsound_2 = "http://static1.grsites.com/archive/sounds/animals/animals130.wav";

            } else if (comGuessAnimal == "lion"){
                srcAnimalsound_1 = "assets/sounds/" + comGuessAnimal+".mp3";
                srcAnimalsound_2 = "assets/sounds/" + comGuessAnimal+".wav";

            } else if (comGuessAnimal == "panda"){
                srcAnimalsound_1 = "assets/sounds/" + comGuessAnimal+".mp3";
                srcAnimalsound_2 = "assets/sounds/" + comGuessAnimal+".wav";

            }
            var x = document.createElement("AUDIO");
            var audioParent = document.getElementById("imgAudio");
            if (x.canPlayType("audio/mpeg")) {
                x.setAttribute("src", srcAnimalsound_1);
            } else {
                x.setAttribute("src",  srcAnimalsound_2);
            }
            console.log(x);
            x.setAttribute("controls", "controls");
            audioParent.appendChild(x);
            //document.getElementById('imgAudio').play();

        } else if (correctGuesses < strComGuessAnimal.length) {
           losses++;
            
        };
        if (wordFound == true){
            guessesLeft = 0;
        } else {
            guessesLeft = 9 - numGuesses;
        }
        if (guessesLeft == 0) {
            guessesLeft = 9;
            yourGuess = "";
            emptyString=[];
            document.getElementById("curWord").innerHTML = emptyString; 

        };
        document.getElementById("guessesLeft").innerHTML = guessesLeft ; 
        document.getElementById('myText').value="";
        document.getElementById("yourGuess").innerHTML = yourGuess;
        document.getElementById("losses").innerHTML = losses;
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