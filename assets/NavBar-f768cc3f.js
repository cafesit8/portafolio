import{r as s,a as c,j as e}from"./index-6b797d2e.js";import{G as r,B as m,a as p}from"./index.esm-bfc90d8b.js";function d(t){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(t)}function u(t){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(t)}function g(){const[t,l]=s.useState(!0),[n,x]=s.useState(!0),o=()=>{document.querySelector(".list").classList.toggle("active"),x(!n)},i=()=>{const a=!t;l(a),localStorage.setItem("Dia/Noche",JSON.stringify(a)),document.documentElement.classList.toggle("dark")};return s.useEffect(()=>{const a=JSON.parse(localStorage.getItem("Dia/Noche"));a?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"),l(a)},[]),c("nav",{className:"w-[1500px] bg-[#f8f1e8] dark:bg-[#141414] duration-200 flex items-center justify-between py-5 max-[1530px]:w-[95%] fixed max-[750px]:py-3 z-40",children:[e("span",{className:"font-medium text-[#db865b] text-[20px] ",children:"Cafecito"}),c("div",{className:"flex items-center gap-10 max-[750px]:gap-5",children:[c("ul",{className:"list flex gap-10 items-center max-[750px]:absolute max-[750px]:w-full max-[750px]:left-0 max-[750px]:top-[-400%] max-[750px]:flex-col max-[750px]:gap-5 max-[750px]:py-5 max-[750px]:z-20 max-[750px]:bg-[#fcf6ee] dark:max-[750px]:bg-[#361b0b] duration-200",children:[e("li",{children:e("a",{className:"text-[17px]",href:"#inicio",children:"Inicio"})}),e("li",{children:e("a",{className:"text-[17px]",href:"#SobreMi",children:"Sobre Mi"})}),e("li",{children:e("a",{className:"text-[17px]",href:"#proyectos",children:"Proyectos"})}),e("li",{children:e("a",{className:"text-[17px]",href:"#contacto",children:"Contacto"})})]}),t?e(m,{onClick:i,className:"text-[20px] cursor-pointer z-20"}):e(p,{onClick:i,className:"text-[25px] cursor-pointer z-20"}),n?e(d,{onClick:o,className:"text-[22px] z-20 min-[750px]:hidden"}):e(u,{onClick:o,className:"text-[22px] z-20 min-[750px]:hidden"})]})]})}export{g as default};