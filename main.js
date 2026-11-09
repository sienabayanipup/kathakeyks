
/* ============ PHOTOS ============
   Image files live in the images/ folder. Empty slots show a labeled placeholder.
   The Our Cakes page is built from the CAKES list further down. */
const PHOTOS = {
  "hero-main":"images/hero-main.jpg", "hero-sub":"images/hero-sub.jpg", "about":"images/about.jpg",
  /* Edible toppers bento (toppers.html). Same rules as the cake gallery: order sets tile size,
     slot 3 is the CTA tile. Replace "" with an image path to fill a placeholder. */
  toppers:[
    ["images/topper1.jpg","Edible topper 1"],
    ["images/topper2.jpg","Edible topper 2"],
    "CTA",
    ["images/topper3.jpg","Edible topper 3"],
    ["images/topper4.jpg","Edible topper 4"],
    ["images/topper5.jpg","Edible topper 5"],
    ["images/topper6.jpg","Edible topper 6"],
    ["images/topper7.jpg","Edible topper 7"],
    ["images/topper8.jpg","Edible topper 8"],
    ["images/topper9.jpg","Edible topper 9"]
  ]
};

function fill(el,src,label){
  if(src){const i=new Image();i.src=src;i.alt=label;i.loading="lazy";i.decoding="async";
    i.onerror=()=>{i.remove();el.classList.add("empty");el.innerHTML="<div><b>"+label+"</b>Photo coming soon</div>";if(el.tagName==="BUTTON"){el.disabled=true;el.style.cursor="default"}};
    el.appendChild(i)}
  else{el.classList.add("empty");el.innerHTML="<div><b>"+label+"</b>Photo coming soon</div>"}
}
document.querySelectorAll("[data-slot]").forEach(f=>fill(f,PHOTOS[f.dataset.slot],f.dataset.label));

const lb=document.getElementById("lb");
function buildBento(bento,items,cta){
  if(!lb||!bento)return;
  const lbi=lb.querySelector("img");
  items.forEach(item=>{
    if(item==="CTA"){
      const a=document.createElement("a");a.className="bento-cta";a.target="_blank";a.rel="noopener";a.href="https://www.facebook.com/cakeliciousph";
      a.innerHTML='<span class="script">'+cta.script+'</span><strong>'+cta.title+'</strong><span>Message us on Facebook →</span>';
      bento.appendChild(a);return;
    }
    const [src,alt]=item;
    const b=document.createElement("button");b.className="ph";b.type="button";
    fill(b,src,alt);
    if(src){
      b.setAttribute("aria-label","Enlarge: "+alt);
      b.onclick=()=>{lbi.src=src;lbi.alt=alt;lb.showModal()};
    }else{b.disabled=true;b.style.cursor="default"}
    bento.appendChild(b);
  });
}
if(lb)lb.addEventListener("click",e=>{if(e.target===lb||e.target.tagName==="BUTTON")lb.close()});
buildBento(document.getElementById("topper-bento"),PHOTOS.toppers,{script:"your favorite character",title:"Ask about a topper"});

/* ============ OUR CAKES (cakes.html) ============
   One line per cake: [image file, title, tag, description].
   Order here = order on the page. To add a cake, upload the photo to images/
   and add one line. Tip: describe the design, not the client's name. */
const CAKES=[
  ["images/hero-sub.jpg","Astronaut on the Moon","Themed","A space-themed 10th birthday cake with a handmade fondant astronaut planting a Philippine flag, moon craters, and a cream-to-blue ombré finish."],
  ["images/hero-main.jpg","Sweet Shop Candy Cake","Themed","A three-tier candy-land cake with fondant lollipops, a donut, ice cream cones and bonbons, a hand-sculpted birthday girl on top, and a candy-filled base circled by a little sweets train."],
  ["images/cake-born18.jpg","Born at 18","Debut","A two-tier pink and purple cake with a striped bottom tier, polka-dot top, a big fondant bow, and a glittery Born @ 18 topper."],
  ["images/cake-unicorn.jpg","Rainbow Unicorn","1st Birthday","A pastel watercolor-finish cake with a fondant unicorn, sugar roses, a rainbow arch with a name banner, and a turquoise bow."],
  ["images/cake-minecraft.jpg","Minecraft Adventure","Themed","Grass-green buttercream over a dirt-brick base, with pixel-style name letters, pickaxes and character toppers."],
  ["images/cake-jhaz.jpg","Pink Drip with Photo Topper","Birthday","Pink and white striped buttercream with a white chocolate drip, piped rosettes, pearl sprinkles, a printed photo topper, funny signs and a personalized plaque."],
  ["images/cake-showbiz.jpg","Film Reel & Clapperboard","Milestone","A celebration cake for a 10th year in showbiz, with a fondant clapperboard, a film-strip side carrying edible photo prints, and popcorn."],
  ["images/cake-hala-trenta.jpg","Hala, Trenta Ka Na!","Bento","A blue bento cake with a playful message for a 30th birthday."],
  ["images/cake-irie.jpg","Pink 1st Birthday Bento","Bento","A pink bento cake made for a little one's first birthday."],
  ["images/cake-quarantine.jpg","Quarantine Birthday","Themed","A yellow and black themed birthday cake made during quarantine."]
];
const cakeGrid=document.getElementById("cake-grid");
if(cakeGrid&&lb){
  const lbi=lb.querySelector("img"),lbc=lb.querySelector(".lb-cap");
  CAKES.forEach(([src,title,tag,desc])=>{
    const card=document.createElement("article");card.className="cake-card";
    const b=document.createElement("button");b.className="ph cake-ph";b.type="button";
    fill(b,src,title);
    b.setAttribute("aria-label","Enlarge: "+title);
    b.onclick=()=>{lbi.src=src;lbi.alt=title;if(lbc)lbc.textContent=title+". "+desc;lb.showModal()};
    const body=document.createElement("div");body.className="cake-body";
    body.innerHTML='<span class="cake-tag"></span><h3></h3><p></p><a class="btn btn-fill btn-sm cake-btn">Order a cake like this</a>';
    body.children[0].textContent=tag;body.children[1].textContent=title;body.children[2].textContent=desc;
    body.children[3].href="order.html?cake="+encodeURIComponent(title);
    card.append(b,body);cakeGrid.appendChild(card);
  });
  const cta=document.createElement("a");cta.className="bento-cta cake-cta";cta.target="_blank";cta.rel="noopener";cta.href="https://www.facebook.com/cakeliciousph";
  cta.innerHTML='<span class="script">your idea, our hands</span><strong>Book your cake date</strong><span>Message us on Facebook →</span>';
  cakeGrid.appendChild(cta);
}

/* ============ HAPPY CLIENTS ============
   Add a client by adding one line. quote, name and link are optional and only
   show when filled in. Only use a quote the client actually wrote, and ask
   their permission before posting their photo or words. */
const CLIENTS = [
  {img:"images/client-1.jpg", alt:"A client smiling beside a cupcake table and a clapperboard-themed cake", caption:"Cupcakes and a clapperboard-themed cake for a 10th-year showbiz celebration.", quote:"", name:"", link:""},
  {img:"images/client-2.jpg", alt:"A client posing with a custom character cake in its box, shared on Instagram", caption:"A custom character cake, shared by the client on Instagram.", quote:"", name:"", link:""}
];
const cg=document.getElementById("clients-grid");
if(cg){
  CLIENTS.forEach(c=>{
    const a=document.createElement("article");a.className="client";
    a.innerHTML='<figure class="client-ph"><img src="'+c.img+'" alt="'+c.alt+'" loading="lazy" decoding="async"></figure><div class="client-body">'
      +(c.quote?'<blockquote>“'+c.quote+'”</blockquote>':'')
      +'<p class="client-cap">'+c.caption+'</p>'
      +(c.name?'<p class="client-name">'+c.name+'</p>':'')
      +(c.link?'<a class="client-link" href="'+c.link+'" target="_blank" rel="noopener">View original post ↗</a>':'')
      +'</div>';
    cg.appendChild(a);
  });
  const cta=document.createElement("a");cta.className="client client-cta";cta.target="_blank";cta.rel="noopener";cta.href="https://www.facebook.com/cakeliciousph";
  cta.innerHTML='<span class="script">your turn</span><h3>Share your cake moment</h3><p>Got a photo with your cake? Send it to us along with a few words about your celebration.</p><span class="btn btn-fill btn-sm">Message us on Facebook</span>';
  cg.appendChild(cta);
}

/* ============ HERO SPRINKLES ============
   Decorative falling sprinkles behind the hero. Skipped for reduced-motion visitors. */
const heroEl=document.querySelector(".hero");
if(heroEl&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
  const sp=document.createElement("div");sp.className="sprinkles";sp.setAttribute("aria-hidden","true");
  const n=innerWidth<700?12:24, colors=["#D78E9B","#B9A5D3","#C47785","#F2C9D1"];
  for(let i=0;i<n;i++){
    const s=document.createElement("span"),dur=14+Math.random()*10;
    s.className=Math.random()<.5?"bar":"dot";
    s.style.left=((i+Math.random()*.8)/n*100)+"%";
    s.style.background=colors[Math.floor(Math.random()*colors.length)];
    s.style.setProperty("--dx",(Math.random()*80-40)+"px");
    s.style.setProperty("--fall",(85+Math.random()*25)+"vh");
    s.style.setProperty("--rot",(Math.random()*540-270)+"deg");
    s.style.animationDuration=dur+"s";
    s.style.animationDelay=(-Math.random()*dur)+"s";
    sp.appendChild(s);
  }
  heroEl.prepend(sp);
}

const burger=document.querySelector(".burger"),menu=document.getElementById("menu");
burger.onclick=()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)};
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}));
const yr=document.getElementById("yr");if(yr)yr.textContent=new Date().getFullYear();
