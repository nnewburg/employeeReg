 $(function( $ ){
      $.ajax({
        method: "GET",
        url: "/api/employee"
      }).done((resources) => {


resources.forEach(function(employee){

console.log(employee)

      renderEmployee(buildEmployee(employee));
    })
  })
});

 function renderEmployee(data) {
    data.appendTo($('#listEmployee'));
  }

  function buildEmployee(employee){


    let employeeDiv = $("<div></div>");
    $(employeeDiv).addClass("employeeDiv")
    let id = $("<p></p>")
    $(id).text(employee.id)
    $(id).addClass("employeeID")
    let name = $("<p></p>")
    $(name).text(employee.name)
    $(name).addClass("employeeName")
    let email = $("<p></p>")
    $(email).text(employee.email)
    $(email).addClass("employeeEmail")
    let position = $("<p></p>")
    $(position).text(employee.position)
    $(position).addClass("employeePosition")
    let phone = $("<p></p>")
    $(phone).text(addDashes(employee.phone))
    $(phone).addClass("employeePhone")
    let salary = $("<p></p>")
    $(salary).text('$' + employee.salary)
    $(salary).addClass("employeeSalary")
    let date = $("<p></p>")
    $(date).text(employee.date_hired.slice(0,10))
    $(date).addClass("employeeDate")
    $(employeeDiv).append(id)
    $(employeeDiv).append(name)
    $(employeeDiv).append(email)
    $(employeeDiv).append(position)
    $(employeeDiv).append(phone)
    $(employeeDiv).append(salary)
    $(employeeDiv).append(date)
    return employeeDiv

  };


function addDashes(f)
{
  console.log(typeof f)
   let f_val = f.toString().replace(/\D[^\.]/g, "");
   return done = f_val.slice(0,3)+"-"+f_val.slice(3,6)+"-"+f_val.slice(6);

}
