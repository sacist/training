const add = (n: number) => {
    var fn = function(x:number) {
        return add(n + x);
      };
      
      fn.valueOf = function() {
        return n;
      };
      
      return fn;
};

const result=add(1)(3)(8)(15)
console.log(result);
