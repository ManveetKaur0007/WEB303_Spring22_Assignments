/* Search Filter */
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

$("#myInput").keyup(function(e){
  var rows=$("tbody").find("tr").show();
    $("tbody tr").each(function (td) {
      let value = $(this).children().first().text().toLowerCase();
        console.log(value);
        if(e.target.value === "") {
          $(this).css("background-color", "");}
        else if(value.includes(e.target.value.toLowerCase())) {
          $(this).css("background-color", "red");}
        else {
          $(this).css("background-color", "");}
  }); 
});