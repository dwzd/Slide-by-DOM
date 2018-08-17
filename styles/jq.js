(function () {
    window.jQuery = window.$ = jQuery;

    function jQuery(id) {
        return new init(id);
    }

    function init(id) {
        var odom = document.getElementById(id.slice(1));
        this[0] = odom;
        this.length = 1;
        return this;
    }

    jQuery.prototype.text = function () {
        console.log('our text');
        return this;
    }
    jQuery.prototype.css = function () {
        console.log('css3');
        return this;
    }

    init.prototype = jQuery.prototype;

})();
console.log($('#dom'));
console.log($('#dom').text().css());