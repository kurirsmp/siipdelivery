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
  },  

  {
    nama: "Warung Bu Lastri",
    folder: "wrlastri",
    jumlah: 1
  },  

  {
    nama: "Roti Van Java",
    folder: "rotivanjava",
    jumlah: 1
  },  

  {
    nama: "Get Contact Premium",
    folder: "gtc",
    jumlah: 2
  },
                                                      
  {
    nama: "Masa Aktif",
    folder: "masaaktif",
    jumlah: 1
  }, 

  {
    nama: "Maha Dimsum",
    folder: "mahadimsum",
    jumlah: 1
  }, 

  {
    nama: "Pizza Lebar & Mie Carbonara",
    folder: "pizzalebar",
    jumlah: 1
  }, 

  {
    nama: "Melita Kitchen",
    folder: "melitakitchen",
    jumlah: 9
  }, 

  {
    nama: "Rujak Sabe",
    folder: "rujaksabe",
    jumlah: 1
  }, 
                                                 
  {
    nama: "Rujak mbk Eny",
    folder: "rujakeny",
    jumlah: 1
  }, 
  
  {
    nama: "Warung Takur",
    folder: "warungtakur",
    jumlah: 1
  }, 

  {
    nama: "Sateku Guleku",
    folder: "sateku",
    jumlah: 2
  },
   
  {
    nama: "Ayam bumbu Merah Bu Har",
    folder: "ayammerah",
    jumlah: 1
  },
        
  {
    nama: "Arina Cafe & Resto",
    folder: "arina",
    jumlah: 21
  },
       
  {
    nama: "Mie Gacoan",
    folder: "gacoan",
    jumlah: 1
  },
    
  {
    nama: "Dapur Umma",
    folder: "dapurumma",
    jumlah: 1
  }
  
];

const menuList =
document.getElementById("menuList");

const search =
document.getElementById("search");

function renderMenu(data){

  menuList.innerHTML = "";

  data.forEach(menu => {

    const article =
    document.createElement("article");

    article.className = "menu-item";

    article.innerHTML = `
      <img
        src="./menu/${menu.folder}/cover.jpg"
        alt="${menu.nama}"
        loading="lazy"
      >

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
