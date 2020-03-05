(function(){
    var ConvertBase = function(num){
        return {
            from : function(baseFrom){
                return{
                    to : function(baseTo){
                        return parseInt(num,baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };
    //binary to decimal
    ConvertBase.bin2dec = function(num){
        return ConvertBase(num).from(2).to(10);
    };
    //binary to hex
    ConvertBase.bin2hex = function(num){
        return ConvertBase(num).from(2).to(16);
    };
    //Decimal to binary
    ConvertBase.dec2bin = function(num){
        return ConvertBase(num).from(10).to(2);
        
    };
    //Decimal to hex
    ConvertBase.dec2hex = function(num){
        return ConvertBase(num).from(10).to(16);
        
    };
    //hex to bin
    ConvertBase.hex2bin = function(num){
        return ConvertBase(num).from(16).to(2);
    };
    // hex to deci
    ConvertBase.hex2dec = function(num){
        return ConvertBase(num).from(16).to(10);
    };
    this.ConvertBase = ConvertBase;
})(this);