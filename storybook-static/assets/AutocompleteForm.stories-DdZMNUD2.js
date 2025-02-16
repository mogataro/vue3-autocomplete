import{d as be,o as he,b as xe,e as M,f as U,u as Be,w as Ie,g as Ve,n as ke,j as A,k as g,l as $,v as Oe,m as C,p as Le,F as Me,q as Ue,s as H,t as q,x as Ae}from"./vue.esm-bundler-_-amQrR0.js";import{f as Ce,w as E,u as v,a as ce,e as i}from"./index-Dvhd6Hl3.js";const He=(a,o)=>{document.addEventListener("click",re(a,o))},Fe=(a,o)=>{document.removeEventListener("click",re(a,o))},re=(a,o=()=>{})=>l=>{l.target instanceof HTMLElement&&(l.target.closest(a)||o())},De={class:"autocomplete-form__inner"},Ke=["placeholder","aria-expanded","aria-activedescendant","autocomplete"],Ne=["value"],Se=["id","value","aria-selected","onClick","onKeydown"],ue=be({__name:"AutocompleteForm",props:{modelValue:{},options:{},emptyOptionText:{default:"No data available"},placeholder:{default:"入力または選択してください"},autocomplete:{default:"off"}},emits:["update:modelValue"],setup(a,{expose:o,emit:l}){const s=window.crypto.randomUUID(),r="autocomplete-form--"+s;he(()=>{He(`.${r}`,w)}),xe(()=>{Fe(`.${r}`,w)});const c=a,m=l,y=M(()=>{const e={label:c.emptyOptionText,value:void 0},n=c.options.length>0?c.options:[e];if(p.value==="")return n;const t=n.filter(d=>d.label.indexOf(p.value)>-1);return t.length===0?[e]:t}),p=U(""),me=()=>{const e=c.options.find(n=>n.value!=null&&n.value===u.value);e&&e.label&&(p.value=e&&e.label)},de=()=>p.value="",u=M({get:()=>c.modelValue,set:e=>m("update:modelValue",e)}),f=U(!1),_=()=>f.value=!0,w=()=>f.value=!1,F=`listboxId_${s}`,V=(e="null")=>`optionId_${s}_${e}`,ve=M(()=>u.value===null?void 0:V(u.value)),k=e=>{var d;const n=(d=y.value[N(e)])==null?void 0:d.value,t=document.getElementById(V(n));t==null||t.focus()},ye=Be("autocomplete-form__input"),D=e=>e.preventDefault(),fe=e=>{p.value=e.label,u.value=e.value,w()},we=e=>{p.value=e.label,u.value=e.value,K()},K=()=>{w();const e=ye.value;e!==null&&e.focus()},Ee=e=>{const n=e.key;if(n==="Escape"){w();return}if(n==="Enter"){_();return}if(n==="ArrowDown"||n==="ArrowUp"){if(!f.value){_();return}const t=n==="ArrowDown"?0:y.value.length-1;k(t);return}S()},_e=()=>{if(_(),p.value===""){u.value=null;return}const e=y.value.filter(n=>n.label===p.value);if(e.length===1){u.value=e[0].value;return}if(u.value!==null&&e.length===0){u.value=null;return}},N=e=>e>=y.value.length?0:e<0?y.value.length-1:e,ge=(e,n)=>{const t=e.key;if(!["ArrowDown","ArrowUp"].includes(t))return;const d=N(n);return k(t==="ArrowDown"?d+1:d-1)},O=U(null);Ie(u,me,{immediate:!0}),Ve(async()=>{await ke(),O.value=document.body});const Te=()=>{O.value.addEventListener("keydown",D)},S=()=>{O.value.removeEventListener("keydown",D)};return o({resetInputText:de}),(e,n)=>(H(),A("div",{class:C(["autocomplete-form",r])},[g("div",De,[$(g("input",{ref:"autocomplete-form__input","onUpdate:modelValue":n[0]||(n[0]=t=>p.value=t),class:"autocomplete-form__input",type:"text",placeholder:c.placeholder,role:"combobox","aria-haspopup":"listbox","aria-controls":F,"aria-expanded":f.value,"aria-activedescendant":ve.value,autocomplete:c.autocomplete,"data-testid":"autocomplete-form__input",onInput:_e,onClick:_,onKeydown:n[1]||(n[1]=t=>Ee(t)),onFocus:Te,onBlur:S},null,40,Ke),[[Oe,p.value]]),g("i",{class:C(["autocomplete-form__icon",{"autocomplete-form__icon--up":f.value}])},null,2)]),$(g("ul",{id:F,class:"autocomplete-form__list",role:"listbox","data-testid":"autocomplete-form__list",value:u.value},[(H(!0),A(Me,null,Ue(y.value,(t,d)=>(H(),A("li",{id:V(t.value),key:`key_${t.value}`,class:C(["autocomplete-form__item",{"autocomplete-form__item--empty":t.label===c.emptyOptionText}]),value:t.value??"",role:"option",tabindex:"0","data-testid":"autocomplete-form__item","aria-selected":u.value!==null&&u.value===t.value,onClick:L=>fe(t),onKeydown:[L=>ge(L,d),q(L=>we(t),["enter"]),q(K,["esc"])]},Ae(t.label),43,Se))),128))],8,Ne),[[Le,f.value]])]))}}),$e=(a,o)=>{const l=a.__vccOpts||a;for(const[s,r]of o)l[s]=r;return l},qe=$e(ue,[["__scopeId","data-v-a9fe0e00"]]);ue.__docgenInfo={exportName:"default",displayName:"AutocompleteForm",description:"",tags:{},expose:[{name:"resetInputText"}],props:[{name:"modelValue",required:!0,type:{name:"OptionValue"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"Option"}]}},{name:"emptyOptionText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No data available'"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'入力または選択してください'"}},{name:"autocomplete",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'off'"}}],events:[{name:"update:modelValue",type:{names:["OptionValue"]}}],sourceFiles:["/app/src/components/AutocompleteForm.vue"]};const ie="No data available",pe=[{value:"01",label:"北海道"},{value:"06",label:"山形県"},{value:"07",label:"福島県"},{value:"16",label:"富山県"},{value:"19",label:"山梨県"},{value:"31",label:"島根県"},{value:"32",label:"島根県"},{value:"33",label:"岡山県"},{value:"34",label:"広島県"},{value:"35",label:"山口県"},{value:"40",label:"福岡県"},{value:"42",label:"長崎県"},{value:"43",label:"熊本県"},{value:"47",label:"沖縄県"}],je={title:"AutocompleteForm",parameters:{docs:{subtitle:"オートコンプリート",description:{component:"入力値で選択肢が絞り込まれる。完全一致した選択肢が1つの場合は選択された状態になる。<br />Enterキー、Tabキー、Escape、矢印キーで操作可能。<br /><br />Narrow down your choices by input value. If only one option matches exactly, it will be selected.<br />Can be operated with Enter key, Tab key, Escape, and arrow keys."}}},argTypes:{"onUpdate:modelValue":{table:{category:"events",type:{summary:"[v: OptionValue]"},disable:!0}}},args:{modelValue:null,options:pe,emptyOptionText:ie,"onUpdate:modelValue":Ce()},component:qe},T={},b={tags:["!autodocs"],args:{modelValue:pe[0].value},play:async({args:a,canvasElement:o,step:l})=>{const s=E(o),r=s.getByTestId("autocomplete-form__input");await l("一致するオプションが存在しない場合、emptyOptionTextが表示されるか",async()=>{await v.clear(r),await v.type(r,"東京都"),await ce(async()=>{var m;const c=s.getAllByTestId("autocomplete-form__item");await i(c.length).toBe(1),await i((m=c[0])==null?void 0:m.innerHTML).toBe(ie),await i(a["onUpdate:modelValue"]).lastCalledWith(null)})})}},h={tags:["!autodocs"],play:async({args:a,canvasElement:o,step:l})=>{const s=E(o),r=s.getByTestId("autocomplete-form__input");await l("完全一致したオプションが1つの場合、そのオプションが選択されるか",async()=>{await v.type(r,"北海道"),await ce(async()=>{const c=s.getAllByTestId("autocomplete-form__item"),m=a.options.filter(y=>y.label.includes("北海道"));await i(c.length).toBe(m.length),await i(c.length).toBe(1),await i(a["onUpdate:modelValue"]).lastCalledWith(m[0].value)})})}},x={tags:["!autodocs"],play:async({args:a,canvasElement:o,step:l})=>{const s=E(o),r=s.getByTestId("autocomplete-form__input");await l("完全一致したオプションが2つ以上の場合、値の変更イベントは発火しない",async()=>{await v.type(r,"島根県");const c=s.getAllByTestId("autocomplete-form__item");await i(c.every(m=>m.innerHTML===c[0].innerHTML)).toBeTruthy(),await i(a["onUpdate:modelValue"]).not.toBeCalled()})}},B={tags:["!autodocs"],play:async({canvasElement:a,step:o})=>{const l=E(a),s=l.getByTestId("autocomplete-form__input"),r=l.getByTestId("autocomplete-form__list");s.focus(),await o("Enterキーでオプションが開くか",async()=>{await v.keyboard("{Enter}"),await i(r).toBeVisible()}),await o("Escapeキーでオプションを閉じるか",async()=>{await v.keyboard("{Escape}"),await i(r).not.toBeVisible()})}},I={tags:["!autodocs"],play:async({args:a,canvasElement:o,step:l})=>{const s=E(o),r=s.getByTestId("autocomplete-form__input"),c=s.getByTestId("autocomplete-form__list");r.focus(),await l("オプションが開いてたか",async()=>{await v.keyboard("{ArrowUp}"),await i(c).toBeVisible()}),await l("最後のオプションが選択されたか",async()=>{await v.keyboard("{ArrowUp}"),await v.keyboard("{Enter}"),await i(a["onUpdate:modelValue"]).lastCalledWith(a.options[a.options.length-1].value)})}};var W,P,j;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(j=(P=T.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var R,z,G;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    modelValue: options[0].value
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const inputEl: HTMLInputElement = canvas.getByTestId('autocomplete-form__input');
    await step('一致するオプションが存在しない場合、emptyOptionTextが表示されるか', async () => {
      await userEvent.clear(inputEl);
      await userEvent.type(inputEl, '東京都');
      await waitFor(async () => {
        const liEls: HTMLLIElement[] = canvas.getAllByTestId('autocomplete-form__item');
        await expect(liEls.length).toBe(1);
        await expect(liEls[0]?.innerHTML).toBe(emptyOptionText);
        await expect(args['onUpdate:modelValue']).lastCalledWith(null);
      });
    });
  }
}`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,Q,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const inputEl: HTMLInputElement = canvas.getByTestId('autocomplete-form__input');
    await step('完全一致したオプションが1つの場合、そのオプションが選択されるか', async () => {
      await userEvent.type(inputEl, '北海道');
      await waitFor(async () => {
        const liEls: HTMLLIElement[] = canvas.getAllByTestId('autocomplete-form__item');
        const selectedOptions = args.options.filter(option => option.label.includes('北海道'));
        await expect(liEls.length).toBe(selectedOptions.length);
        await expect(liEls.length).toBe(1);
        await expect(args['onUpdate:modelValue']).lastCalledWith(selectedOptions[0].value);
      });
    });
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const inputEl: HTMLInputElement = canvas.getByTestId('autocomplete-form__input');
    await step('完全一致したオプションが2つ以上の場合、値の変更イベントは発火しない', async () => {
      await userEvent.type(inputEl, '島根県');
      const liEls: HTMLLIElement[] = canvas.getAllByTestId('autocomplete-form__item');
      await expect(liEls.every(liEl => liEl.innerHTML === liEls[0].innerHTML)).toBeTruthy();
      await expect(args['onUpdate:modelValue']).not.toBeCalled();
    });
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const inputEl: HTMLInputElement = canvas.getByTestId('autocomplete-form__input');
    const ulEl: HTMLUListElement = canvas.getByTestId('autocomplete-form__list');
    inputEl.focus();
    await step('Enterキーでオプションが開くか', async () => {
      await userEvent.keyboard('{Enter}');
      await expect(ulEl).toBeVisible();
    });
    await step('Escapeキーでオプションを閉じるか', async () => {
      await userEvent.keyboard('{Escape}');
      await expect(ulEl).not.toBeVisible();
    });
  }
}`,...(ne=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,le,se;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const inputEl: HTMLInputElement = canvas.getByTestId('autocomplete-form__input');
    const ulEl: HTMLUListElement = canvas.getByTestId('autocomplete-form__list');
    inputEl.focus();
    await step('オプションが開いてたか', async () => {
      await userEvent.keyboard('{ArrowUp}');
      await expect(ulEl).toBeVisible();
    });
    await step('最後のオプションが選択されたか', async () => {
      await userEvent.keyboard('{ArrowUp}');
      await userEvent.keyboard('{Enter}');
      await expect(args['onUpdate:modelValue']).lastCalledWith(args.options[args.options.length - 1].value);
    });
  }
}`,...(se=(le=I.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const Re=["Primary","TestNoneMatch","TestOneExactMatch","TestMultipleExactMatches","TestEscapeKey","TestArrowKey"];export{T as Primary,I as TestArrowKey,B as TestEscapeKey,x as TestMultipleExactMatches,b as TestNoneMatch,h as TestOneExactMatch,Re as __namedExportsOrder,je as default};
