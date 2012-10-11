var EXTRAPOLATE = this.EXTRAPOLATE || {};

EXTRAPOLATE.LINEAR = (function() {
    function EXTRAPOLATE(data) {
      this.evidence = {};
    }

    EXTRAPOLATE.prototype.given = function(sample) {
      this.evidence[sample] = {};
      var ret = {};
      ret.get = function(result) {
        this.get.this.evidence[sample] = result;
      };
      ret.get.this = this;
      return ret;
    };
  
    EXTRAPOLATE.prototype.valueFor = function(sample) {
      var closeMin = -Infinity,
          closeMax = Infinity,
          max = -Infinity,
          preMax = -Infinity,
          key;
      // find min and max
      for (key in this.evidence) { 
        if (key<sample && key>closeMin) {
          closeMin = key;
        }
        if (key>sample && key<closeMax) {
          closeMax = key;
        }
        if (key>max) { preMax= max; max = key; }
      }
      //this is used if we want to extrapolate near the end
      var baseValueIndex = closeMin; 
      if (closeMax===Infinity) { 
        closeMax = max; 
        closeMin = preMax;
        baseValueIndex = max;
      }
      var delta = closeMax - closeMin;
      var valDelta = this.evidence[closeMax] - this.evidence[closeMin];

      var deltaLength = (sample-baseValueIndex);
      return this.evidence[baseValueIndex] + (deltaLength*(valDelta / delta));
    };

    return EXTRAPOLATE;
})();

//TODO: implement polynomial extrapolation