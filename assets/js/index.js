// menu fixed t1_o
$(document).ready(function($) {
    $nav = $('.fixed-div');
    $nav.css('width', $nav.outerWidth());
    $window = $(window);
    $h = $nav.offset().top;
    $window.scroll(function() {
        if ($window.scrollTop() > $h) {
            $nav.addClass('fixed');
        } else {
            $nav.removeClass('fixed');
        }
    });
});
// menu fixed end

// menu click pod_menu t1_o
var castle = false;
if ($(window).width()<990) {
    castle = true;
}
else {
    castle = false
}
if (castle==true) {
    var a=document.querySelectorAll('.menu_click > li');
    for (var i = 0; i < a.length; i++) {
        a[i].onclick = click_m;
    }
    function click_m() {
        this.children[1].classList.toggle('q1');
    }
}
// menu click pod_menu end


// list medicoment start
function list(){
var t1_o = document.querySelectorAll('.table_1_li li');
var table_1 = document.getElementById('analys');
var table_2 = document.getElementById('selected_analys');
var r_s_m = document.getElementById('result_summa_medicoment');
var summa_medicoment = 0;
for (var i = 0; i < t1_o.length; i++) {
    t1_o[i].onclick = add_medicoment;
}

function add_medicoment() { 
  console.log(this.children[0]);
  this.classList.toggle('list_none');  
  table_2.innerHTML += '<option value="'+this.value+'">'+this.children[0]+'</option>';

  summa_medicoment=summa_medicoment+parseInt(this.children[0]);
  r_s_m.innerHTML = summa_medicoment;
  var t2_o = document.querySelectorAll('.table_2_option option');
  for (var i = 0; i < t2_o.length; i++) {
      t2_o[i].onclick = remove_medicoment;
  }
}

function remove_medicoment() {
  this.classList.toggle('list_none');  
  table_1.innerHTML += '<li>'+this.text+'</li>';
  summa_medicoment=summa_medicoment-parseInt(this.childNodes[0].text);
  r_s_m.innerHTML = summa_medicoment;
  var t1_o = document.querySelectorAll('.table_1_option li');
  for (var i = 0; i < t1_o.length; i++) {
      t1_o[i].onclick = add_medicoment;
  }
}
}
// list medicoment end



  function showOrHide(cb, cat) {
    cb = document.getElementById(cb);
    cat = document.getElementById(cat);
    if (cb.checked) cat.style.display = "block";
    else cat.style.display = "none";
  }

  $(document).ready(function(){
 $("input#check").change(function(){

  if ($(this).attr("checked")) {
      $('#').fadeIn().show();
      return;
  } else {
      $('#hide').fadeOut(300); 
  }

 });
})