  document.getElementById("zero").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + parseFloat("0");
  });
  document.getElementById("one").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + parseFloat("1");
  });
  document.getElementById("two").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + parseFloat("2");
  });
  document.getElementById("three").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + parseFloat("3");
  });
  document.getElementById("four").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + parseFloat("4");
  });
  document.getElementById("five").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + parseFloat("5");
  });
  document.getElementById("six").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + parseFloat("6");
  });
  document.getElementById("seven").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + parseFloat("7");
  });
  document.getElementById("eight").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + parseFloat("8");
  });
  document.getElementById("nine").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + parseFloat("9");
  });
  document.getElementById("point").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + ".";
  });
  document.getElementById("add").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + "+";
  });
  document.getElementById("sub").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + "-";
  });
  document.getElementById("mult").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + "*";
  });
  document.getElementById("div").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = r.value + "/";
  });
  document.getElementById("equal").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = eval(r.value);
  });
  document.getElementById("clear").addEventListener("click", function(){
    r=document.getElementById("result"); r.value = "";
  });
