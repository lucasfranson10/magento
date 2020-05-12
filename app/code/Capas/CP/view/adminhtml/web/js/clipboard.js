require([
    "jquery",
],function($){
   // $('#order_myaction').on('click', clipboard());
    function clipboard(message){
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = message;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        alert("Copied text: " + message);
    }
    window.clipboard = clipboard;
});