$(document).ready(function () {
  $("li.wizard-part:not(active) a").click(function () {
    if ($(this).parent().hasClass("disabled")) {
      return false;
    }
    else {
      $("li.wizard-part").removeClass("active");
      $(this).parent().addClass("active");
    }
  })
  $(".next-step").click(function () {
    $(".alert.alert-danger").remove();
    var error = false;
    var childrenNode = $(".tab-pane.active").children();
    var errorMes = $('<div/>',{
      text: "Заполните поле",
      class: 'alert alert-danger',
    });
    for (key in childrenNode){
      if(childrenNode[key].nodeName =='INPUT' || childrenNode[key].nodeName =='TEXTAREA' ){
        if(childrenNode[key].value == ''){
          error=true;
          //alert(childrenNode[key].id);
          $("#"+childrenNode[key].id).after("<div class=\"alert alert-danger\" role=\"alert\">\n" +
            "  Заполните поле\n" +
            "</div>");
        }
      }
    }
    if (!error){
      $('.wizard .nav-tabs li.active').next().removeClass("disabled");
      $('.wizard .nav-tabs li.active').next().find('a[data-toggle="tab"]').click();
    }
  })

})
