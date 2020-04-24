document.addEventListener("DOMContentLoaded", function () {
  var modal_elems = document.querySelectorAll(".modal");
  let modal_instances = M.Modal.init(modal_elems, {});

  let select_elems = document.querySelectorAll("select");
  let select_instances = M.FormSelect.init(select_elems, {});
});
