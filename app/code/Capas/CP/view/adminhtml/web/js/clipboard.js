require([
    "jquery", 
],function($){
 
    function clipboard(message){
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = message;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);


    }
    window.clipboard = clipboard;
    
});