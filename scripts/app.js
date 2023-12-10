const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");

const elementNavigationMenus = document.querySelector(".navigation__menus")

const elementProjectComplete = document.querySelector('#p-complete');

const elementYearExperience = document.querySelector('.experience');

// VALUE ONLY
const containerValue = {
  projectComplete: 420,
  yearExperience: "30+",
};

// VALUE MENUS
const navigationMenus = [
  {
    title: "Work",
    link: "/#"
  },
  {
    title: "About",
    link: "/#"
  },
  {
    title: "Service",
    link: "/#"
  },
  {
    title: "Contact",
    link: "/#"
  },
];

navigationMenus.map((navigation) => {
  return navigation;
})
/**
 * 
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});

elementProjectComplete.append(containerValue.projectComplete)

elementYearExperience.append(containerValue.yearExperience)