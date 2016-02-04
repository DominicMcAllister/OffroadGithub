// Code goes here
var work = function(){
  var x = 9 / 0;
  throw x;
}

var doWork = function(f){
  console.log("starting");
  try{
    f();
  }
  catch(ex){
    console.log('error');
    alert(ex);
  }
  finally{
    console.log("finally");
  }
}

doWork(work);