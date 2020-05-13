require([
    "Magento_Ui/js/modal/alert",
    "jquery", 
],function(alert, $){
   // $('#order_myaction').on('click', clipboard());
    function clipboard(message){
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = message;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        //alert("Copied text: " + message);
        alert({
            title: $.mage.__('The address was copy: '),
            content: $.mage.__(message),

        });
    }
    window.clipboard = clipboard;
});