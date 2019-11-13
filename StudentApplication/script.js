var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

 

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["age"] = document.getElementById("age").value;
    formData["phoneNumber"] = document.getElementById("phoneNumber").value;
    formData["level"] = document.getElementById("level").value;
    formData["date"] = document.getElementById("date").value;
    formData["skill"] = document.getElementById("skill").value;
    formData["information"] = document.getElementById("information").value;
    formData["checkbox"] = document.getElementById("checkbox").checked;

      return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phoneNumber;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.level;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.date;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.skill;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.information;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.checkbox;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}


function resetForm() {

    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("level").value = "";
    document.getElementById("date").value = "";
    document.getElementById("skill").value = "";
    document.getElementById("information").value = "";
    document.getElementById("checkbox").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phoneNumber").value = selectedRow.cells[3].innerHTML;
    document.getElementById("level").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML;
    document.getElementById("skill").value = selectedRow.cells[6].innerHTML;
    document.getElementById("information").value = selectedRow.cells[7].innerHTML;
    document.getElementById("checkbox").value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.phoneNumber;
    selectedRow.cells[4].innerHTML = formData.level;
    selectedRow.cells[5].innerHTML = formData.date;
    selectedRow.cells[6].innerHTML = formData.skill;
    selectedRow.cells[7].innerHTML = formData.information;
    selectedRow.cells[8].innerHTML = formData.checkbox;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
       
    return isValid;
}