
 
 function addPerson(){
    var age = document.getElementById('age').value;
    var rel = document.getElementById("select").value;
    if ( age <= 0 || rel == "") {
        return false;
        } else {
        var list = document.createElement("LI");
        var t = document.createTextNode("Age:"+' '+age+' '+"Relationship:"+' '+rel+ ' ');
            list.appendChild(t);
        document.getElementById("lines").appendChild(list);

    }
}

 function removePerson() {
   var list = document.getElementById("lines");
   list.removeChild(list.childNodes[0]);

}
function submitPeople() {
   var formData = ("form.house").serializeObject();
   console.log(formData);
}


