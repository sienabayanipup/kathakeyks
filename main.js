
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

const burger=document.querySelector(".burger"),menu=document.getElementById("menu");
burger.onclick=()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)};
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}));
const yr=document.getElementById("yr");if(yr)yr.textContent=new Date().getFullYear();
