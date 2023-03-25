let form=document.getElementById("myform");
let table=document.getElementById("mytable");
form.addEventListener("submit", handeleSubmit);

function handeleSubmit(event){
    event.preventDefault();
    let firstrname= event.target.fname.value;
    let gradee=event.target.grade.value;
    let phonee=event.target.phone.value;
    let gender=event.target.optradio.value;
    let bairthday=event.target.bair.value;
console.log(firstrname,gradee,phonee,gender,bairthday);

render(firstrname,gradee,phonee,gender,bairthday);}

function render(firstrname,gradee,phonee,gender,bairthday){
    let row=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');
    let td5=document.createElement('td');

    td1.textContent=firstrname;
    td2.textContent=gradee;
    td3.textContent=phonee;
    td4.textContent=gender;
    td5.textContent=bairthday;

    
row.appendChild(td1);
row.appendChild(td2);
row.appendChild(td3);
row.appendChild(td4);
row.appendChild(td5);

table.appendChild(row);
form.reset ();

}
