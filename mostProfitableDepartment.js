module.exports = function(dept){
    var _newMap ={};
    for(var i in dept){
      var deptSales = dept[i];
      _newMap[deptSales.department] = 0;
   }
     for(var i =0;i<dept.length;i++){
       var deptSales = dept[i];
       var currTot = _newMap[deptSales.department];
          currTot += deptSales.sales;
        _newMap[deptSales.department] = currTot;
     }
    var curr_sales = 0;
    var curr_dept = "";
     for(var dept in _newMap){
      var deptSales = _newMap[dept];
       if(deptSales > curr_sales){
         curr_sales = deptSales;
         curr_dept = dept;
          }
     }
     return  curr_dept;
}