const S=document.querySelector(".js_reset");function j(){t.palette=1,t.name="",t.job="",t.phone="",t.email="",t.linkedin="",t.github="",t.photo="",localStorage.removeItem("data")}function k(e){e.preventDefault(),g.reset(),p.innerHTML="Nombre Apellido",f.innerHTML="Front-end developer",i.classList.remove("palette2","palette3"),i.classList.add("palette1"),d.src="./images/beauty_girl1.png",m.style.backgroundImage="",j(),console.log(t)}S.addEventListener("click",k);const c=new FileReader,q=document.querySelector(".js__profile-upload-btn"),d=document.querySelector(".js__profile-image"),m=document.querySelector(".js__profile-preview");function T(e){const n=e.currentTarget.files[0];c.addEventListener("load",w),c.readAsDataURL(n)}function w(){d.src=c.result,m.style.backgroundImage=`url(${c.result})`,t.photo=c.result,localStorage.setItem("formData",JSON.stringify(t))}q.addEventListener("change",T);const E=document.querySelectorAll(".js_collapsable-header"),H=document.querySelectorAll(".form__box"),P=e=>{const o=e.currentTarget.parentNode;for(const r of H)r===o?r.classList.remove("collapsable--close"):r.classList.add("collapsable--close")};for(const e of E)e.addEventListener("click",P);const I=document.querySelector(".js-colors");I.addEventListener("change",M);function b(e){i.classList.remove("palette1","palette2","palette3"),e==="1"?i.classList.add("palette1"):e==="2"?i.classList.add("palette2"):i.classList.add("palette3")}function M(e){const n=e.target.value;b(n)}const g=document.querySelector(".js_form"),p=document.querySelector(".js__preview_name"),f=document.querySelector(".js__preview_job"),_=document.querySelector(".js__preview_mobile"),v=document.querySelector(".js__preview_mail"),L=document.querySelector(".js__preview_linkedin"),y=document.querySelector(".js__preview_github"),i=document.querySelector(".js-cardp"),u=document.querySelector(".js_create_button"),C=document.querySelector(".js_shareLinkContainer"),h=document.querySelector(".js_shareLink"),D=document.querySelector(".js_share_to_X"),l=document.querySelector(".js_shareErrorContainer");function N(e){e.preventDefault(),fetch("https://dev.adalab.es/api/card/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(n=>n.json()).then(n=>{console.log(n),n.success?(u.classList.remove("share_createcard-button"),u.classList.add("share_createcard-buttonclicked"),C.classList.remove("hidden"),h.href=n.cardURL,h.innerHTML=n.cardURL,D.href=`https://twitter.com/intent/tweet?text=Mira%20mi%20mi%20tarjeta%20de%20visita%20creada%20con%20Awesome%20Cards!%20${n.cardURL}`,l.innerHTML=""):O(n.error)})}function O(e){l.innerHTML="",l.classList.remove("hidden"),e.includes("name")&&(l.innerHTML+="El campo Nombre Completo es obligatorio. <br>"),e.includes("job")&&(l.innerHTML+="El campo Puesto es obligatorio. <br>"),e.includes("photo")&&(l.innerHTML+="El campo Imagen de Perfil es obligatorio. <br>"),e.includes("email")&&(l.innerHTML+="El campo Email es obligatorio. <br>"),e.includes("github")&&(l.innerHTML+="El campo GitHub es obligatorio. <br>"),e.includes("linkedin")&&(l.innerHTML+="El campo LinkedIn es obligatorio. <br>"),e.includes("ER_DATA_TOO_LONG")&&(l.innerHTML+="La imagen no debe exceder los 250x250px")}u.addEventListener("click",N);const t={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function A(e){e.preventDefault();const n=e.target.id,o=F(n),r=e.target.value;if(console.log(o),t[o]=r,console.log(t),o==="name")p.innerHTML=r;else if(o==="job")f.innerHTML=r;else if(o==="phone")_.href=r,console.log("telefono");else if(o==="email")v.href=r;else if(o==="linkedin")L.href=r;else if(o==="github")y.href=r;else if(o==="photo"){const a=new FileReader,s=e.target.files[0];a.addEventListener("load",()=>{t.photo=a.result,localStorage.setItem("data",JSON.stringify(t))}),a.readAsDataURL(s)}localStorage.setItem("data",JSON.stringify(t))}const F=e=>e.includes("palette")?"palette":e;g.addEventListener("input",A);const J=()=>{const e=JSON.parse(localStorage.getItem("data"));e&&(R(e),x(),U(),G())};function R(e){t.palette=e.palette,t.name=e.name,t.job=e.job,t.phone=e.phone,t.email=e.email,t.linkedin=e.linkedin,t.github=e.github,t.photo=e.photo}function x(){const e=document.querySelector("#palette_green"),n=document.querySelector("#palette_red"),o=document.querySelector("#palette_blue");t.palette==="1"?e.checked=!0:t.palette==="2"?n.checked=!0:t.palette==="3"&&(o.checked=!0),b(t.palette)}function U(){p.innerHTML=t.name,f.innerHTML=t.job,_.href=t.phone,v.href=t.email,L.href=t.linkedin,y.href=t.github,t.photo.length>0&&(d.src=t.photo,m.style.backgroundImage=`url(${t.photo})`)}function G(){const e=document.querySelector("#name");e.value=t.name;const n=document.querySelector("#job");n.value=t.job;const o=document.querySelector("#email");o.value=t.email;const r=document.querySelector("#phone");r.value=t.phone;const a=document.querySelector("#linkedin");a.value=t.linkedin;const s=document.querySelector("#github");s.value=t.github}J();
//# sourceMappingURL=main.js.map
