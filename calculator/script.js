


const div1 =document.createElement("div");
div1.setAttribute("class","container border  text-primary text-opacity-75   border-info p-1 bg-light  mt-5 d-flex justify-content-center border  samplewidth mx-auto")
div1.setAttribute("align","center");

const heading =document.createElement("h1");
heading.setAttribute("class","fs-3 text fw-bold fw-bolder  text-centre samplewidth p-1 ");
heading.innerHTML ="Calclator";
div1.appendChild(heading);
document.body.appendChild(div1);

const card =document.createElement("div");
card.setAttribute("class","card samplewidth p-4 mx-auto");

const inputText =document.createElement("input");
inputText.setAttribute("type","text");
inputText.setAttribute("id","text");
inputText.setAttribute("value","");
inputText.setAttribute("class","p-3 text-end ");
inputText.setAttribute("placeholder","0");
card.appendChild(inputText);
document.body.appendChild(card);


const rowDiv1 =document.createElement("div");
rowDiv1.setAttribute("class","row  p-2 gap-4");


const coldiv11 =document.createElement("div");
coldiv11.setAttribute("class","rowdivcol w-2 border bg-light");
const btn1 =document.createElement("button");
btn1.setAttribute("type","button");
btn1.setAttribute("id","btn1");
btn1.setAttribute("value","+");
btn1.setAttribute("class","btn btn-info");
btn1.setAttribute("onclick",display);
btn1.innerHTML="+";
coldiv11.appendChild(btn1);
rowDiv1.appendChild(coldiv11);
card.appendChild(rowDiv1);
document.body.appendChild(card);

const coldiv12 =document.createElement("div");
coldiv12.setAttribute("class","rowdivcol w-2 border bg-light .ms-2.5");
const btn2 =document.createElement("button");
btn2.setAttribute("type","button");
btn2.setAttribute("id","btn2");
btn2.setAttribute("value","-");
btn2.setAttribute("class","btn btn-info");
btn2.setAttribute("onclick",display);
btn2.setAttribute("type","button");
btn2.innerHTML="-";
coldiv12.appendChild(btn2);
document.body.appendChild(coldiv12);
rowDiv1.appendChild(coldiv12);
card.appendChild(rowDiv1);
document.body.appendChild(card);

const coldiv13 =document.createElement("div");
coldiv13.setAttribute("class","rowdivcol w-2 border bg-light .ms-2.5");
const btn3 =document.createElement("button");
btn3.setAttribute("type","button");
btn3.setAttribute("id","btn3");
btn3.setAttribute("value","*");
btn3.setAttribute("class","btn btn-info");
btn3.setAttribute("onclick",display);
btn3.setAttribute("type","button");
btn3.innerHTML="*";
coldiv13.appendChild(btn3);
document.body.appendChild(coldiv13);
rowDiv1.appendChild(coldiv13);
card.appendChild(rowDiv1);
document.body.appendChild(card);

const coldiv14 =document.createElement("div");
coldiv14.setAttribute("class","rowdivcol w-2 border bg-light .ms-2.5");
const btn4 =document.createElement("button");
btn4.setAttribute("type","button");
btn4.setAttribute("id","btn4");
btn4.setAttribute("value","/");
btn4.setAttribute("class","btn btn-info");
btn4.setAttribute("onclick",display);
btn4.setAttribute("type","button");
btn4.innerHTML="/";
coldiv14.appendChild(btn4);
document.body.appendChild(coldiv14);
rowDiv1.appendChild(coldiv14);
card.appendChild(rowDiv1);
document.body.appendChild(card);
card.appendChild(rowDiv1);
document.body.appendChild(card);


const rowDiv2 =document.createElement("div");
rowDiv2.setAttribute("class","row  p-2 gap-4");
const coldiv21 =document.createElement("div");
coldiv21.setAttribute("class","rowdivcol w-2 border bg-light");
const btn5 =document.createElement("button");
btn5.setAttribute("type","button");
btn5.setAttribute("id","btn5");
btn5.setAttribute("value","9");
btn5.setAttribute("class","btn btn-info");
btn5.setAttribute("onclick",display);
btn5.innerHTML="9";
coldiv21.appendChild(btn5);
rowDiv2.appendChild(coldiv21);
card.appendChild(rowDiv2);
document.body.appendChild(card);

const coldiv22 =document.createElement("div");
coldiv22.setAttribute("class","rowdivcol w-2 border bg-light .ms-2.5");
const btn6 =document.createElement("button");
btn6.setAttribute("type","button");
btn6.setAttribute("id","btn6");
btn6.setAttribute("value","8");
btn6.setAttribute("class","btn btn-info");
btn6.setAttribute("onclick",display);
btn6.setAttribute("type","button");
btn6.innerHTML="8";
coldiv22.appendChild(btn6);
rowDiv2.appendChild(coldiv22);
card.appendChild(rowDiv2);
document.body.appendChild(card);

const coldiv23 =document.createElement("div");
coldiv23.setAttribute("class","rowdivcol w-2 border bg-light .ms-2.5");
const btn7 =document.createElement("button");
btn7.setAttribute("type","button");
btn7.setAttribute("id","btn7");
btn7.setAttribute("value","7");
btn7.setAttribute("class","btn btn-info");
btn7.setAttribute("onclick",display);
btn7.setAttribute("type","button");
btn7.innerHTML="7";
coldiv23.appendChild(btn7);
rowDiv2.appendChild(coldiv23);
card.appendChild(rowDiv2);
document.body.appendChild(card);

const coldiv24 =document.createElement("div");
coldiv24.setAttribute("class","rowdivcol w-2 border bg-light .ms-2.5");
const btn8 =document.createElement("button");
btn8.setAttribute("type","button");
btn8.setAttribute("id","btn8");
btn8.setAttribute("value"," ");
btn8.setAttribute("class","btn btn-info");
btn8.setAttribute("onclick",display);
btn8.setAttribute("type","button");
btn8.innerHTML="AC";
coldiv24.appendChild(btn8);
rowDiv2.appendChild(coldiv24);
card.appendChild(rowDiv2);
document.body.appendChild(card);


const rowDiv3 =document.createElement("div");
rowDiv3.setAttribute("class","row  p-2 gap-4");

const coldiv31 =document.createElement("div");
coldiv31.setAttribute("class","rowdivcol w-2 border bg-light");
const btn9 =document.createElement("button");
btn9.setAttribute("type","button");
btn9.setAttribute("id","btn9");
btn9.setAttribute("value","6");
btn9.setAttribute("class","btn btn-info");
btn9.setAttribute("onclick",display);
btn9.innerHTML="6";
coldiv31.appendChild(btn9);
rowDiv3.appendChild(coldiv31);
card.appendChild(rowDiv3);
document.body.appendChild(card);


const coldiv32 =document.createElement("div");
coldiv32.setAttribute("class","rowdivcol w-2 border bg-light");
const btn10 =document.createElement("button");
btn10.setAttribute("type","button");
btn10.setAttribute("id","btn10");
btn10.setAttribute("value","5");
btn10.setAttribute("class","btn btn-info");
btn10.setAttribute("onclick",display);
btn10.innerHTML="5";
coldiv32.appendChild(btn10);
rowDiv3.appendChild(coldiv32);
card.appendChild(rowDiv3);
document.body.appendChild(card);

const coldiv33 =document.createElement("div");
coldiv33.setAttribute("class","rowdivcol w-2 border bg-light");
const btn11 =document.createElement("button");
btn11.setAttribute("type","button");
btn11.setAttribute("id","btn11");
btn11.setAttribute("value","4");
btn11.setAttribute("class","btn btn-info");
btn11.setAttribute("onclick",display);
btn11.innerHTML="4";
coldiv33.appendChild(btn11);
rowDiv3.appendChild(coldiv33);
card.appendChild(rowDiv3);
document.body.appendChild(card);

const coldiv34 =document.createElement("div");
coldiv34.setAttribute("class","rowdivcol w-2 border bg-light");
const btn12 =document.createElement("button");
btn12.setAttribute("type","button");
btn12.setAttribute("id","btn12");
btn12.setAttribute("value","=");
btn12.setAttribute("class","btn btn-info");
btn12.setAttribute("onclick",calculation);
btn12.innerHTML="=";
coldiv34.appendChild(btn12);
rowDiv3.appendChild(coldiv34);
card.appendChild(rowDiv3);
document.body.appendChild(card);


const rowDiv4 =document.createElement("div");
rowDiv4.setAttribute("class","row  p-2 gap-4");

const coldiv41 =document.createElement("div");
coldiv41.setAttribute("class","rowdivcol w-2 border bg-light");
const btn13 =document.createElement("button");
btn13.setAttribute("type","button");
btn13.setAttribute("id","btn13");
btn13.setAttribute("value","3");
btn13.setAttribute("class","btn btn-info");
btn13.setAttribute("onclick",display);
btn13.innerHTML="3";
coldiv41.appendChild(btn13);
rowDiv4.appendChild(coldiv41);
card.appendChild(rowDiv4);
document.body.appendChild(card);

const coldiv42 =document.createElement("div");
coldiv42.setAttribute("class","rowdivcol w-2 border bg-light");
const btn14 =document.createElement("button");
btn14.setAttribute("type","button");
btn14.setAttribute("id","btn14");
btn14.setAttribute("value","2");
btn14.setAttribute("class","btn btn-info");
btn14.setAttribute("onclick",display);
btn14.innerHTML="2";
coldiv42.appendChild(btn14);
rowDiv4.appendChild(coldiv42);
card.appendChild(rowDiv4);
document.body.appendChild(card);

const coldiv43 =document.createElement("div");
coldiv43.setAttribute("class","rowdivcol w-2 border bg-light");
const btn15 =document.createElement("button");
btn15.setAttribute("type","button");
btn15.setAttribute("id","btn15");
btn15.setAttribute("value","1");
btn15.setAttribute("class","btn btn-info");
btn15.setAttribute("onclick",display);
btn15.innerHTML="1";
coldiv43.appendChild(btn15);
rowDiv4.appendChild(coldiv43);
card.appendChild(rowDiv4);
document.body.appendChild(card);

const coldiv44 =document.createElement("div");
coldiv44.setAttribute("class","rowdivcol w-2 border bg-light");
const btn16 =document.createElement("button");
btn16.setAttribute("type","button");
btn16.setAttribute("id","btn16");
btn16.setAttribute("value","0");
btn16.setAttribute("class","btn btn-info");
btn16.setAttribute("onclick",display);
btn16.innerHTML="0";
coldiv44.appendChild(btn16);
rowDiv4.appendChild(coldiv44);
card.appendChild(rowDiv4);
document.body.appendChild(card);

card.appendChild(rowDiv4);
document.body.appendChild(card);



btn1.addEventListener("click",()=>{
    const btnone=document.getElementById("btn1").value;
    //document.getElementById("text").value+=btnone;
    display(btnone);
    });
    
    
    btn2.addEventListener("click",()=>{
    const btntwo=document.getElementById("btn2").value;
    //document.getElementById("text").value+=btntwo;
    display(btntwo);
    });
    btn3.addEventListener("click",()=>{
        const btnthree = document.getElementById("btn3").value;
        //document.getElementById("text").value+=btnthree;
        display(btnthree);
    })
    btn4.addEventListener("click",()=>{
        const btnfour = document.getElementById("btn4").value;
        //document.getElementById("text").value+=btnfour;
        display(btnfour);
    })
    
    
    btn5.addEventListener("click",()=>{
    
        const btnfive =document.getElementById("btn5").value;
        //document.getElementById("text").value+=btnfive;
        display(btnfive);
    });
    btn6.addEventListener("click",()=>{
        const btnsix=document.getElementById("btn6").value;
        //document.getElementById("text").value+=btnsix;
        display(btnsix);
    });
    btn7.addEventListener("click",()=>{
        const btnseven=document.getElementById("btn7").value;
        //document.getElementById("text").value+=btnseven;
        display(btnseven);
    });
    btn8.addEventListener("click",()=>{
        const btnEight=document.getElementById("text").value="";
        display(btnEight);
    });
    
    btn9.addEventListener("click",()=>{
        const btnnine=document.getElementById("btn9").value;
        //document.getElementById("text").value+=btnnine;
        display(btnnine);
    });
    
    btn10.addEventListener("click",()=>{
        const btnten=document.getElementById("btn10").value;
        //document.getElementById("text").value+=btnten;
        display(btnten);
    });
    btn11.addEventListener("click",()=>{
        const btneleven=document.getElementById("btn11").value;
        //document.getElementById("text").value+=btneleven;
        display(btneleven);
    });
    
    
    btn13.addEventListener("click",()=>{
        const btnthirteen=document.getElementById("btn13").value;
        //document.getElementById("text").value+=btnthirteen;
        display(btnthirteen);
    });
    btn14.addEventListener("click",()=>{
        const btnfourteen=document.getElementById("btn14").value;
        //document.getElementById("text").value+=btnfourteen;
        display(btnfourteen);
    });
    btn15.addEventListener("click",()=>{
        const btnfifteen=document.getElementById("btn15").value;
        //document.getElementById("text").value+=btnfifteen;
        display(btnfifteen);
    });
    btn16.addEventListener("click",()=>{
        const btnsixteen=document.getElementById("btn16").value;
        //document.getElementById("text").value+=btnsixteen;
        display(btnsixteen);
    });
    btn12.addEventListener("click",()=>{
        const btntwelve=document.getElementById("btn12").value;
        //document.getElementById("text").value+=btnsixteen;
        calculation();
    });

    let outputScreen = document.getElementById("text");
    
    function display(num){

    outputScreen.value +=num;
    }

    function calculation()
    {
        try{
            
            outputScreen.value=eval(outputScreen.value);
            
        }
        catch{
            alert("Invalid");
        }
    }