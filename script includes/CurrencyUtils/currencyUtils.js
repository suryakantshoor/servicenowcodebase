gs.include("PrototypeServer");

var suryatest = Class.create();

suryatest.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    convertValue: function() {
        var currency = this.getParameter('currency');
        var price = this.getParameter('price');
        var conv = new sn_currency.GlideCurrencyConverter('USD', currency);
        conv.setAmount(price);
        var convresult = conv.convert();
        var val = convresult.getAmount();
		return JSON.stringify(val);
    },
    type: 'suryatest'
});
