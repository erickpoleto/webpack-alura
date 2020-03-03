(function(c){function d(g){if(f[g])return f[g].exports;var h=f[g]={i:g,l:!1,exports:{}};return c[g].call(h.exports,h,h.exports,d),h.l=!0,h.exports}var f={};return d.m=c,d.c=f,d.d=function(g,h,i){d.o(g,h)||Object.defineProperty(g,h,{configurable:!1,enumerable:!0,get:i})},d.n=function(g){var h=g&&g.__esModule?function(){return g['default']}:function(){return g};return d.d(h,'a',h),h},d.o=function(g,h){return Object.prototype.hasOwnProperty.call(g,h)},d.p='dist',d(d.s=11)})([function(c,d,f){'use strict';f.d(d,'a',function(){return h});var g=f(1);let h=class{constructor(j=g.g('data'),k=g.g('quantidade'),l=g.g('valor')){Object.assign(this,{_quantidade:k,_valor:l}),this._data=new Date(j.getTime()),Object.freeze(this)}get volume(){return this._quantidade*this._valor}get data(){return new Date(this._data.getTime())}get quantidade(){return this._quantidade}get valor(){return this._valor}equals(j){return JSON.stringify(this)==JSON.stringify(j)}}},function(c,d,f){'use strict';var g=f(13);f.d(d,'a',function(){return g.a}),f(6);var h=f(14);f.d(d,'f',function(){return h.a});var i=f(2);f.d(d,'e',function(){return i.b}),f(8),f(5);var j=f(15);f.d(d,'d',function(){return j.a});var k=f(16);f.d(d,'c',function(){return k.a});var l=f(17);f.d(d,'g',function(){return l.a});var m=f(18);f.d(d,'b',function(){return m.a})},function(c,d,f){'use strict';function g(j){return j instanceof i||Object.getPrototypeOf(j)instanceof i}f.d(d,'a',function(){return h}),d.b=function(k){return g(k)?k.message:(console.log(k),'N\xE3o foi poss\xEDvel realizar a opera\xE7\xE3o.')};let h=class extends Error{constructor(k=''){super(k),this.name=this.constructor.name}};const i=h},function(c,d,f){'use strict';f.d(d,'a',function(){return g});let g=class{constructor(i){this._elemento=document.querySelector(i)}update(i){this._elemento.innerHTML=this.template(i)}template(i){throw new Error('Voc\xEA precisa implementar o m\xE9todo template')}}},function(c,d,f){'use strict';var g=f(0);f.d(d,'a',function(){return g.a}),f(7);var h=f(19);f.d(d,'b',function(){return h.a});var i=f(20);f.d(d,'c',function(){return i.a})},function(c,d,f){'use strict';f.d(d,'a',function(){return g});let g=class h{static create(i,j,k){return new Proxy(i,{get(l,m,n){return h._ehFuncao(l[m])&&j.includes(m)?function(){console.log(`"${m}" disparou a armadilha`),l[m].apply(l,arguments),k(l)}:l[m]},set(l,m,n,o){const p=Reflect.set(l,m,n);return j.includes(m)&&k(l),p}})}static _ehFuncao(i){return typeof i==typeof Function}}},function(c,d,f){'use strict';f.d(d,'a',function(){return j});const g=['negociacoes'];let h=null,i=null,j=class k{constructor(){throw new Error('N\xE3o \xE9 poss\xEDvel criar inst\xE2ncias dessa classe')}static getConnection(){return new Promise((l,m)=>{if(h)return l(h);const n=indexedDB.open('jscangaceiro',2);n.onupgradeneeded=o=>{k._createStores(o.target.result)},n.onsuccess=o=>{h=o.target.result,i=h.close.bind(h),h.close=()=>{throw new Error('Voc\xEA n\xE3o pode fechar diretamente a conex\xE3o')},l(o.target.result)},n.onerror=o=>{console.log(o.target.error),m(o.target.error.name)}})}static _createStores(l){g.forEach(m=>{l.objectStoreNames.contains(m)&&l.deleteObjectStore(m),l.createObjectStore(m,{autoIncrement:!0})})}static closeConnection(){h&&i()}}},function(c,d,f){'use strict';f.d(d,'a',function(){return h});var g=f(0);let h=class{constructor(j){this._connection=j,this._store='negociacoes'}adiciona(j){return new Promise((k,l)=>{const m=this._connection.transaction([this._store],'readwrite').objectStore(this._store).add(j);m.onsuccess=n=>k(),m.onerror=n=>{console.log(n.target.error),l('N\xE3o foi poss\xEDvel salvar a negocia\xE7\xE3o')}})}listaTodos(){return new Promise((j,k)=>{const l=[],m=this._connection.transaction([this._store],'readwrite').objectStore(this._store).openCursor();m.onsuccess=n=>{const o=n.target.result;if(o){const p=new g.a(o.value._data,o.value._quantidade,o.value._valor);l.push(p),o.continue()}else j(l)},m.onerror=n=>{console.log(n.target.error),k('N\xE3o foi poss\xEDvel listar nas negocia\xE7\xF5es')}})}apagaTodos(){return new Promise((j,k)=>{const l=this._connection.transaction([this._store],'readwrite').objectStore(this._store).clear();l.onsuccess=m=>j(),l.onerror=m=>{console.log(m.target.error),k('N\xE3o foi poss\xEDvel apagar as negocia\xE7\xF5es')}})}}},function(c,d,f){'use strict';f.d(d,'a',function(){return g});let g=class{_handleErrors(i){if(!i.ok)throw new Error(i.statusText);return i}get(i){return fetch(i).then(j=>this._handleErrors(j)).then(j=>j.json())}}},function(c,d,f){'use strict';f.d(d,'a',function(){return h});var g=f(10);let h=class{constructor(){throw new Error('Esta classe n\xE3o pode ser instanciada')}static paraTexto(j){return`${j.getDate()}/${j.getMonth()+1}/${j.getFullYear()}`}static paraData(j){if(!/\d{2}\/\d{2}\/\d{4}/.test(j))throw new g.a;return new Date(...j.split('/').reverse().map((k,l)=>k-l%2))}}},function(c,d,f){'use strict';f.d(d,'a',function(){return h});var g=f(2);let h=class extends g.a{constructor(){super('A data deve estar no formato dd/mm/aaaa')}}},function(c,d,f){'use strict';Object.defineProperty(d,'__esModule',{value:!0});var g=f(12),h=f(4),i=f(25);f.n(i);var j=f(26);f.n(j),new g.a;const k=new h.a(new Date(),1,200),l=new Headers;l.set('Content-Type','application/json');const m=JSON.stringify(k);fetch('http://localhost:3000/negociacoes',{method:'POST',headers:l,body:m}).then(()=>console.log('Dado enviado com sucesso'))},function(c,d,f){'use strict';function g(u){return function(){var v=u.apply(this,arguments);return new Promise(function(w,x){function y(z,A){try{var B=v[z](A),C=B.value}catch(D){return void x(D)}return B.done?void w(C):Promise.resolve(C).then(function(D){y('next',D)},function(D){y('throw',D)})}return y('next')})}}function h(u,v,w,x,y){var z={};return Object.keys(x).forEach(function(A){z[A]=x[A]}),z.enumerable=!!z.enumerable,z.configurable=!!z.configurable,('value'in z||z.initializer)&&(z.writable=!0),z=w.slice().reverse().reduce(function(A,B){return B(u,v,A)||A},z),y&&void 0!==z.initializer&&(z.value=z.initializer?z.initializer.call(y):void 0,z.initializer=void 0),void 0===z.initializer&&(Object.defineProperty(u,v,z),z=null),z}f.d(d,'a',function(){return t});var i=f(4),j=f(21),k=f(1),l,m,n,o,p,q,r,s;let t=(l=k.c('#data','#quantidade','#valor'),m=k.b('submit','.form'),n=k.d(),o=k.b('click','#botao-importa'),p=k.d(),q=k.b('click','#botao-apaga'),l(r=(s=class{constructor(v,w,x){Object.assign(this,{_inputData:v,_inputQuantidade:w,_inputValor:x}),this._negociacoes=new k.a(new i.c(),new j.d('#negociacoes'),'adiciona','esvazia'),this._mensagem=new k.a(new j.b(),new j.c('#mensagemView'),'texto'),this._service=new i.b,this._init()}_init(){var v=this;return g(function*(){try{const w=yield k.f(),x=yield w.listaTodos();x.forEach(function(y){return v._negociacoes.adiciona(y)})}catch(w){v._mensagem.texto=k.e(w)}})()}adiciona(v){var w=this;return g(function*(){try{const x=w._criaNegociacao(),y=yield k.f();yield y.adiciona(x),w._negociacoes.adiciona(x),w._mensagem.texto='Negocia\xE7\xE3o adicionada com sucesso',w._limpaFormulario()}catch(x){w._mensagem.texto=k.e(x)}})()}_limpaFormulario(){this._inputData.value='',this._inputQuantidade.value=1,this._inputValor.value=0,this._inputData.focus()}_criaNegociacao(){return new i.a(j.a.paraData(this._inputData.value),parseInt(this._inputQuantidade.value),parseFloat(this._inputValor.value))}importaNegociacoes(){var v=this;return g(function*(){try{const w=yield v._service.obtemNegociacoesDoPeriodo();console.log(w),w.filter(function(x){return!v._negociacoes.paraArray().some(function(y){return x.equals(y)})}).forEach(function(x){return v._negociacoes.adiciona(x)}),v._mensagem.texto='Negocia\xE7\xF5es do per\xEDodo importadas com sucesso'}catch(w){v._mensagem.texto=k.e(w)}})()}apaga(){var v=this;return g(function*(){try{const w=yield k.f();yield w.apagaTodos(),v._negociacoes.esvazia(),v._mensagem.texto='Negocia\xE7\xF5es apagadas com sucesso'}catch(w){v._mensagem.texto=k.e(w)}})()}},h(s.prototype,'adiciona',[m,n],Object.getOwnPropertyDescriptor(s.prototype,'adiciona'),s.prototype),h(s.prototype,'importaNegociacoes',[o,p],Object.getOwnPropertyDescriptor(s.prototype,'importaNegociacoes'),s.prototype),h(s.prototype,'apaga',[q],Object.getOwnPropertyDescriptor(s.prototype,'apaga'),s.prototype),s))||r)},function(c,d,f){'use strict';f.d(d,'a',function(){return h});var g=f(5);let h=class{constructor(j,k,...l){const m=g.a.create(j,l,n=>{k.update(n)});return k.update(j),m}}},function(c,d,f){'use strict';function g(k){return function(){var l=k.apply(this,arguments);return new Promise(function(m,n){function o(p,q){try{var r=l[p](q),s=r.value}catch(t){return void n(t)}return r.done?void m(s):Promise.resolve(s).then(function(t){o('next',t)},function(t){o('throw',t)})}return o('next')})}}f.d(d,'a',function(){return j});var h=f(6),i=f(7);let j=(()=>{var k=g(function*(){let l=yield h.a.getConnection();return new i.a(l)});return function(){return k.apply(this,arguments)}})()},function(c,d,f){'use strict';d.a=function(h=500){return function(i,j,k){const l=k.value;let m=0;return k.value=function(...n){event&&event.preventDefault(),clearInterval(m),m=setTimeout(()=>l.apply(this,n),h)},k}}},function(c,d,f){'use strict';function g(h,i){document.querySelector(i.selector).addEventListener(i.event,j=>{i.prevent&&j.preventDefault(),h[i.propertyKey](j)})}d.a=function(...i){const j=i.map(k=>document.querySelector(k));return function(k){const l=k,m=function(){const n=new l(...j);Object.getOwnPropertyNames(l.prototype).forEach(o=>{Reflect.hasMetadata('bindEvent',n,o)&&g(n,Reflect.getMetadata('bindEvent',n,o))})};return m.prototype=l.prototype,m}}},function(c,d,f){'use strict';d.a=function(h){throw new Error(`${h} é um parâmetro obrigatório`)}},function(c,d,f){'use strict';d.a=function(i=g.g('event'),j=g.g('selector'),k=!0){return function(l,m,n){return Reflect.defineMetadata('bindEvent',{event:i,selector:j,prevent:k,propertyKey:m},Object.getPrototypeOf(l),m),n}};var g=f(1)},function(c,d,f){'use strict';function g(l){return function(){var m=l.apply(this,arguments);return new Promise(function(n,o){function p(q,r){try{var s=m[q](r),t=s.value}catch(u){return void o(u)}return s.done?void n(t):Promise.resolve(t).then(function(u){p('next',u)},function(u){p('throw',u)})}return p('next')})}}f.d(d,'a',function(){return k});var h=f(8),i=f(0),j=f(2);let k=class{constructor(){this._http=new h.a}obtemNegociacoesDaSemana(){return this._http.get('http://localhost:3000/negociacoes/semana').then(m=>m.map(n=>new i.a(new Date(n.data),n.quantidade,n.valor)),m=>{throw new j.a('N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana')})}obtemNegociacoesDaSemanaAnterior(){return this._http.get('http://localhost:3000/negociacoes/anterior').then(m=>m.map(n=>new i.a(new Date(n.data),n.quantidade,n.valor)),m=>{throw new j.a('N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana anterior')})}obtemNegociacoesDaSemanaRetrasada(){return this._http.get('http://localhost:3000/negociacoes/retrasada').then(m=>m.map(n=>new i.a(new Date(n.data),n.quantidade,n.valor)),m=>{throw new j.a('N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana retrasada')})}obtemNegociacoesDoPeriodo(){var m=this;return g(function*(){try{let n=yield Promise.all([m.obtemNegociacoesDaSemana(),m.obtemNegociacoesDaSemanaAnterior(),m.obtemNegociacoesDaSemanaRetrasada()]);return n.reduce(function(o,p){return o.concat(p)},[]).sort(function(o,p){return p.data.getTime()-o.data.getTime()})}catch(n){throw console.log(n),new j.a('N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es do per\xEDodo')};})()}}},function(c,d,f){'use strict';f.d(d,'a',function(){return g});let g=class{constructor(){this._negociacoes=[],Object.freeze(this)}adiciona(i){this._negociacoes.push(i)}paraArray(){return[].concat(this._negociacoes)}get volumeTotal(){return this._negociacoes.reduce((i,j)=>i+j.volume,0)}esvazia(){this._negociacoes.length=0}}},function(c,d,f){'use strict';var g=f(22);f.d(d,'c',function(){return g.a});var h=f(23);f.d(d,'d',function(){return h.a}),f(3);var i=f(24);f.d(d,'b',function(){return i.a}),f(10);var j=f(9);f.d(d,'a',function(){return j.a})},function(c,d,f){'use strict';f.d(d,'a',function(){return h});var g=f(3);let h=class extends g.a{template(j){return j.texto?`<p class="alert alert-info">${j.texto}</p>`:`<p></p>`}}},function(c,d,f){'use strict';f.d(d,'a',function(){return i});var g=f(3),h=f(9);let i=class extends g.a{template(k){return`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${k.paraArray().map(l=>`
                    <tr>
                        <td>${h.a.paraTexto(l.data)}</td>
                        <td>${l.quantidade}</td>
                        <td>${l.valor}</td>
                        <td>${l.volume}</td>
                    </tr>                        
                `).join('')}
            </tbody>
            
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${k.volumeTotal}</td>            
                </tr>
            </tfoot>
            
        </table>               
        `}}},function(c,d,f){'use strict';f.d(d,'a',function(){return g});let g=class{constructor(i=''){this._texto=i}get texto(){return this._texto}set texto(i){this._texto=i}}},function(c,d){},function(c,d){}]);