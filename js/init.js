$(document).ready(() => {
  $("#btnLang").on("click", function(){
    const val = $(this).val().toLowerCase();
    changeLanguage(val);
    $(this).val( val === "en" ? "ES" : "EN")
  });
  $("#btnLang").trigger("click");
});
