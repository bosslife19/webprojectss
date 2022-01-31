// var q;
// q=34;
// if (q==undefined){console.log("fuckers");}
// else{console.log("fuck");}
// // lecture 41
// var string ="my name is";
// string +=" DAVIDO";
// console.log(string);
// console.log(21/5);
// var a= 40, b= 20;
// if (a==b){console.log("equal")};

// var a='40', b=40
// if (a===b){console.log("equal");}
// else{console.log("im a bad motherfucker")}
// // lecture 42
// if(null||false||""||undefined){console.log("won't execute");}
// else{console.log("execute")}
// // lecture 43 (for loop)
// var sum=0
// for(var i=0; i<10; i++ )
// console.log(i);
// {sum+=i};
// console.log(sum)
// {console.log("the value of sum through 9 =" + sum);}
// // lecture 44 setting default values
// function orderchickenwith(sidedish){sidedish= sidedish||"riced"
// console.log(sidedish)}

// orderchickenwith();
// lecture 45 creating objects
/**var company = new Object();
company.name= "facebook";
console.log(company)
company.ceo= new Object();
company.ceo.Firstname="Mark"
company.ceo.favcolor="blue"**/
// creating objects easier way
// var company={name:"Facebook",
// ceo:{firstname:"Mark", favcolor:"blue"},stock:120};
// console.log(compa

window.onload = init;
function init(){
    var button = document.getElementById("boo");
     button.onclick = function(e){
         var grace = e.target;
         
         
         
        //  
         alert("NO DEY CLICK ME BOSS, YOU NO FIT AFFORD AM!!")
          var good = prompt("Okay you na my guy, just quote how much you get make i know");
          if(good < 40000){
              alert("BROKE HUMAN ALERT: boss abeg leave this page you dey cause traffic!!");
              grace.innerHTML = "GO HUSTLE";
              document.getElementById("javboy").textContent = "YOU NEVER CHOP YOU DEY PRICE SNEAKERS!!";
          }else{
              alert("OH!! this boy get money ooo!!! oya no vex come fill form..")
              document.getElementById("javboy").textContent  = "NICE DOING BUSINESS WITH YOU BOSS!!!";
          }
          

        
     }
     
     var neon = document.getElementById("boo");
     neon.style.color = "white";
     neon.style.width = "400px";
     neon.style.backgroundColor = "green";
     neon.style.height = "45px";
     button.onblur = function(){
         neon.style.backgroundColor = "blue";
     }
     


    }
    


