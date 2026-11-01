
/* ============ PHOTOS ============
   Image files live in the images/ folder. Empty slots show a labeled placeholder.
   Gallery order matters: the bento layout in styles.css sizes tiles by position.
   Slot 3 is the "CTA" tile (a booking link, not a photo). */
const PHOTOS = {
  "hero-main":"images/hero-main.jpg", "hero-sub":"images/hero-sub.jpg", "about":"images/about.jpg",
  gallery:[
    ["images/hero-sub.jpg","Astronaut cake with a Philippine flag and moon craters"],
    ["images/cake-hala-trenta.jpg","Blue bento cake that says Hala, Trenta ka na"],
    "CTA",
    ["images/cake-born18.jpg","Pink and purple Born at 18 cake with a purple bow"],
    ["images/cake-minecraft.jpg","Minecraft themed cake with grass frosting"],
    ["images/cake-irie.jpg","Pink bento cake for a 1st birthday"],
    ["images/hero-main.jpg","Pastel candy-themed cake with a sweets train"],
    ["images/cake-unicorn.jpg","Unicorn and rainbow 1st birthday cake"],
    ["images/cake-jhaz.jpg","Pink drip cake with a photo topper and signs"],
    ["images/cake-quarantine.jpg","Yellow and black quarantine themed birthday cake"]
  ]
};

function fill(el,src,label){
  if(src){const i=new Image();i.src=src;i.alt=label;i.loading="lazy";i.decoding="async";el.appendChild(i)}
  else{el.classList.add("empty");el.innerHTML="<div><b>"+label+"</b>Add photo in PHOTOS</div>"}
}
document.querySelectorAll("[data-slot]").forEach(f=>fill(f,PHOTOS[f.dataset.slot],f.dataset.label));

const lb=document.getElementById("lb"),bento=document.getElementById("bento");
if(lb&&bento){
const lbi=lb.querySelector("img");
PHOTOS.gallery.forEach((item,i)=>{
  if(item==="CTA"){
    const a=document.createElement("a");a.className="bento-cta";a.target="_blank";a.rel="noopener";a.href="https://www.facebook.com/cakeliciousph";
    a.innerHTML='<span class="script">your idea, our hands</span><strong>Book your cake date</strong><span>Message us on Facebook →</span>';
    bento.appendChild(a);return;
  }
  const [src,alt]=item;
  const b=document.createElement("button");b.className="ph";b.type="button";b.setAttribute("aria-label","Enlarge: "+alt);
  fill(b,src,alt);
  b.onclick=()=>{lbi.src=src;lbi.alt=alt;lb.showModal()};
  bento.appendChild(b);
});
lb.addEventListener("click",e=>{if(e.target===lb||e.target.tagName==="BUTTON")lb.close()});
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

const burger=document.querySelector(".burger"),menu=document.getElementById("menu");
burger.onclick=()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)};
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}));
const yr=document.getElementById("yr");if(yr)yr.textContent=new Date().getFullYear();
