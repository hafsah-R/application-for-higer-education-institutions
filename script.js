
window.onload = function ()
    {
	
		
var header_content = `
	<div>
	 <img src="Picture.png"></img>
    </div>
	
	
	<div class="dropdown" id="phoneDropdown">
  <button onclick="myFunction()" class="dropbtn">
   <div class="menueIcon"></div>
   <div class="menueIcon"></div>
  </button>
  <div id="myDropdown" class="dropdown-content">
    <ul>
       <li><a href="index.html" target="_self">الرئيسية</a></li>
       <li><a href="التقديم.html" target="_blank">التقديم</a></li>
       <li><a href="النتيجة.html">النتيجة</a></li>
       <li><a href="الدفع.html">الدفع الإلكتروني</a></li>
      </ul> 
  </div>
</div>
	
    
	
     <ul class="largeScreenHeader">
       <li><a href="index.html" target="_self">الرئيسية</a></li>
       <li><a href="التقديم.html" target="_blank">التقديم</a></li>
       <li><a href="النتيجة.html">النتيجة</a></li>
       <li><a href="الدفع.html">الدفع الإلكتروني</a></li>
      </ul> `;
  var footer_content = `
   <span class="left">
     <a href="https://ar-ar.facebook.com/admission.gov.sd">
     <img src="icon-facebook.svg">
     </a>
     <img class="youtube" src="y.png">
     <a href="https://twitter.com/lu2guvy8effdcxy">
     <img src="icon-twitter.svg">
     </a>
    </span>

   <span class="right"> 2022 © جميع الحقوق محفوظة</span>`;

  var header_element = document.getElementById('header');
  var footer_element = document.getElementById('footer');

  header_element.innerHTML = header_content;
  footer_element.innerHTML = footer_content;
     
    }
	
	//phone
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//page 2

//page 2 tab 2
function resetValues()
{
 var input=document.getElementsByTagName("input");
 for(i = 0; i<=input.length-1; i++)//x.length-1 i don't want to reset the value of the last button
  {
 
  input.item(i).value = "";
  }
}	

function openStep(evt,step) {
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
   tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(step).style.display = "block";
  evt.currentTarget.className += " active";
} 

 /* captcha*/
 var TextDraw;
 var captchaCode='';
 
 var init = function () {
  TextDraw = document.getElementById('cptch').getContext("2d");
  TextDraw.fillStyle = "#bbeeff";
  change();
    }

 var change = function () {
  var key = '';
  for ( var  i = 0; i < 6; i++) {
    var rnd = Math.random();
    if (Math.round(rnd) == 0) {
      key += String.fromCharCode(48+9* Math.random());
        }
     else{
      key += String.fromCharCode(65+25* Math.random());
        }
    }

  TextDraw.clearRect(0, 0, 150, 50);
  TextDraw.fillRect(0, 0, 0, 0);
  TextDraw.font = "30px calibri";
  TextDraw.strokeText(key, 24, 34);
  captchaCode= key;
    }

function Valid(){
  var validCaptcha = document.getElementById('validtxt').value;
  var validSeatNo =document.getElementById("seatNo").value;
  var validNationalNo =document.getElementById("nationalNo").value;
  var diplomaApply =document.getElementById("diploma").value;
  var provinceApply =document.getElementById("province").value;
  var bacholreApply =document.getElementById("bacholre").value;
  var Institute =document.getElementById("Institute").value;
  var termAndCondtion=document.getElementById("termAndCondtion");
   
  if((validCaptcha == captchaCode)&&(validSeatNo!=="")&&(validNationalNo!=="")&&
     (diplomaApply!==""|provinceApply !==""|bacholreApply!=="")&&(Institute!=="")&&
      termAndCondtion.checked){
	  resetValues()
      return true
	 
           }
   else{
     alert("جميع الخانات مطلوبة");
        }

      }
	  
//page 2 tab 3	  
	  
function hideDropdown() {
 var Institute= document.getElementById('Institute').value
 var paidInstitute=document.getElementById("paidInstitute")
 var govInstitute=document.getElementById("govInstitute")
	
 if (Institute == 'paidInstitute'){
  paidInstitute.style.display= 'inline-block';
  govInstitute.style.display= 'none';
 }else{
   paidInstitute.style.display= 'none';
   govInstitute.style.display= 'inline-block';
   }
   
  }

function showDropdown() {
  document.getElementById("DropdownValues").classList.toggle("show");
   }

function filtercollageName() {
  var input, filter, ul, li, a, i;
	 
  input = document.getElementById("Input");
  filter = input.value.toUpperCase();
  div = document.getElementById("DropdownValues");
  a = div.getElementsByTagName("a");
	
  for (i = 0; i < a.length; i++) {
   txtValue = a[i].textContent || a[i].innerText;
   if (txtValue.toUpperCase().indexOf(filter) > -1) {
     a[i].style.display = "";
	 
    }else {
      a[i].style.display = "none";
    }
  }
}

//page 3

  function openPymentMethod(evt, PymentMethod) {
   var i, pyment, tablinks;
   
   pyment= document.getElementsByClassName("pyment");
   
   for (i = 0; i < pyment.length; i++) {
    pyment[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < pyment.length; i++) {
   tablinks[i].className = tablinks[i].className.replace(" w3-border-gray", "");
  }
  
  document.getElementById(PymentMethod).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-gray";
}
