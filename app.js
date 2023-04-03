let arrData = [];
if (localStorage.arrData != null) {
    arrData = JSON.parse(localStorage.arrData);
    render();
}

let form = document.getElementById("myform");
form.addEventListener("submit", handeleSubmit);

function handeleSubmit(event) {
    // event.preventDefault();
    let firstrname = event.target.fname.value;
    let gradee = event.target.grade.value;
    let phonee = event.target.phone.value;
    let gender = event.target.optradio.value;
    let bairthday = event.target.bair.value;
    let imgg = event.target.image.value;
    let sel = event.target.maj.value;
    console.log(firstrname, gradee, phonee, gender, bairthday, imgg, sel);

    let someone = new Student(firstrname, gradee, phonee, gender, bairthday, imgg, sel);
    arrData.push(someone);
    localStorage.setItem('arrData', JSON.stringify(arrData));
    render();


}

function Student(firstrname, gradee, phonee, gender, bairthday, imgg, sel) {
    this.firstrname = firstrname;
    this.gradee = gradee;
    this.phonee = phonee;
    this.gender = gender;
    this.bairthday = bairthday;
    this.imgg = imgg;
    this.sel = sel;



}
function render() {
    for (let i = 0; i < arrData.length; i++) {
        let divcont = document.getElementById("stdinfo");
        let std = document.createElement('div');
        let img1 = document.createElement('img');
        img1.src = `${arrData[i].imgg}`;
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        li1.textContent = `Name: ${arrData[i].firstrname}`;
        let li2 = document.createElement('li');
        li2.textContent = `Phone: ${arrData[i].phonee}`;
        let li3 = document.createElement('li');
        li3.textContent = `Gender: ${arrData[i].gender}`;
        let li4 = document.createElement('li');
        li4.textContent = `Bairthday ${arrData[i].bairthday}`;
        let li5 = document.createElement('li');
        li5.textContent = `Major ${arrData[i].sel}`;
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        std.appendChild(img1);
        std.appendChild(ul);
        divcont.appendChild(std);
        // form.reset();

    }
}
