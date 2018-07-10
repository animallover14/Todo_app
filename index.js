$(document).ready(function(){
    console.log("helloworld");
    $("#todobutton").click(function(){
        console.log("Button works")
        var nameoftodo=$("#todoinpput").val()
        console.log(nameoftodo)
        $("ul").append("<li><input type='checkbox'/>"+nameoftodo+"<li>")
        
    
    })
        
})
