const menus = [

  {
    nama: "Basecamp Cafe",
    folder: "basecamp-cafe",
    jumlah: 1,
    buka: "10:00",
    tutup: "21:00"
  },

  {
    nama: "Warung Tengah Sawah",
    folder: "wts",
    jumlah: 2,
    buka: "06:00",
    tutup: "16:00"
  },

  {
    nama: "Dapur Laila",
    folder: "dapur-laila",
    jumlah: 5,
    buka: "08:00",
    tutup: "22:00"
  },
  
  {
    nama: "Penyetan Melita",
    folder: "penyetan-melita",
    jumlah: 2,
    buka: "10:00",
    tutup: "22:00"
  },
  
  {
    nama: "77 Jeruk peras & Alpukat kocok",
    folder: "77",
    jumlah: 1,
    buka: "09:00",
    tutup: "23:00"
  },
  
  {
    nama: "Rujak Alisha",
    folder: "rujak-alisha",
    jumlah: 1,
    buka: "09:00",
    tutup: "21:00"
  },  

  {
    nama: "Lalapan Sambel Ijo 2R",
    folder: "lalapansambelijo2r",
    jumlah: 1,
    buka: "13:00",
    tutup: "00:00"
  },  

  {
    nama: "Kedai Sotoku",
    folder: "kedai-sotoku",
    jumlah: 1,
    buka: "09:00",
    tutup: "21:00"
  },  

  {
    nama: "Warung Bu Lastri",
    folder: "wrlastri",
    jumlah: 1,
    buka: "07:00",
    tutup: "14:00"
  },  

  {
    nama: "Roti Van Java",
    folder: "rotivanjava",
    jumlah: 1,
    buka: "15:00",
    tutup: "22:00"
  },  

  {
    nama: "Get Contact Premium",
    folder: "gtc",
    jumlah: 2,
    buka: "00:00",
    tutup: "23:59"
  },                                                    

  {
    nama: "Masa Aktif",
    folder: "masaaktif",
    jumlah: 1,
    buka: "00:00",
    tutup: "23:59"
  }, 

  {
    nama: "Maha Dimsum",
    folder: "mahadimsum",
    jumlah: 1,
    buka: "09:00",
    tutup: "22:00"
  }, 

  {
    nama: "Pizza Lebar & Mie Carbonara",
    folder: "pizzalebar",
    jumlah: 1,
    buka: "13:00",
    tutup: "21:00"
  },

  {
    nama: "Melita Kitchen",
    folder: "melitakitchen",
    jumlah: 9,
    buka: "09:00",
    tutup: "22:00"
  }, 

  {
    nama: "Rujak Sabe",
    folder: "rujaksabe",
    jumlah: 1,
    buka: "09:30",
    tutup: "16:00"
  }, 
                                                 
  {
    nama: "Rujak mbk Eny",
    folder: "rujakeny",
    jumlah: 1,
    buka: "09:00",
    tutup: "16:00"
  }, 
  
  {
    nama: "Warung Takur",
    folder: "warungtakur",
    jumlah: 1,
    buka: "09:00",
    tutup: "20:30"
  }, 

  {
    nama: "Sateku Guleku",
    folder: "sateku",
    jumlah: 2,
    buka: "06:00",
    tutup: "21:00"
  },
   
  {
    nama: "Ayam bumbu Merah Bu Har",
    folder: "ayammerah",
    jumlah: 1,
    buka: "08:00",
    tutup: "16:00"
  },
      
  {
    nama: "Arina Cafe & Resto",
    folder: "arina",
    jumlah: 21,
    buka: "10:00",
    tutup: "22:00"
  }, 
                    
  {
    nama: "Mie Gacoan",
    folder: "gacoan",
    jumlah: 1,
    buka: "08:00",
    tutup: "23:00"
  },  
   
  {
    nama: "Dapur Umma",
    folder: "dapurumma",
    jumlah: 1,
    buka: "08:00",
    tutup: "20:00"
  }, 
   
  {
    nama: "Dapur Sinsin",
    folder: "dapursinsin",
    jumlah: 1,
    buka: "09:00",
    tutup: "17:00"
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

function isOpen(buka, tutup){

  const now = new Date();

  const current =
  now.getHours() * 60 +
  now.getMinutes();

  const [bukaJam, bukaMenit] =
  buka.split(":").map(Number);

  const [tutupJam, tutupMenit] =
  tutup.split(":").map(Number);

  const bukaTime =
  bukaJam * 60 + bukaMenit;

  const tutupTime =
  tutupJam * 60 + tutupMenit;

  if(tutupTime < bukaTime){

    return current >= bukaTime ||
    current <= tutupTime;

  }

  return current >= bukaTime &&
  current <= tutupTime;

}

if(menu){

  const buka =
  isOpen(menu.buka, menu.tutup);

  title.innerHTML = `
    ${menu.nama}

    <div style="
      margin-top:8px;
      font-size:12px;
      font-weight:600;
      color:${buka ? "#22c55e" : "#ef4444"};
    ">
      ${
        buka
        ? "Buka"
        : "Tutup"
      } • ${menu.buka} - ${menu.tutup}
    </div>
  `;

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