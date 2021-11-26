
function addNewWEField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("row",3);

    let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode , weAddButtonOb);

}

function addNewAQField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.setAttribute("row",3);

    let adOb=document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

//generating cv
function genrateCV()
{
    let nameField=document.getElementById("nameFeild").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;
     //name
    document.getElementById("nameT2").innerHTML=nameField;
//contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactFeild").value;
//email
    document.getElementById("emailT").innerHTML=document.getElementById("emailFeild").value;
//address
    document.getElementById("addressT").innerHTML=document.getElementById("addressFeild").value;
//skillsssss
    document.getElementById("skillT").innerHTML=document.getElementById("skillsField").value;
//links
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedinFeild").value;
    document.getElementById("githubT").innerHTML=document.getElementById("githubFeild").value;
    document.getElementById("websiteT").innerHTML=document.getElementById("websiteFeild").value;
//objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveFeild").value;
//academic
    document.getElementById("AQT").innerHTML=document.getElementById("aq").value;
//work ex
    document.getElementById("WET").innerHTML=document.getElementById("we").value;
//projects
    document.getElementById("projectsT").innerHTML=document.getElementById("projectsField").value;
//courses
    document.getElementById("coursesT").innerHTML=document.getElementById("coursesField").value;



//code for img
let file=document.getElementById("imgField").files[0]

let reader=new FileReader()
reader.readAsDataURL(file);
reader.onloadend=function()
{
    document.getElementById("imgTemplate").src=reader.result;
};

document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";


}
function printcv()
{
    const element=document.getElementById("cv-form");
    html2pdf()
    .from(element)
    .save();
}

