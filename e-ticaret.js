const araiconn=document.querySelector("#araicon");
const arainput2=document.querySelector("#arainput");
const kayitform=document.querySelector(".formdivtext22")
const sepetaldiv=document.querySelector("#sepetaltdiv");
const sepeteklebtnler = document.querySelectorAll(".sepetekle");
let sonuc=document.querySelector("#urunler").children[0].src;
const b = "0"; Boolean(b);
console.log(b);

ara();
function ara(){
  
  araiconn.addEventListener("click",arabtn)
  sepeteklebtnler.forEach((btn) => {
    btn.addEventListener("click", sepeteklef);

  });

}

function sepeteklef(e){
  
  const urunId = e.target.dataset.urunId;
  const sepetalt2f=document.createElement("div");
  sepetalt2f.id="sepetalt2div";
  const sepetimgdiv=document.createElement("div");
  sepetimgdiv.id="sepetimgdiv";
  const sepetimg=document.createElement("img");
  sepetimg.id="sepetimg"
  sepetimg.src=e.target.closest('#urunler').querySelector('img').src;
  const urunismih5=document.createElement("h5");
  urunismih5.className="sepeturunismih55";
  urunismih5.appendChild(document.createTextNode(e.target.closest('#urunlerdiv').querySelector(".urunlerh1isim").textContent));
  const urunismifiyath2=document.createElement("h2");
  urunismifiyath2.className="urunlerh22fiyat";
  urunismifiyath2.appendChild(document.createTextNode(e.target.closest('#urunlerdiv').querySelector(".urunlerh2fiyat").textContent));
  sepetaldiv.appendChild(sepetalt2f);
  sepetalt2f.appendChild(sepetimgdiv);
  sepetalt2f.appendChild(sepetimg);
  sepetalt2f.appendChild(urunismih5);
  sepetalt2f.appendChild(urunismifiyath2);
}
function arabtn(e){
if(arainput2.value=="masaüstü"){
  window.location.href = "http://127.0.0.1:5500/js/DOM-JS/e-ticaret/masaustu-pc.html";
}   
else if(arainput2.value=="oyuncu monitörü")
{
  window.location.href = "http://127.0.0.1:5500/js/DOM-JS/e-ticaret/oyuncu-m.html";

}
}

