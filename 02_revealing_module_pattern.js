//Immediately invoked function expression   IIFE  (iffy)
(function() {

  var createWorker = function() {
    var count = 0;

    var task1 = function() {
      count += 1;
      console.log("task1 ran " + count);
      //console.log("task1 ran");
    }
    var task2 = function() {
      count += 1;
      console.log("task2 ran " + count);
      //console.log("task2 ran");
    }

    return {
      job1: task1,
      job2: task2
    };
  }

  var worker = createWorker();
  worker.job1();
  worker.job2();
  worker.job2();
  worker.job2();
  worker.job2();
  
}());