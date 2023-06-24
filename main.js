/*start header*/
let header = document.createElement("header");
let logo =document.createElement('span');
let logo_text=document.createTextNode("Elzero");
logo.appendChild(logo_text);
header.appendChild(logo);
let ul =document.createElement("ul");
let lis;
for(let i=0;i<4;i++){
   lis=document.createElement('li');
   ul.appendChild(lis); 
}
ul.children[0].innerHTML="Home";
ul.children[0].className="first";
ul.children[1].textContent="service";
ul.children[1].className="second";
ul.children[2].innerHTML="about";
ul.children[2].className="third"
ul.children[3].innerHTML="contact";
ul.children[3].className="four";
header.appendChild(ul);
document.body.appendChild(header);
header.style.backgroundColor='#EEE';
header.style.display="flex";
ul.style.listStyle="none";
header.style.justifyContent="space-between";
header.style.alignItems='center';
header.style.padding="10px";
logo.style.fontSize="21px";
logo.style.fontWeight="bold";
logo.style.background='yellow';
logo.style.padding='7px';
logo.style.borderRadius="5px";
logo.style.cursor="pointer";
ul.style.display='flex';
ul.style.flexGrow=3;
ul.style.justifyContent='flex-end';
ul.style.padding="10px";
ul.children[1].style.marginLeft="30px";
ul.children[2].style.marginLeft="30px";
ul.children[3].style.marginLeft="30px";
ul.style.fontSize="19px";
ul.style.fontWeight="bold";
/*end header*/
/*start section*/
let div_tot=document.createElement('div');
for(let i=0;i<15;i++){
    let divs=document.createElement('div');
    let span_new=document.createElement('span');
    let text=document.createTextNode("product");
    let h5=document.createElement('h5');
    h5.innerHTML=i+1;
    h5.style.fontSize="19px";
    span_new.style.fontSize="19px";
    span_new.appendChild(text);
    divs.appendChild(span_new);
    divs.appendChild(h5);
    div_tot.appendChild(divs);
    divs.style.background="white";
    divs.style.padding="23px";
    divs.style.textAlign="center";
}
div_tot.style.backgroundColor='#eee';
div_tot.style.display="grid";
div_tot.style.gridTemplateColumns="repeat(auto-fill,minmax(150px,300px))";
div_tot.style.justifyContent="center";
div_tot.style.alignItems="center";
div_tot.style.gap="15px";
div_tot.style.padding="15px"
document.body.appendChild(div_tot);
/*end section*/
/*start footer*/
let footer=document.createElement('footer');
let textfoot=document.createTextNode("Copyright 2023 by kareem tarek");
footer.style.background='#6ACF65';
footer.style.textAlign='center';
footer.style.fontWeight="bold";
footer.style.fontSize="19px";
footer.style.padding="18.9px"
footer.appendChild(textfoot);
document.body.appendChild(footer);