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
    buka: "06:00",
    tutup: "21:00"
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
  },

  {
    nama: "Arabian Food & Drink",
    folder: "arabianfnd",
    jumlah: 1,
    buka: "15:00",
    tutup: "21:00"
  }  
];

const menuList =
document.getElementById("menuList");

const search =
document.getElementById("search");

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

function renderMenu(data){

  menuList.innerHTML = "";

  data.forEach(menu => {

    const article =
    document.createElement("article");

    article.className = "menu-item";

    const buka =
    isOpen(menu.buka, menu.tutup);

    article.innerHTML = `
      <img
        src="./menu/${menu.folder}/cover.jpg"
        alt="${menu.nama}"
        loading="lazy"
      >

      <div class="${
        buka
        ? "status-buka"
        : "status-tutup"
      }">
        ${
          buka
          ? "Buka"
          : "Tutup"
        }
      </div>

      <h2 class="menu-title">
        ${menu.nama}
      </h2>
    `;

    article.onclick = () => {

      window.location.href =
`detail.html?menu=${menu.folder}`;

    };

    menuList.appendChild(article);

  });

}

renderMenu(menus);

search.addEventListener("input", () => {

  const keyword =
  search.value.toLowerCase();

  const filtered = menus.filter(menu => {

    return menu.nama
    .toLowerCase()
    .includes(keyword);

  });

  renderMenu(filtered);

});

function updateDateTime(){

  const now = new Date();

  document.getElementById("liveClock")
  .textContent =
  now.toLocaleTimeString("id-ID", {
    hour:"2-digit",
    minute:"2-digit"
  });

  document.getElementById("liveDate")
  .textContent =
  now.toLocaleDateString("id-ID", {
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
  });

}

updateDateTime();

setInterval(updateDateTime,1000);
