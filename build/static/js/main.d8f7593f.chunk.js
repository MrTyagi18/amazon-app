(this["webpackJsonpamazon-clone-challenge"]=this["webpackJsonpamazon-clone-challenge"]||[]).push([[0],{48:function(n,e,t){},49:function(n,e,t){},60:function(n,e,t){"use strict";t.r(e);var c,i,a,r,o,d,s,l,j,p,b,x,u=t(2),h=t.n(u),g=t(27),O=t.n(g),f=(t(48),t(6)),m=t(24),v=(t(49),t(7)),y=t(37),w=t.n(y),k=t(38),I=t.n(k),S=t(36),C=t.n(S),z=t(23),D=t(3);var A,q,E,F,L,P,T,B,R,Y,N,G=function(n){var e=n.cartItems,t=n.user,c=n.signOut;return Object(D.jsxs)(H,{children:[Object(D.jsx)(J,{children:Object(D.jsx)(z.b,{to:"/",children:Object(D.jsx)("img",{src:"https://i.imgur.com/7I9Was5.png"})})}),Object(D.jsxs)(U,{children:[Object(D.jsx)(C.a,{}),Object(D.jsxs)(_,{children:[Object(D.jsx)(M,{children:"Hello"}),Object(D.jsx)(W,{children:"Select Your Address"})]})]}),Object(D.jsxs)(Q,{children:[Object(D.jsx)(V,{type:"text"}),Object(D.jsx)(K,{children:Object(D.jsx)(w.a,{})})]}),Object(D.jsxs)(X,{children:[Object(D.jsxs)(_,{onClick:c,children:[Object(D.jsxs)(M,{children:["Hello, ",t.name]}),Object(D.jsx)(W,{children:"Account & Lists"})]}),Object(D.jsxs)(_,{children:[Object(D.jsx)(M,{children:"Returns"}),Object(D.jsx)(W,{children:"& Orders"})]}),Object(D.jsx)(Z,{children:Object(D.jsxs)(z.b,{to:"/cart",children:[Object(D.jsx)(I.a,{}),Object(D.jsx)($,{children:function(){var n=0;return e.forEach((function(e){n+=e.product.quantity})),n}()})]})})]})]})},H=v.a.div(c||(c=Object(f.a)(["\n    height: 60px;\n    background-color: #0F1111;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white;\n"]))),J=v.a.div(i||(i=Object(f.a)(["\n    img {\n        width: 100px;\n        margin-left: 11px;\n    }\n"]))),U=v.a.div(a||(a=Object(f.a)(["\n    padding-left: 9px;\n    display: flex;\n    align-items: center;\n    \n"]))),M=v.a.div(r||(r=Object(f.a)(["\n\n"]))),W=v.a.div(o||(o=Object(f.a)(["\n    font-weight: 700;\n"]))),Q=v.a.div(d||(d=Object(f.a)(["\n    display: flex;\n    flex-grow: 1;\n    height: 40px;\n    border-radius: 4px;\n    overflow: hidden;\n    margin-left: 4px;\n    background-color: white;\n    :focus-within {\n        box-shadow: 0 0 0 3px #F90;\n    }\n"]))),V=v.a.input(s||(s=Object(f.a)(["\n    flex-grow: 1;\n    border: 0;\n    :focus {\n        outline: none;\n    }\n"]))),K=v.a.div(l||(l=Object(f.a)(["\n    background-color: #febd69;\n    width: 45px;\n    color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n"]))),X=v.a.div(j||(j=Object(f.a)(["\n    display: flex;\n    \n"]))),_=v.a.div(p||(p=Object(f.a)(["\n    // TRouBLe\n    padding: 10px 9px 10px 9px;\n    cursor: pointer;\n"]))),Z=v.a.div(b||(b=Object(f.a)(["\n    display: flex;\n    a {\n        display: flex;\n        align-items: center;\n        padding-right: 9px;\n        color: white;\n        text-decoration: none;\n    }\n"]))),$=v.a.div(x||(x=Object(f.a)(["\n    padding-left: 4px;\n    font-weight: 700;\n    color: #f08804;\n\n"]))),nn=t(25),en=(nn.a.initializeApp({apiKey:"AIzaSyDl9SxtcCV3YVBHr-XYytUS1hu1vWheR5k",authDomain:"my-fa1c1.firebaseapp.com",projectId:"my-fa1c1",storageBucket:"my-fa1c1.appspot.com",messagingSenderId:"981575514814",appId:"1:981575514814:web:b8b3eae07364a04927fcef",measurementId:"G-YQDD0CLDN2"}),nn.a.firestore()),tn=nn.a.auth(),cn=new nn.a.auth.GoogleAuthProvider,an=function(n){for(var e=n.id,t=n.item,c=[],i=1;i<Math.max(t.quantity+1,20);i++)c.push(Object(D.jsxs)("option",{value:i,children:[" Qty: ",i]}));return Object(D.jsxs)(rn,{children:[Object(D.jsx)(on,{children:Object(D.jsx)("img",{src:t.image})}),Object(D.jsxs)(dn,{children:[Object(D.jsx)(sn,{children:Object(D.jsx)("h2",{children:t.name})}),Object(D.jsxs)(ln,{children:[Object(D.jsx)(jn,{children:Object(D.jsx)("select",{value:t.quantity,onChange:function(n){return t=n.target.value,void en.collection("cartItems").doc(e).update({quantity:parseInt(t)});var t},children:c})}),Object(D.jsx)(pn,{onClick:function(n){n.preventDefault(),en.collection("cartItems").doc(e).delete()},children:"Delete"})]})]}),Object(D.jsxs)(bn,{children:["\u20b9",t.price]})]})},rn=v.a.div(A||(A=Object(f.a)(["\n    padding-top: 12px;\n    padding-bottom: 12px;\n    display: flex;\n    border-bottom: 1px solid #DDD;\n"]))),on=v.a.div(q||(q=Object(f.a)(["\n    width: 180px;\n    height: 180px;\n    flex-shrink: 0;\n    flex-grow: 0;\n    margin-right: 16px;\n    img{\n        object-fit: contain;\n        height: 100%;\n        width: 100%;\n    }\n"]))),dn=v.a.div(E||(E=Object(f.a)(["\n    flex-grow: 1;\n"]))),sn=v.a.div(F||(F=Object(f.a)(["\n    color: #007185;\n    h2 {\n        font-size: 18px;\n    }\n"]))),ln=v.a.div(L||(L=Object(f.a)(["\n    display: flex;\n    margin-top: 4px;\n    align-items: center;\n"]))),jn=v.a.div(P||(P=Object(f.a)(["\n    select {\n        border-radius: 7px;\n        background-color: #F0F2F2; \n        padding: 8px;\n        box-shadow: 0 2px 5px rgba(15,17,17,.15);\n\n        :focus {\n            outline: none;\n        }\n    }\n"]))),pn=v.a.div(T||(T=Object(f.a)(["\n    color: #007185;\n    margin-left: 16px;\n    cursor: pointer;\n"]))),bn=v.a.div(B||(B=Object(f.a)(["\n    font-size: 18px;\n    font-weight: 700;\n    margin-left: 16px;\n"])));var xn,un,hn,gn=function(n){var e=n.cartItems;return Object(D.jsxs)(On,{children:[Object(D.jsx)(fn,{children:"Shopping Cart"}),Object(D.jsx)("hr",{}),Object(D.jsx)(mn,{children:e.map((function(n){return Object(D.jsx)(an,{id:n.id,item:n.product})}))})]})},On=v.a.div(R||(R=Object(f.a)(["\n    flex: 0.8;\n    padding: 20px;\n    margin-right: 18px;\n    background-color: white;\n"]))),fn=v.a.h1(Y||(Y=Object(f.a)(["\n    margin-bottom: 8px;\n"]))),mn=v.a.div(N||(N=Object(f.a)(["\n"]))),vn=t(42);var yn,wn=function(n){var e=n.getTotalPrice,t=n.getCount;return Object(D.jsxs)(kn,{children:[Object(D.jsxs)(In,{children:["Subtotal (",t()," items):",Object(D.jsx)(vn.a,{value:e(),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"})]}),Object(D.jsx)(Sn,{children:"Proceed to checkout"})]})},kn=v.a.div(xn||(xn=Object(f.a)(["\n    flex: 0.3;\n    padding: 20px;\n    background-color: white;\n"]))),In=v.a.h2(un||(un=Object(f.a)(["\n    margin-bottom: 16px;\n"]))),Sn=v.a.button(hn||(hn=Object(f.a)(["\n    background-color: #f0c14b;\n    width: 100%;\n    // vertical - horizontal\n    padding: 4px 8px;\n    border: 2px solid #a88734;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    :hover {\n        background:  #ddb347;\n    }\n"])));var Cn,zn,Dn,An,qn,En,Fn,Ln=function(n){var e=n.cartItems;return Object(D.jsxs)(Pn,{children:[Object(D.jsx)(gn,{cartItems:e}),Object(D.jsx)(wn,{getCount:function(){var n=0;return e.forEach((function(e){n+=e.product.quantity})),n},getTotalPrice:function(){var n=0;return e.forEach((function(e){n+=e.product.price*e.product.quantity})),n}})]})},Pn=v.a.div(yn||(yn=Object(f.a)(["\n    display: flex;\n    //TRouBLe\n    padding: 14px 18px 0 18px;\n    align-items: flex-start;\n"])));var Tn,Bn,Rn,Yn=function(n){var e=n.title,t=n.price,c=n.rating,i=n.image,a=n.id;return Object(D.jsxs)(Nn,{children:[Object(D.jsx)(Gn,{children:e}),Object(D.jsxs)(Hn,{children:["\u20b9",t]}),Object(D.jsx)(Jn,{children:Array(c).fill().map((function(n){return Object(D.jsx)("p",{children:"\u2b50"})}))}),Object(D.jsx)(Un,{src:i}),Object(D.jsx)(Mn,{children:Object(D.jsx)(Wn,{onClick:function(){console.log(a);var n=en.collection("cartItems").doc(a);n.get().then((function(c){console.log(c),c.exists?n.update({quantity:c.data().quantity+1}):en.collection("cartItems").doc(a).set({name:e,image:i,price:t,quantity:1})}))},children:"Add to Cart"})})]})},Nn=v.a.div(Cn||(Cn=Object(f.a)(["\n    background-color: white;\n    z-index: 100;\n    flex: 1;\n    padding: 20px;\n    margin: 10px;\n    max-height: 400px;\n    display: flex;\n    flex-direction: column;\n"]))),Gn=v.a.span(zn||(zn=Object(f.a)([""]))),Hn=v.a.span(Dn||(Dn=Object(f.a)(["\n    font-weight: 500;\n    margin-top: 3px;\n"]))),Jn=v.a.div(An||(An=Object(f.a)(["\n    display: flex;\n"]))),Un=v.a.img(qn||(qn=Object(f.a)(["\n    max-height: 200px;\n    object-fit: contain;\n"]))),Mn=v.a.div(En||(En=Object(f.a)(["\n    margin-top: 12px;\n    display: grid;\n    place-items: center;\n"]))),Wn=v.a.button(Fn||(Fn=Object(f.a)(["\n    width: 100px;\n    height: 30px;\n    background-color: #f0c14b;\n    border: 2px solid #a88734;\n    border-radius: 2px;\n    cursor: pointer;\n"])));var Qn,Vn,Kn,Xn,_n=function(){var n=Object(u.useState)([]),e=Object(m.a)(n,2),t=e[0],c=e[1];return Object(u.useEffect)((function(){console.log("Call products"),en.collection("products").onSnapshot((function(n){var e;e=n.docs.map((function(n){return{id:n.id,product:n.data()}})),c(e)}))}),[]),Object(D.jsxs)(Zn,{children:[Object(D.jsx)($n,{}),Object(D.jsx)(ne,{children:t.map((function(n){return Object(D.jsx)(Yn,{title:n.product.name,price:n.product.price,rating:n.product.rating,image:n.product.image,id:n.id})}))})]})},Zn=v.a.div(Tn||(Tn=Object(f.a)(["\n    max-width: 1500px;\n    margin: 0 auto;\n"]))),$n=v.a.div(Bn||(Bn=Object(f.a)(["\n    background-image: url('https://i.imgur.com/SYHeuYM.jpg');\n    min-height: 600px;\n    background-position: center;\n    background-size: cover;\n    z-index: 1;\n    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n"]))),ne=v.a.div(Rn||(Rn=Object(f.a)(["\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-top: -350px;\n    display: flex;\n"]))),ee=t(11);var te,ce=function(n){var e=n.setUser;return Object(D.jsx)(ie,{children:Object(D.jsxs)(ae,{children:[Object(D.jsx)(re,{src:"http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"}),Object(D.jsx)("h1",{children:"Sign into Amazon"}),Object(D.jsx)(oe,{onClick:function(){tn.signInWithPopup(cn).then((function(n){var t=n.user,c={name:t.displayName,email:t.email,photo:t.photoURL};localStorage.setItem("user",JSON.stringify(c)),e(c)})).catch((function(n){alert(n.message)}))},children:"Sign in with Google"})]})})},ie=v.a.div(Qn||(Qn=Object(f.a)(["\n    width: 100%;\n    height: 100vh;\n    background-color: #f8f8f8;\n    display: grid;\n    place-items: center;\n"]))),ae=v.a.div(Vn||(Vn=Object(f.a)(["\n    padding: 100px;\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0 1px 3px gray;\n    text-align: center;\n"]))),re=v.a.img(Kn||(Kn=Object(f.a)(["\n    height: 100px;\n    margin-bottom: 40px;\n"]))),oe=v.a.button(Xn||(Xn=Object(f.a)(["\n    margin-top: 50px;\n    background-color: #f0c14b;\n    height: 40px;\n    border: 2px solid #a88734;\n    border-radius: 4px;\n    padding: 4px 8px;\n    cursor: pointer;\n"])));var de=function(){var n=Object(u.useState)(JSON.parse(localStorage.getItem("user"))),e=Object(m.a)(n,2),t=e[0],c=e[1],i=Object(u.useState)([]),a=Object(m.a)(i,2),r=a[0],o=a[1];return Object(u.useEffect)((function(){en.collection("cartItems").onSnapshot((function(n){var e=n.docs.map((function(n){return{id:n.id,product:n.data()}}));o(e)}))}),[]),Object(D.jsx)(z.a,{children:t?Object(D.jsxs)(se,{children:[Object(D.jsx)(G,{signOut:function(){tn.signOut().then((function(){localStorage.removeItem("user"),c(null)}))},user:t,cartItems:r}),Object(D.jsxs)(ee.c,{children:[Object(D.jsx)(ee.a,{path:"/cart",children:Object(D.jsx)(Ln,{cartItems:r})}),Object(D.jsx)(ee.a,{path:"/",children:Object(D.jsx)(_n,{})})]})]}):Object(D.jsx)(ce,{setUser:c})})},se=v.a.div(te||(te=Object(f.a)(["\n  background-color: #EAEDED;\n"]))),le=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,72)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),c(n),i(n),a(n),r(n)}))};O.a.render(Object(D.jsx)(h.a.StrictMode,{children:Object(D.jsx)(de,{})}),document.getElementById("root")),le()}},[[60,1,2]]]);
//# sourceMappingURL=main.d8f7593f.chunk.js.map