const menus = [

  {
    nama: "Basecamp Cafe",
    folder: "basecamp-cafe",
    jumlah: 1
  },

  {
    nama: "Warung Tengah Sawah",
    folder: "wts",
    jumlah: 2
  },

  {
    nama: "Dapur Laila",
    folder: "dapur-laila",
    jumlah: 5
  },
  
  {
    nama: "Penyetan Melita",
    folder: "penyetan-melita",
    jumlah: 2
  },
  
  {
    nama: "77 Jeruk peras & Alpukat kocok",
    folder: "77",
    jumlah: 1
  },
  
  {
    nama: "Rujak Alisha",
    folder: "rujak-alisha",
    jumlah: 1
  },  
 
  {
    nama: "Lalapan Sambel Ijo 2R",
    folder: "lalapansambelijo2r",
    jumlah: 1
  },  

  {
    nama: "Kedai Sotoku",
    folder: "kedai-sotoku",
    jumlah: 1
  }  
                  
];

const params =
new URLSearchParams(window.location.search);

const folder =
params.get("menu");

const menu =
menus.find(m => m.folder === folder);

const title =
document.getElementById("title");

const gallery =
document.getElementById("gallery");

const totalFoto =
document.getElementById("totalFoto");

const orderBtn =
document.getElementById("orderBtn");

const pesan =
document.getElementById("pesan");

if(menu){

  title.textContent = menu.nama;

  totalFoto.textContent =
  `${menu.jumlah} Foto`;

  for(let i = 0; i < menu.jumlah; i++){

    const fileName =
    i === 0
    ? "cover.jpg"
    : `${i}.jpg`;

    const img =
    document.createElement("img");

    img.src =
    `./menu/${menu.folder}/${fileName}`;

    img.loading = "lazy";

    img.onerror = () => {
      img.src = "./fallback.jpg";
    };

    gallery.appendChild(img);

  }

}

orderBtn.addEventListener("click", () => {

  const isi =
  pesan.value.trim();

  if(!isi){

    alert("Isi pesanan dulu");

    return;

  }

  const text =
`Halo SIIP DELIVERY, saya mau pesan dari ${menu.nama}:

${isi}`;

  window.location.href =
`https://wa.me/628990216387?text=${encodeURIComponent(text)}`;

});