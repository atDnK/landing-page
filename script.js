let alert = document.getElementById("warning");

let formMessage = document.getElementById('formMesage')
let submitForm = document.getElementById('submit-form')


const handleGetFormData = ()=>{
  var obj = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    city : document.getElementById("city").value,
    zipCode : document.getElementById("zip-code").value,
    status : document.getElementById("status").checked,
  }
  return obj
}

const isNumber = (string)=>{
  if(isNaN(string)==false){
    return true
  }
  else{
    return false
  }
}

const checkboxIsChecked = ()=>{
  if(document.getElementById('status').checked == true){
    return true
  }
  else{
    return false
  }
}

const validateFormData = (obj) =>{
  if(obj != null && isNumber(obj.zipCode) && checkboxIsChecked()){
    return true
  }
  else return false
}

const submit = ()=>{
  if (validateFormData(handleGetFormData()) == false){
    return warning.innerHTML = `<div class = "notif notif-danger text-center">Periksa form anda sekali lagi</div>`;
  }
  else{
     return warning.innerHTML = ``;
  }
}

submitForm.addEventListener('click',(e)=>{
  e.preventDefault()
  submit()
})