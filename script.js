function populate(s1, s2) {

    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if(s1.value == "brazil") {
        var optionArray = ['ponte preta|Ponte Preta','corinthians|Corinthians','flamengo|Flamengo','palmeiras|Palmeiras','atletico-mg|Atlético MG','santos|Santos'];
    } else if (s1.value == "england") {
        var optionArray = ['arsenal|Arsenal','manchester-city|Manchester City','manchester-united|Manchester United','liverpool|Liverpool','chelsea|Chelsea'];
    }

    for(var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML=pair[1];
        s2.options.add(newoption);
    }

}