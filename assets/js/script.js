var mySkill = document.getElementById("skills");
var myEduc = document.getElementById("education");
var skillBtn = document.getElementById("skill-btn");
var edBtn = document.getElementById("edu-btn");
var moreworks= document.getElementById("more-works");


function skill() {
    mySkill.style.display="block";
    myEduc.style.display="none";
    skillBtn.style.borderBottom="2px solid #006666";
    edBtn.style.borderBottom="none";
}

function educatio() {
    mySkill.style.display="none";
    myEduc.style.display="block";
    edBtn.style.borderBottom="2px solid #006666";
    skillBtn.style.borderBottom="none";
}
// more projects

function MoreProjects() {
    moreworks.style.display="block";
}
function LessProjects() {
    moreworks.style.display="none";
}