function findOdd(A) {
    function intCount (count, integer) {
        count[integer] = (count[integer] || 0) + 1;
        return count;
    };

    var oddInt = A.reduce(intCount,{});

    for(var k in oddInt) {
        if(oddInt[k] % 2 === 1){
            return parseInt(k);
        }
      }
};
