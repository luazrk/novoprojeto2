// This is a JavaScript file
function teste(){

}
$(document).on("click", "#btn1", function(){
  navigator.notification.alert ("Alerta!!!!",teste,'titulo','sair');
})

$(document).on ("click", "#btn5", function(){
  var onSucess = function(position){
  $("#lat").val(position.coords.latitude);
  $("#long").val(position.coords.longitude);

};

function onError(error){
  alert('code')
}