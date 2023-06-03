// inprogress


function check1() {
  var table = document.getElementById("table");
  var tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td");
    if (td.length >= 3) {
      let progress = td[2].textContent;
      if (progress === 'in progress') {
        tr[i].style.color= 'blue'
      } else {
        tr[i].style.Color = '';
      }
    }
  }
}



// completed


function check2() {
  var table = document.getElementById("table");
  var tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td");
    if (td.length >= 3) {
      let progress = td[2].textContent;
      if (progress === 'Completed') {
        tr[i].style.color='red';
      } else {
        tr[i].style.backgroundColor = '';
      }
    }
  }
}

  











//  
function clickme() {
          
    var input, filter, table, tr, td, txtValue;
    input = document.getElementById("id");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    td = table.getElementsByTagName("td")
  
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      td1 = tr[i].getElementsByTagName("td")[1];
      td2 = tr[1].getElementsByTagName("td")[2];

      if (td) {
        txtValue = td.textContent;
        txtValue1=td1.textContent;
        txtValue2 = td2.textContent;

        if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter)>-1){
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }



 



