// ici le script

//display contenue
function contenue_display(target) {
    document.getElementById("About").style.display = "none";
    document.getElementById("Experience").style.display = "none";
    document.getElementById("Competence").style.display = "none";
    document.getElementById("Portfolio").style.display = "none";
    document.getElementById("Hobbies").style.display = "none";
    document.getElementById("Contact").style.display = "none";
    document.getElementById(target).style.display = "block";
};