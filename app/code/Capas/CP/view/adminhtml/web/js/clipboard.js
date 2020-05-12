require([
    "jquery",
],function($){
   // $('#order_myaction').on('click', clipboard());
    function clipboard(message){
        message.select();
        document.execCommand("copy");
        alert("Copied the text: " + message);
    }
    window.clipboard = clipboard;
});