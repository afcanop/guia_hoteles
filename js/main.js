$(function(){
  $('.carousel').carousel({
    interval: 2000
  })
  $('#modalLogin').modal()

  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()

  $(".modal").on('shown.bs.modal', function (e) {
    $('#btnIngresar').removeClass('btn-outline-warning');
    $('#btnIngresar').addClass('btn-outline-info');
  })

  $(".modal").on('hidden.bs.modal', function (e) {
    $('#btnIngresar').addClass('btn-outline-warning');
    $('#btnIngresar').removeClass('btn-outline-info');
  })

})