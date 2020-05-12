define([
    "jquery",
], function($){
        "use strict";
        return function(config, element) {
            config.message.select();
            document.execCommand("copy");
            alert("Copied the text: " + config.message);
        }
    }
)