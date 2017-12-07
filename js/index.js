$(document).ready(function() {
  var buzzer = $('#buzzer')[0];
  var current = 'session';
  var counter;
  var startBreak;
  var count;
  var pomCount = parseInt($('#pomTime').html());
  var brkCount = parseInt($('#brkTime').html());
  $('#minusFivebrk').click(function() {
    if (brkCount !== 5) {
      brkCount -= 5;
      console.log(brkCount);
      $('#brkTime').html(brkCount);
    } else if (brkCount === 5) {
      alert('Weniger als 5 Minuten Pause ist nicht möglich.');
    }
  });
  $('#addFivebrk').click(function() {
    if (brkCount < pomCount) {
      brkCount += 5;
      console.log(brkCount);
      $('#brkTime').html(brkCount);
    } else if (brkCount === pomCount) {
      alert("Soll deine Pause wirklich länger als deine Lernzeit sein?");
    }
  });
  $('#resettimebrk').click(function() {
    $('#brkTime').html('5');
  });
  $('#minusFiveSess').click(function() {
    if (pomCount !== 5) {
      pomCount -= 5;
      console.log(pomCount);
      $('#pomTime').html(pomCount);
      $('#counter').html(pomCount);
    } else if (pomCount === 5) {
      alert('Weniger als 5 Minuten Lernzeit ist nicht möglich.');
    }
  });
  $('#addFiveSess').click(function() {
    if (pomCount < 60) {
      pomCount += 5;
      console.log(pomCount);
      $('#pomTime').html(pomCount);
      $('#counter').html(pomCount);
    } else if (pomCount === 60) {
      alert('So lange Lernblöcke machen wir nicht mit!');
    }
  });
  $('#resettimeSess').click(function() {
    $('#pomTime').html('25');
    $('#counter').html('25');
    $('#seconds').html('60');
  });
  
  $('#start').click(function() {
    count = parseInt($('#counter').html());
    current = 'session';
      console.log(count);
      counter = setInterval(function() {
        count -= 1;
        console.log(count);
        $('#counter').html(count);
        if (count === 0) {
          alert('Zeit für \'ne Pause...');
          clearInterval(counter);
          current = 'break';
          count = brkCount;
          $('#counter').html(count);
          startBreak = setInterval(breakTimer,60000);
        }
      }, 60000);
      
      seccount = 60;
      console.log(seccount);
      seccounter = setInterval(function() {
        onemin = 60;
        seccount -= 1;
        console.log(seccount);
        $('#seconds').html(seccount);
        if (seccount === 0) {
          clearInterval(seccounter);
          seccount = 60;
        $('#seconds').html(seccount);
        }
      }, 1000);
    
  });
  
  function breakTimer(){
    $('#counter').html(count);
    count -= 1;
    if (count === 0){
      clearInterval(startBreak);
      alert('Zeit zu lernen...');
    }
  }
  
  
  $('#stop').click(function stopIt(){
    if(current === 'session'){
      clearInterval(counter);
      clearInterval(seccounter);
    }else if(current === 'break'){
      clearInterval(startBreak);
      clearInterval(seccounter);
    }else{
      alert('Nothing to stop!');
    }
  });
  $('#reset').click(function(){
    stopIt();
    $('#counter').html(pomCount);
    
  })
});