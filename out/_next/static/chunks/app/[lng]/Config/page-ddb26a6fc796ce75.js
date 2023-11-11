(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{627:function(e,n,a){var l={"./en/configuration.json":[9205,205],"./en/navbar.json":[2890,890],"./zh/configuration.json":[3207,207],"./zh/navbar.json":[4174,174]};function webpackAsyncContext(e){if(!a.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],r=n[0];return a.e(n[1]).then(function(){return a.t(r,19)})}webpackAsyncContext.keys=function(){return Object.keys(l)},webpackAsyncContext.id=627,e.exports=webpackAsyncContext},4079:function(e,n,a){Promise.resolve().then(a.bind(a,4274))},4274:function(e,n,a){"use strict";a.r(n),a.d(n,{Configuration:function(){return Configuration}});var l=a(5802),r=a(2038),o=a(2177),i=a(8470),t=a(7691),c=a(6834),s=a(9625),h=a(3968),d=a(3969),u=a(2699),KernelSource_KernelSource=e=>{let{t:n,lng:a,updateKernelSource:r,template:o}=e,onChange=e=>{let n=e.target.id,a=e.target.value;switch(n){case"kernelSourceName":o.kernelSource.name=a;break;case"kernelSourceRepo":o.kernelSource.repo=a;break;case"kernelSourceBranch":o.kernelSource.branch=a;break;case"kernelSourceDevice":o.kernelSource.device=a;break;case"kernelSourceDefconfig":o.kernelSource.defconfig=a}r({...o,kernelSource:o.kernelSource})};return(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,l.jsx)(u.Z,{variant:"outlined",label:n("Name"),value:o.kernelSource.name,id:"kernelSourceName",onChange:onChange}),(0,l.jsx)(u.Z,{variant:"outlined",label:n("Repo"),value:o.kernelSource.repo,id:"kernelSourceRepo",onChange:onChange}),(0,l.jsx)(u.Z,{variant:"outlined",label:n("Branch"),value:o.kernelSource.branch,id:"kernelSourceBranch",onChange:onChange}),(0,l.jsx)(u.Z,{variant:"outlined",label:n("Device code"),value:o.kernelSource.device,id:"kernelSourceDevice",onChange:onChange}),(0,l.jsx)(u.Z,{variant:"outlined",label:n("Defconfig"),value:o.kernelSource.defconfig,id:"kernelSourceDefconfig",onChange:onChange})]})},g=a(7776),p=a(6219),x=a(3321),m=a(4890),C=a(6806),b=a(885),v=a(6817),f=a(806),repoToolchain=function(e){let{t:n,lng:a,toolchain:r,index:o,onChange:i,onDelete:t}=e;function onInputChange(e){let n=e.target.id,a=e.target.value;switch(n){case"repoToolchianName":i(o,{...r,name:a});break;case"repoToolchianRepo":i(o,{...r,repo:a});break;case"repoToolchianBranch":i(o,{...r,branch:a})}}function addBinPathInput(){i(o,{...r,binPath:[...r.binPath,""]})}function removeBinPathInput(e){let n=r.binPath.filter((n,a)=>a!==e);i(o,{...r,binPath:n})}function onBinPathChange(e,n){let a=[...r.binPath];a[e]=n.target.value,i(o,{...r,binPath:a})}return(0,l.jsx)(m.Z,{component:"section",sx:{p:2,border:"1px solid grey"},children:(0,l.jsxs)(d.Z,{container:!0,className:"w-full",spacing:2,children:[(0,l.jsx)(d.Z,{xs:1,children:(0,l.jsx)("div",{className:"h-full grid items-center",children:(0,l.jsx)(b.Z,{color:"primary",sx:{p:"10px"},onClick:()=>{t()},children:(0,l.jsx)(C.Z,{})})})}),(0,l.jsxs)(d.Z,{xs:11,children:[(0,l.jsxs)("div",{className:"grid grid-cols-3 gap-x-4",children:[(0,l.jsx)(u.Z,{label:n("Name"),value:r.name,id:"repoToolchianName",onChange:onInputChange}),(0,l.jsx)(u.Z,{label:n("Repo"),value:r.repo,id:"repoToolchianRepo",onChange:onInputChange}),(0,l.jsx)(u.Z,{label:n("Branch"),value:r.branch,id:"repoToolchianBranch",onChange:onInputChange})]}),(0,l.jsx)(p.Z,{fullWidth:!0,size:"small",variant:"outlined",startIcon:(0,l.jsx)(g.Z,{}),onClick:addBinPathInput,children:n("Add bin path")}),(0,l.jsx)("div",{className:"grid grid-cols-2 gap-x-4",children:r.binPath.map((e,a)=>(0,l.jsx)("div",{children:(0,l.jsxs)(v.Z,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:"100%"},children:[(0,l.jsx)("div",{children:n("binPath_")+(a+1)}),(0,l.jsx)(f.ZP,{sx:{ml:1,flex:1},placeholder:n("Add your bin path"),value:e,onChange:e=>onBinPathChange(a,e)}),(0,l.jsx)(b.Z,{color:"primary",sx:{p:"10px"},"aria-label":"directions",onClick:()=>removeBinPathInput(a),children:(0,l.jsx)(C.Z,{})})]})},a))})]})]})})},downloadToolchain=function(e){let{t:n,lng:a,toolchain:r,index:o,onChange:i,onDelete:t}=e;function onInputChange(e){let n=e.target.id,a=e.target.value;switch(n){case"repoToolchianName":i(o,{...r,name:a});break;case"repoToolchianUrl":i(o,{...r,url:a})}}function addBinPathInput(){i(o,{...r,binPath:[...r.binPath,""]})}function removeBinPathInput(e){let n=r.binPath.filter((n,a)=>a!==e);i(o,{...r,binPath:n})}function onBinPathChange(e,n){let a=[...r.binPath];a[e]=n.target.value,i(o,{...r,binPath:a})}return(0,l.jsx)(m.Z,{component:"section",sx:{p:2,border:"1px solid grey"},children:(0,l.jsxs)(d.Z,{container:!0,className:"w-full",spacing:2,children:[(0,l.jsx)(d.Z,{xs:1,children:(0,l.jsx)("div",{className:"h-full grid items-center",children:(0,l.jsx)(b.Z,{color:"primary",sx:{p:"10px"},onClick:()=>{t()},children:(0,l.jsx)(C.Z,{})})})}),(0,l.jsxs)(d.Z,{xs:11,children:[(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[(0,l.jsx)(u.Z,{label:n("Name"),value:r.name,id:"repoToolchianName",onChange:onInputChange}),(0,l.jsx)(u.Z,{label:n("Url"),value:r.url,id:"repoToolchianUrl",onChange:onInputChange})]}),(0,l.jsx)(p.Z,{fullWidth:!0,size:"small",variant:"outlined",startIcon:(0,l.jsx)(g.Z,{}),onClick:addBinPathInput,children:n("Add bin path")}),(0,l.jsx)("div",{className:"grid grid-cols-2 gap-x-4",children:r.binPath.map((e,a)=>(0,l.jsx)("div",{children:(0,l.jsxs)(v.Z,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:"100%"},children:[(0,l.jsx)("div",{children:n("binPath_")+(a+1)}),(0,l.jsx)(f.ZP,{sx:{ml:1,flex:1},placeholder:n("Add your bin path"),value:e,onChange:e=>onBinPathChange(a,e)}),(0,l.jsx)(b.Z,{color:"primary",sx:{p:"10px"},"aria-label":"directions",onClick:()=>removeBinPathInput(a),children:(0,l.jsx)(C.Z,{})})]})},a))})]})]})})},Toolchains_Toolchains=e=>{let{t:n,lng:a,updateToolchains:r,template:o}=e,addToolchain=e=>{let n=[];switch(e){case"repo":n=[...o.toolchains,{name:"",repo:"",branch:"",binPath:[]}];break;case"download":n=[...o.toolchains,{name:"",url:"",binPath:[]}]}let a={...o,toolchains:n};r(a)},removeToolchain=e=>{let n={...o,toolchains:o.toolchains.filter((n,a)=>a!==e)};r(n)},onToolchainChange=(e,n)=>{let a={...o,toolchains:o.toolchains.map((a,l)=>l===e?n:a)};r(a)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(x.Z,{fullWidth:!0,variant:"outlined",children:[(0,l.jsx)(p.Z,{size:"small",variant:"outlined",startIcon:(0,l.jsx)(g.Z,{}),onClick:()=>addToolchain("repo"),children:n("Add tool chain (Repo)")}),(0,l.jsx)(p.Z,{size:"small",variant:"outlined",startIcon:(0,l.jsx)(g.Z,{}),onClick:()=>addToolchain("download"),children:n("Add tool chain (Download)")})]}),o.toolchains.map((e,r)=>"repo"in e?(0,l.jsx)(repoToolchain,{toolchain:e,index:r,onChange:onToolchainChange,onDelete:()=>removeToolchain(r),t:n,lng:a},r):(0,l.jsx)(downloadToolchain,{toolchain:e,index:r,onChange:onToolchainChange,onDelete:()=>removeToolchain(r),t:n,lng:a},r))]})},j=a(3813);let k=["arm64","arm"];var Buildparams=e=>{let{t:n,lng:a,updateParams:o,template:i}=e,[t,c]=(0,r.useState)(""),[s,h]=(0,r.useState)(!1);function onChange(e){let n=e.target.id,a=e.target.value,l={ARCH:i.params.ARCH,CC:i.params.CC,externalCommand:i.params.externalCommand};switch(n){case"paramsArch":l.ARCH=a;break;case"paramsCC":l.CC=a;break;case"paramsExternalCommand":c(a);let r={};try{r=JSON.parse(a),h(!0)}catch(e){r={},h(!1)}finally{l.externalCommand=r}}let t={...i,params:l};o(t)}return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[(0,l.jsx)(j.Z,{id:"paramsArch",disablePortal:!0,fullWidth:!0,options:k,onChange:(e,n)=>{if(n){let e={...i,params:{ARCH:n,CC:i.params.CC,externalCommand:i.params.externalCommand}};o(e)}},onInputChange:(e,n)=>{let a={...i,params:{ARCH:n,CC:i.params.CC,externalCommand:i.params.externalCommand}};o(a)},renderInput:e=>(0,l.jsx)(u.Z,{...e,label:n("Arch"),value:i.params.ARCH})}),(0,l.jsx)(u.Z,{id:"paramsCC",fullWidth:!0,variant:"outlined",label:n("Compiler"),value:i.params.CC,onChange:onChange}),(0,l.jsx)(u.Z,{className:"col-span-2",label:n("Edit your params"),multiline:!0,placeholder:'{\n    "CLANG_TRIPLE": "gcc/bin/aarch64-linux-android-",\n    "CROSS_COMPILE": "gcc/bin/aarch64-linux-android-",\n    "CROSS_COMPILE_ARM32": "gcc/bin/arm-linux-androideabi-",\n    "LD": "clang/bin/ld.lld",\n    "AR": "clang/bin/llvm-ar",\n    "NM": "clang/bin/llvm-nm",\n    "OBJCOPY": "clang/bin/llvm-objcopy",\n    "OBJDUMP": "clang/bin/llvm-objdump",\n    "READELF": "clang/bin/llvm-readelf",\n    "OBJSIZE": "clang/bin/llvm-size",\n    "STRIP": "clang/bin/llvm-strip",\n    "LDGOLD": "clang/bin/aarch64-linux-gnu-ld.gold",\n    "LLVM_AR": "clang/bin/llvm-ar",\n    "LLVM_DIS": "clang/bin/llvm-dis"\n}',variant:"filled",id:"paramsExternalCommand",value:t,onChange:onChange,error:!s})]})})},Anykernel3=e=>{let{t:n,lng:a,updateAnykernel3:r,template:o}=e,onChange=e=>{let n=e.target.id,a=e.target.name,l=e.target.value,i=o.AnyKernel3;switch(n){case"anykernel3Repo":i.repo=l;break;case"anykernel3Branch":i.branch=l}switch(a){case"anykernel3Use":i.use=e.target.checked;break;case"anykernel3Release":i.release=e.target.checked}console.log(i,e.target.checked,n,e);let t={...o,AnyKernel3:i};r(t)};return(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[(0,l.jsx)(t.K,{name:"anykernel3Use",isSelected:o.AnyKernel3.use,onChange:onChange,children:n("Use Anykernel3 pack your kernel?")}),(0,l.jsx)(t.K,{name:"anykernel3Release",isSelected:o.AnyKernel3.release,onChange:onChange,children:n("Publish to github release?")}),(0,l.jsx)(u.Z,{id:"anykernel3Repo",fullWidth:!0,variant:"outlined",label:n("Repo"),value:o.AnyKernel3.repo,onChange:onChange}),(0,l.jsx)(u.Z,{id:"anykernel3Branch",fullWidth:!0,variant:"outlined",label:n("Branch"),value:o.AnyKernel3.branch,onChange:onChange})]})};let Z={kernelSource:{name:"",repo:"",branch:"",device:"",defconfig:""},withKernelSU:!1,toolchains:[],ccache:!1,params:{ARCH:"",CC:"",externalCommand:{}},AnyKernel3:{use:!1,release:!1,repo:"",branch:""}};var Configuarion_ConfigurationBase=e=>{let{t:n,lng:a}=e,[u,g]=r.useState(Z);return(0,l.jsx)(o.w,{className:"h-full w-full",children:(0,l.jsxs)(d.Z,{container:!0,spacing:2,children:[(0,l.jsx)(d.Z,{xs:8,children:(0,l.jsx)(i.G,{className:"space-x-1 h-full place-items-center",children:(0,l.jsxs)(c.d,{className:"config-panel",children:[(0,l.jsx)(s.G,{title:n("Kernel Source"),children:(0,l.jsx)(KernelSource_KernelSource,{t:n,lng:a,updateKernelSource:g,template:u})},"1"),(0,l.jsx)(s.G,{title:n("Toolchains"),children:(0,l.jsx)(Toolchains_Toolchains,{t:n,lng:a,updateToolchains:g,template:u})},"2"),(0,l.jsx)(s.G,{title:n("Build params"),children:(0,l.jsx)(Buildparams,{t:n,lng:a,updateParams:g,template:u})},"3"),(0,l.jsx)(s.G,{title:n("AnyKernel3"),children:(0,l.jsx)(Anykernel3,{t:n,lng:a,updateAnykernel3:g,template:u})},"4"),(0,l.jsx)(s.G,{title:n("Other Configuration"),children:(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[(0,l.jsx)(t.K,{isSelected:u.withKernelSU,onValueChange:e=>{g({...u,withKernelSU:e})},children:n("Is build with KernelSU")}),(0,l.jsx)(t.K,{isSelected:u.ccache,onValueChange:e=>{g({...u,ccache:e})},children:n("Use ccache")})]})},"5")]})})}),(0,l.jsx)(d.Z,{xs:4,children:(0,l.jsx)(i.G,{className:"config-output min-h-full",children:(0,l.jsx)(h.Y,{isReadOnly:!0,label:n("Output"),variant:"bordered",placeholder:JSON.stringify({output:u},null,"	"),value:JSON.stringify(u,null,"	"),className:"min-w-full min-h-full",minRows:30,maxRows:100})})})]})})},S=a(2634);let Configuration=e=>{let{lng:n}=e,{t:a}=(0,S.$)(n,"configuration");return(0,l.jsx)(Configuarion_ConfigurationBase,{t:a,lng:n})}},2634:function(e,n,a){"use strict";a.d(n,{$:function(){return useTranslation}});var l=a(2038),r=a(7835),o=a(3549),i=a(7683),t=a(7387),c=a(8514);let s=["en","zh"],h="translation",d="i18next";function getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;return{supportedLngs:s,fallbackLng:"en",lng:e,fallbackNS:h,defaultNS:h,ns:n}}function useTranslation(e,n,a){let[r,t]=(0,i.Z)([d]),c=(0,o.$G)(n,a),{i18n:s}=c;{let[n,a]=(0,l.useState)(s.resolvedLanguage);(0,l.useEffect)(()=>{n!==s.resolvedLanguage&&a(s.resolvedLanguage)},[n,s.resolvedLanguage]),(0,l.useEffect)(()=>{e&&s.resolvedLanguage!==e&&s.changeLanguage(e)},[e,s]),(0,l.useEffect)(()=>{r.i18next!==e&&t(d,e,{path:"/"})},[e,r.i18next])}return c}r.ZP.use(o.Db).use(c.Z).use((0,t.Z)((e,n)=>a(627)("./".concat(e,"/").concat(n,".json")))).init({...getOptions(),lng:void 0,detection:{order:["path","htmlTag","cookie","navigator"]},preload:[]})}},function(e){e.O(0,[238,756,640,803,479,77,744],function(){return e(e.s=4079)}),_N_E=e.O()}]);