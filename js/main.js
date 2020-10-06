//start global 
   //create function remove active class
   function removClassActive(array){
       for(var i=0,ii=array.length;i<ii;i++){
           array[i].classList.remove("active");
       }
   }
   //end create function remove active class

   $('.clients-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//end global
//start slide show
var slideContent= Array.from(document.querySelectorAll(".content-item")),
nextBtn    =document.getElementById("next"),
prevBtn    =document.getElementById("prev"),
inducators =document.getElementById("inducators"),
contentNumber  =slideContent.length,
num=1;

function slideShow(){
   //create inducators bullts
   for(var i=1;i<=contentNumber;i++) {
        var li=document.createElement('li');
            li.id=i;
         if(i==1){
             li.className="active";
         }   
        //append li in inducators
        inducators.appendChild(li);        
   }     
   //end create inducators bullts 
   //create function remove active class from img parent and li
    var bullts=inducators.children;
    function removClassActive(){
        for(var i=0;i<contentNumber;i++){
            slideContent[i].classList.remove("active");
        }
        for(var i=0;i<bullts.length;i++){
            bullts[i].classList.remove("active");
        }
    }
    //end function remove active class from img parent and li

    //add class active of bultts when click it
    for(var i=0;i<bullts.length;i++){
        bullts[i].addEventListener("click",function(){
            num=parseInt(this.id);
            checker();
        })
    }
    // end add class active of bultts when click it
   //create function checke item
   function checker(){
       removClassActive();
       //add activ class
       slideContent[num-1].classList.add("active");
       bullts[num-1].classList.add("active");
       //check if image is the last of one
       if(num==contentNumber){
           nextBtn.classList.add("disable");
       }else{
        nextBtn.classList.remove("disable");
       }

       //check if image is the first of one
       if(num==1){
        prevBtn.classList.add("disable");
        }else{
        prevBtn.classList.remove("disable");
        }

   }
    
    //create next function
    function next(){
        if(num==contentNumber){
            num=0;
        }else{
            num++;
            checker();
        }
    }
    nextBtn.addEventListener("click",next);
        
     //create prev function
     function prev(){
        if(num==1){
            return flase
        }else{
            num--;
            checker();
        }
     }
     prevBtn.addEventListener("click",prev);
     setInterval(function(){
        nextBtn.click();
     },5000)
}


slideShow();
//end slidshow

// add background to navbar
window.onscroll=function(){
    if(window.pageYOffset>=100){
        document.getElementById("appHeader").style.backgroundColor="rgba(0,0,0,.9)";
    }else{
        document.getElementById("appHeader").style.backgroundColor="transparent";
    }
}

//end add background to navbar

//add class active to links
var mainLinks=Array.from(document.querySelectorAll("#nav-container li a"));
for(var i=0,ii=mainLinks.length;i<ii;i++){
    mainLinks[i].addEventListener("click",function(){
        for(i=0;i<mainLinks.length;i++){
            mainLinks[i].parentElement.classList.remove('active');
        }
        this.parentElement.classList.add('active');
    });
}
//end add class active
// start mobile navigation
    //declear all variables needs
var Navbar=document.getElementById("nav-container"),
    mobileNav,toggleButton,bodyOverlay,
    
    //mobileNave vaule
    mobileNav=Navbar.cloneNode(true);
    //mobileNave attributes
    mobileNav.id="mobile-nav";
    mobileNav.firstElementChild.setAttribute("class","");
    //add mobileNave to body
    document.body.appendChild(mobileNav);
    // create toggleButton
    toggleButton=document.createElement("button");
    //set toggleButton attributes
    toggleButton.type="button";
    toggleButton.id="mobile-nav-toggle";
    //toggleButton value
    toggleButton.innerHTML='<i class="fa fa-bars"></i>';
    //add toggleButton to bady
    document.body.appendChild(toggleButton);
    //create body overlay
    bodyOverlay=document.createElement("div");
    //bodyoverlay attributs
    bodyOverlay.id="mobile-body-overlay";
    //bodyoverlayvalue
    bodyOverlay.innerHTML="";
    //add div body overlay to body
    document.body.appendChild(bodyOverlay);
    
    //add class active to navbar links
    var links= Array.from(document.querySelectorAll("#mobile-nav li a"));
        for(var i=0,ii=links.length;i<ii;i++){
            links[i].addEventListener("click",function(){
                for(i=0;i<links.length;i++){
                    links[i].parentElement.classList.remove('active');
                }
                this.parentElement.classList.add('active');
            });
            
        }
    //End class active to navbar links

    //add toggle class to menuo bars to show and hide mobile-nav 
    var menuoIcon=document.querySelector("#mobile-nav-toggle i");
        menuoIcon.addEventListener("click",function(){
            mobileNav.classList.toggle("mobile-nav-active");
            if(this.classList.contains("fa-bars")){
                this.classList.remove("fa-bars");
                this.classList.add("fa-times");
                bodyOverlay.style.display="block";
            }else{
                this.classList.remove("fa-times");
                this.classList.add("fa-bars")
                bodyOverlay.style.display="none";
            }
        })
// End mobile navigation    

//start requestes
    var res=new XMLHttpRequest(); 
     res.onreadystatechange=function(){
         if(this.readyState===4 && this.status===200){
             var Request=JSON.parse(this.responseText);
             //start about request  
            var aboutData=Request.About,
                about="";
                for(var i=0;i<aboutData.length;i++){
                    about+=
                    '<div class="col-sm-6 col-md-4">'+
                        '<div class="card">'+
                            '<img src="'+aboutData[i].img+'" class="card-img-top" alt="...">'+
                            '<div class="card-body">'+
                                '<i class="'+aboutData[i].icon +'"></i>'+
                                '<h5 class="card-title"> <a href="#"> '+aboutData[i].title+' </a> </h5>'+
                                '<p class="card-text">'+aboutData[i].description+'</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                    document.getElementById("About").innerHTML=about;
                }

            //End about request
            //start feture services rquest
              var services=Request.services,
                  fetureServices="";

                  for(var i=0;i<services.length;i++){
                      fetureServices+=
                      '<div class="col-sm-6 col-lg-4">'+
                            '<div class="media">'+
                                '<i class="'+services[i].icon +' mr-3"> </i>'+
                                '<div class="media-body">'+
                                    '<h5 class="mt-0"> <a href="#">'+services[i].title+'</a> </h5>'+
                                    services[i].description+
                               '</div>'+
                            '</div>'+
                      '</div>'
                      document.getElementById("fetureSevices").innerHTML=fetureServices;
                  }
            //End feture services rquest

            //start portfolio request
               var portfolioData=Request.portfolio,
                   portfolio="";
                   for(var i=0;i<portfolioData.length;i++){
                    portfolio +=
                       '<div class="coll col-sm-6 col-lg-4 '+portfolioData[i].filter+'">'+
                            '<div class="card">'+
                                '<figure>'+
                                    '<img src="'+portfolioData[i].img+'" class="card-img-top img-fluid" alt="'+portfolioData[i].title+'" id="'+portfolioData[i].id+'" >'+
                                    '<div class="info">'+
                                        '<a href="#" class="preview" title="preview"> <i class="fa fa-eye" title="preview"></i> </a>'+
                                        '<a href="#" id="moreDetalis" title="more Detalis"> <i class="fa fa-paper-plane" title="more Detalis"></i> </a>'+
                                    '</div>'+
                                '</figure>'+
                                '<div class="card-body">'+
                                    '<h5 class="card-title"> <a href="#"> '+portfolioData[i].title+' </a> </h5>'+
                                    '<p class="card-text">'+portfolioData[i].description+'</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                        document.getElementById("portfolioContent").innerHTML=portfolio;
                   }    
            //end portfolio request

         }//end if
         
     } //end change function  
    res.open("GET","json/dataApp.json");
    res.send();
//end requestes

// start trick skills section
function skills(){
    var prograssBar=document.querySelectorAll(".skills-content>div div"),
    prograssSpan=document.querySelectorAll(".skills-content>div div span"),
    width;
    for(var i=0;i<prograssSpan.length;i++){
         width=prograssSpan[i].textContent;
         for(var j=i;j<prograssBar.length;j++){
            prograssBar[j].style.width=width;
         }
    }
}
skills();
// End trick skills section

//create counter function
var fact1=document.getElementById("fact1"),
fact2=document.getElementById("fact2"),
fact3=document.getElementById("fact3"),
fact4=document.getElementById("fact4");
/*
function counter(ele,delay){
    var val= ele.textContent,timer,i=0;
    timer=setInterval(function(){
        if(ele.textContent<=val){
            ele.textContent=i;
            i++;
            if(ele.textContent> val){
                ele.textContent=val;
            }
        }else{
            clearInterval(timer);
        }
    },delay)
}  
counter(fact1,10);
counter(fact2,10);
counter(fact3,10);
counter(fact4,10);
*/
//start portfolio
var btnPort= Array.from(document.querySelectorAll("#portfolio .portfolio-type li"));
    for(i=0;i<btnPort.length;i++){
        btnPort[i].addEventListener("click",function(){
            removClassActive(btnPort);
            this.classList.add("active");
            var col=Array.from(document.querySelectorAll("#portfolioContent .coll"));
                for(var i=0;i<col.length;i++){
                    if(this.dataset.filter==='all'){
                        col[i].style.display="block";
                    }else{
                        col[i].style.display="none";
                    }
                }
          var filter= document.querySelectorAll(this.dataset.filter);
          for(var i=0;i<filter.length;i++){
              filter[i].style.display="block";
          }
        })
    }


    //model portfolio
    window.onload=function(){
    var preview=document.querySelectorAll(".preview"),
        model=document.getElementById("portfolio-model"),
        modelImg=document.getElementById("model-img"),
        close=document.querySelector("#model-footer .fa-close"),
        modelInfo=document.querySelector(".model-info"),
        AllImg=Array.from(document.querySelectorAll("#portfolioContent img")),
        totalimgNumber=AllImg.length;
        //create h5 and soan to display model info 
        imgHead=document.createElement("h5"),
        imgNum=document.createElement("span");
        //add h5 and span to modelinfo
        modelInfo.appendChild(imgHead);
        modelInfo.appendChild(imgNum);

        for(var i=0;i<preview.length;i++){
            preview[i].addEventListener("click",function(e){
                e.preventDefault();
                modelImg.src=this.parentElement.previousElementSibling.src;
                imgHead.innerHTML=this.parentElement.previousElementSibling.alt;
                imgNum.innerHTML="image "+this.parentElement.previousElementSibling.id+" of "+totalimgNumber;
                model.style.display="block";
                close.addEventListener("click",function(){
                    model.style.display="none";
                })
            })
        }
       
    }//end window

//end portfolio