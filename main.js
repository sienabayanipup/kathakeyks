
/* ============ PHOTOS ============
   Image files live in the images/ folder. Empty slots show a labeled placeholder.
   The Our Cakes page is built from the CAKES list further down. */
const PHOTOS = {
  "hero-main":"images/hero-main.jpg", "hero-sub":"images/hero-sub.jpg", "about":"images/about.jpg"
};

function fill(el,src,label,eager){
  if(src){const i=new Image();i.src=src;i.alt=label;i.loading=eager?"eager":"lazy";if(eager)i.fetchPriority="high";i.decoding="async";
    i.onerror=()=>{i.remove();el.classList.add("empty");el.innerHTML="<div><b>"+label+"</b>Photo coming soon</div>";if(el.tagName==="BUTTON"){el.disabled=true;el.style.cursor="default"}};
    el.appendChild(i)}
  else{el.classList.add("empty");el.innerHTML="<div><b>"+label+"</b>Photo coming soon</div>"}
}
document.querySelectorAll("[data-slot]").forEach(f=>fill(f,PHOTOS[f.dataset.slot],f.dataset.label,true));

const lb=document.getElementById("lb");

if(lb)lb.addEventListener("click",e=>{if(e.target===lb||e.target.tagName==="BUTTON")lb.close()});

/* ============ EDIBLE TOPPERS (toppers.html) ============
   One line per topper: [image file, title, tag, description].
   Order here = order on the page. To add a topper, upload the photo to images/
   and add one line. Tip: describe the design, not the client's name. */
const TOPPERS=[
  ["images/topper1.jpg","Dentist Chair with Tooth Couple","Profession","A fondant dental chair with all the details, from the tray and lamp arm to hoses, topped by two smiling teeth, one in a black bow tie and one with a pink bow."],
  ["images/topper2.jpg","Sleeping Baby on Clouds","Baby","A sweet sleeping baby girl in a diaper and pink bow headband, resting on soft fondant clouds in front of a neutral rainbow arch with gold stars."],
  ["images/topper3.jpg","Red-Haired Mermaid Princess","Character","A hand-sculpted princess with wavy red hair, big blue eyes and a layered pink gown with seashell details."],
  ["images/topper4.jpg","Volleyball Player","Sports","A fondant volleyball player in a red jersey, black shorts, wristband and high socks, holding a ball and standing with a confident pose."],
  ["images/topper5.jpg","Young Wizard Student","Character","A little wizard in black robes, a red and gold striped tie and sweater, round glasses and a tiny wand, sculpted in a cute chibi style."],
  ["images/topper6.jpg","Chibi Superhero with Gold Number","Character","A big-head fondant superhero in a blue suit, red cape and boots, raising a hand-painted gold number 1 for a first birthday."],
  ["images/topper7.jpg","Little Princess","Character","A sweet standing princess with long wavy auburn hair, a yellow crown, puffed sleeves and a pink ball gown and little bow shoes."],
  ["images/topper8.jpg","Chibi Captain America","Character","A hand-sculpted fondant figure in a cute big-head style, with a star-and-stripes suit, a lettered cowl and a layered red, silver and blue shield."],
  ["images/topper9.jpg","Seated Portrait Figure","Personalized","A sitting fondant figure of a man in a blue polo, black pants and white shoes, with white-framed glasses and a cheerful, true-to-life face."],
  ["images/topper10.jpg","Biker on a Teal Motorcycle","Personalized","A hand-sculpted rider with a pompadour, goatee, black shirt, wristwatch and tan boots, sitting on a detailed teal and black motorcycle."],
  ["images/topper11.jpg","Vet and Her Three Pups","Pet lovers","A fondant vet in green scrubs with a stethoscope and glasses, sitting with three furry dogs, each sculpted with its own fur texture, collar and bandana."],
  ["images/topper12.jpg","Little Mermaid","Character","A sweet mermaid resting on her arms, with wavy brown hair, a pink starfish accent and a teal and gold scaled tail."],
  ["images/topper13.jpg","Shark & Snorkeler","Themed","A hand-painted blue and white shark with a toothy grin, paired with a little swimmer in a red diving mask and blue snorkel."],
  ["images/topper14.jpg","Racing Cupcake and Cake Set","Set","A race-day set with flame, wheel, traffic cone and checkered cupcake toppers, mini race cars, checkered flags, a silver-trimmed name plaque and checkered strips."],
  ["images/topper15.jpg","Superhero Cupcake Toppers","Set","A set of super-hero cupcake toppers: masked faces, a team logo, a star shield, green fists and little hammers, all in fondant."]
];
const topperGrid=document.getElementById("topper-grid");
if(topperGrid&&lb){
  const lbi=lb.querySelector("img"),lbc=lb.querySelector(".lb-cap");
  TOPPERS.forEach(([src,title,tag,desc],idx)=>{
    const card=document.createElement("article");card.className="tp-card";
    const b=document.createElement("button");b.className="ph tp-ph";b.type="button";
    fill(b,src,title,idx<3);
    b.setAttribute("aria-label","Enlarge: "+title);
    b.onclick=()=>{lbi.src=src;lbi.alt=title;if(lbc)lbc.textContent=title+". "+desc;lb.showModal()};
    const body=document.createElement("div");body.className="tp-body";
    body.innerHTML='<span class="tp-tag"></span><h3></h3><p></p><a class="btn btn-fill btn-sm tp-btn" target="_blank" rel="noopener">Ask about a topper like this</a>';
    body.children[0].textContent=tag;body.children[1].textContent=title;body.children[2].textContent=desc;
    body.children[3].href="https://www.facebook.com/cakeliciousph";
    card.append(b,body);topperGrid.appendChild(card);
  });
  const cta=document.createElement("a");cta.className="bento-cta tp-cta";cta.target="_blank";cta.rel="noopener";cta.href="https://www.facebook.com/cakeliciousph";
  cta.innerHTML='<span class="script">your favorite character</span><strong>Ask about a topper</strong><span>Message us on Facebook →</span>';
  topperGrid.appendChild(cta);
}

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
  ["images/cake-quarantine.jpg","Quarantine Birthday","Themed","A yellow and black themed birthday cake made during quarantine."],
  ["images/cupcakes-law.jpg","Law School Cupcakes","Cupcakes","Chocolate cupcakes with fondant gavels, law books, a Philippine Constitution and a hand-lettered Valentine's book, for a lawyer."],
  ["images/cupcakes-autobot.jpg","Autobot Cupcakes","Cupcakes","Cupcakes topped with fondant Autobot badges in red, blue and white on grey rounds."],
  ["images/cupcakes-mermaid.jpg","Mermaid Cupcake Set","Cupcakes","A mermaid set of cupcakes with fondant tails and flowers, pearly seashell bras and starfish, in pink, teal and purple."]
];
const cakeGrid=document.getElementById("cake-grid");
if(cakeGrid&&lb){
  const lbi=lb.querySelector("img"),lbc=lb.querySelector(".lb-cap");
  CAKES.forEach(([src,title,tag,desc],idx)=>{
    const card=document.createElement("article");card.className="cake-card";
    const b=document.createElement("button");b.className="ph cake-ph";b.type="button";
    fill(b,src,title,idx<3);
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
  const n=innerWidth<700?6:14, colors=["#D78E9B","#B9A5D3","#C47785","#F2C9D1"];
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
function closeMenu(){menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&menu.classList.contains("open")){closeMenu();burger.focus()}});
document.addEventListener("click",e=>{if(menu.classList.contains("open")&&!menu.contains(e.target)&&!burger.contains(e.target))closeMenu()});
const yr=document.getElementById("yr");if(yr)yr.textContent=new Date().getFullYear();

/* ============ NAV: cake slice that follows the hovered / active pill (desktop) ============ */
(function(){
var menu=document.getElementById('menu');if(!menu)return;
var mq=window.matchMedia('(min-width:961px)');
var hat=document.createElement('li');hat.className='chef-hat';hat.setAttribute('aria-hidden','true');
hat.innerHTML='<svg viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg" focusable="false"><g stroke="#5A3522" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"><path d="M3.9 23H28.5V25.5Q28.5 26.7 27.3 26.7H5.1Q3.9 26.7 3.9 25.5Z" fill="#F4CDAA"/><path d="M3.9 16.5H28.5V23H3.9Z" fill="#E8A3B2"/><path d="M4 15.5C4.6 12 8.4 9.8 13.4 9L26.4 11.2C28.6 11.7 29 13.6 28.6 15.5Z" fill="#FBD9C0"/><path d="M3.7 15.4H28.7V18.4Q28.7 20.2 26.9 20.2 25.1 20.2 25.1 18.6 25.1 17.7 23.8 17.7 22.5 17.7 22.5 18.9 22.5 20.9 20.7 20.9 18.9 20.9 18.9 19 18.9 17.7 17.4 17.7 15.9 17.7 15.9 19.2 15.9 20.7 14.3 20.7 12.7 20.7 12.7 19.2 12.7 18 11.3 18 9.9 18 9.9 19.2 9.9 20.4 8.2 20.4 6.5 20.4 6.5 18.8 6.5 17.9 5.2 17.9 3.7 17.9 3.7 18.4Z" fill="#FFF3F2"/><path d="M15.6 8.6C15.4 6 16.2 4.4 17.4 3.4" fill="none" stroke="#5C7A4A"/><circle cx="15.2" cy="8" r="3" fill="#D9566E" stroke="#5A3522"/></g><circle cx="14.3" cy="7" r=".8" fill="#fff" opacity=".8"/></svg>';
menu.insertBefore(hat,menu.firstChild);
var links=[].slice.call(menu.querySelectorAll('a'));
function home(){return menu.querySelector('a[aria-current="page"]');}
function place(a,lift){
  if(!a||!mq.matches){hat.classList.remove('is-ready');return;}
  var x=a.offsetLeft+a.offsetWidth/2-hat.offsetWidth/2;
  var y=a.offsetTop-hat.offsetHeight+3-(lift?2:0);
  hat.style.transform='translate('+Math.round(x)+'px,'+Math.round(y)+'px)';
  hat.classList.add('is-ready');
}
function rest(){place(home(),false);}
function init(){rest();requestAnimationFrame(function(){requestAnimationFrame(function(){hat.classList.add('is-moving');});});}
links.forEach(function(a){
  a.addEventListener('mouseenter',function(){place(a,true);});
  a.addEventListener('focus',function(){place(a,true);});
  a.addEventListener('blur',rest);
});
menu.addEventListener('mouseleave',rest);
window.addEventListener('resize',function(){hat.classList.remove('is-moving');rest();requestAnimationFrame(function(){hat.classList.add('is-moving');});});
window.addEventListener('load',init);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){hat.classList.remove('is-moving');rest();requestAnimationFrame(function(){hat.classList.add('is-moving');});});
init();
})();
