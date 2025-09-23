import{a as p,b as x,c as d,d as y,l as v}from"./assets/applebooks@2x-05046ad7.js";const L="/Bookshelf/assets/books-desk@1x-1f62c9bc.png",S="/Bookshelf/assets/books-desk@2x-306b4264.png",T="/Bookshelf/assets/books-mob@1x-93df6442.png",a="shoppingCard",i="shoppingList",t=document.querySelector(".js-shopping-list"),c=document.querySelector(".shopping-list-container"),A="The daughter of a Korean mother and Jewish American father, and leader of the indie rock project Japanese Breakfast, describes creating her own identity after losing her mother to cancer.",n=l(a),g=l(i);n[0]!==void 0?(c.innerHTML="",t.innerHTML="",t.insertAdjacentHTML("afterbegin",m(n)),t.addEventListener("click",C)):f();function C(s){let e=s.target.closest(".btn-shop");if(e)t.innerHTML="",n.splice(e.id,1),g.splice(e.id,1),localStorage.removeItem(a),localStorage.removeItem(i),h(a,n),h(i,g),n[0]!==void 0?t.insertAdjacentHTML("afterbegin",m(l(a))):f();else return}function m(s){return s.map(({book_image:e,title:o,author:b,description:r,amazonLinks:u,appleLinks:k},$)=>(r||(r=A),`<li class="shopping-list-item">
      <img class="shopping-list-card-img" src="${e}" alt="${o}">
      <div class="shopping-list-card-container">
        <h2 class="shopping-list-card-title">${o}</h2>
        <p class="shopping-list-card-text">Hardcover fiction</p>
        <p class="shopping-list-card-desc">${r}</p>
        <div class="shopping-list-card-bottom-container">
          <p class="shopping-list-card-author">${b}</p>
          <div class="shopping-list-card-container-img">
            <a href="${u}" class="shopping-amazon-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-amazon"srcset="${p} 1x, ${x} 2x" src="${p}" alt="Amazon" loading="lazy">
            </a>
            <a href="${k}" class="shopping-book-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-book" srcset="${d} 1x, ${y} 2x" src="${d}" alt="Apple books" loading="lazy">
            </a>
          </div>
        </div>
        <div>
          <button class="btn-shop shopping-list-card-container-trash" id="${$}">
            <svg class="shopping-list-card-icon-trash" width="18px" height="18px">
              <use href="${v}#icon-del"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `)).join("")}function f(){c.innerHTML="",c.insertAdjacentHTML("afterbegin",`
    <p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      class="shopping-list-image"
      srcset="
        ${L} 1x,
        ${S} 2x
      "
      src="${T}"
      alt="books"
      width="265"
      height="198"
    />
    `)}function h(s,e){try{const o=JSON.stringify(e);localStorage.setItem(s,o)}catch(o){console.error("Get state error: ",o.message)}}function l(s){try{const e=localStorage.getItem(s);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}}
//# sourceMappingURL=commonHelpers2.js.map
