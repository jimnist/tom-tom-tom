// special animations just for tom
function chuyChuy(pagefade, linefade) {

  var $tom = $('.tom'), 
      fastfade = 11;

  queuePageOne($tom, fastfade, pagefade, linefade);
  queuePageTwo($tom, pagefade, linefade);
  queuePageThree($tom, pagefade, linefade);
  queuePageFour($tom, pagefade, linefade);
  queuePageFive($tom, pagefade, linefade);
  queuePageSix($tom, pagefade, linefade);  
      
  $tom.dequeue('chuy');
}

function queuePageOne(q, fastfade, pagefade, linefade) {
  q.queue('chuy', function(next) {
      $('.p1').delay(2000).fadeIn(fastfade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.i01').fadeIn(linefade, function() {
          next();
      });
  });  
  q.queue('chuy', function(next) {
      $('.i02').fadeIn(linefade, function() {
          next();
      });
  }); 
  q.queue('chuy', function(next) {
      $('.i03').fadeIn(linefade, function() {
          next();
      });
  }); 
  q.queue('chuy', function(next) {
      $('.p1').delay(pagefade).fadeOut(linefade, function() {
          next();
      });
  });
}

function queuePageTwo(q, fastfade, pagefade, linefade) {
  q.queue('chuy', function(next) {
      $('.p2').fadeIn(fastfade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.i04').fadeIn(linefade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.i05').fadeIn(linefade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.p2').delay(pagefade).fadeOut(linefade, function() {        
          next();
      });
  });
}

function queuePageThree(q, fastfade, pagefade, linefade) {
  q.queue('chuy', function(next) {
      $('.p3').fadeIn(fastfade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.i06').fadeIn(linefade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.i07').fadeIn(linefade, function() {
          next();
      });
  });  
  q.queue('chuy', function(next) {
      $('.i08').fadeIn(linefade, function() {
          next();
      });
  }); 
  q.queue('chuy', function(next) {
      $('.p3').delay(pagefade).fadeOut(linefade, function() {                
          next();
      });
  });   
}

function queuePageFour(q, fastfade, pagefade, linefade) {
  q.queue('chuy', function(next) {
      $('.p4').fadeIn(fastfade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.i09').fadeIn(linefade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.i10').fadeIn(linefade, function() {
          next();
      });
  });  
  q.queue('chuy', function(next) {
      $('.i11').fadeIn(linefade, function() {
          next();
      });
  });         
  q.queue('chuy', function(next) {
      $('.p4').delay(pagefade).fadeOut(linefade, function() {        
          next();
      });
  });      
}

function queuePageFive(q, fastfade, pagefade, linefade) {
  q.queue('chuy', function(next) {
      $('.p5').fadeIn(fastfade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.i12').fadeIn(linefade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.i13').fadeIn(linefade, function() {
          next();
      });
  });  
  q.queue('chuy', function(next) {
      $('.i14').fadeIn(linefade, function() {
          next();
      });
  }); 
  q.queue('chuy', function(next) {
      $('.p5').delay(pagefade).fadeOut(linefade, function() {                
          next();
      });
  });      
}

function queuePageSix(q, fastfade, pagefade, linefade) {
  q.queue('chuy', function(next) {
      $('.p6').fadeIn(fastfade, function() {
          next();
      });
  });
  q.queue('chuy', function(next) {
      $('.i15').fadeIn(linefade, function() {
          next();
      });
  });  
  q.queue('chuy', function(next) {
      $('.i16').fadeIn(linefade, function() {
          next();
      });
  }); 
  q.queue('chuy', function(next) {
      $('.i17').fadeIn(linefade, function() {
          next();
      });
  }); 
  q.queue('chuy', function(next) {
      $('.p6').delay(pagefade).fadeOut(linefade, function() {
          next();
      });
  });
}
