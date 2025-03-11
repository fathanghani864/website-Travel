function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('responsive');
}
var swiper = new Swiper(".mySwiper", {
    // loop: true,
    // freeMode: true, 
    touchReleaseOnEdges: true, 
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function showyogyakarta() {
    document.getElementById("yogyakarta").classList.remove("hidden");
    document.getElementById("yogyakarta1").classList.remove("hidden");
    document.getElementById("yogyakarta2").classList.remove("hidden");
    document.getElementById("yogyakarta3").classList.remove("hidden");
    document.getElementById("yogyakarta4").classList.remove("hidden");
    document.getElementById("yogyakarta5").classList.remove("hidden");
    document.getElementById("yogyakarta6").classList.remove("hidden");
    document.getElementById("magelang1").classList.add("hidden");
    document.getElementById("magelang2").classList.add("hidden");
    document.getElementById("magelang3").classList.add("hidden");
    document.getElementById("magelang4").classList.add("hidden");
    document.getElementById("magelang5").classList.add("hidden");
    document.getElementById("magelang6").classList.add("hidden");
    document.getElementById("bali1").classList.add("hidden");
    document.getElementById("bali2").classList.add("hidden");
    document.getElementById("bali3").classList.add("hidden");
    document.getElementById("bali4").classList.add("hidden");
    document.getElementById("bali5").classList.add("hidden");
    document.getElementById("bali6").classList.add("hidden");
}

function showmagelang() {
  document.getElementById("yogyakarta").classList.remove("hidden");
    document.getElementById("yogyakarta1").classList.add("hidden");
    document.getElementById("yogyakarta2").classList.add("hidden");
    document.getElementById("yogyakarta3").classList.add("hidden");
    document.getElementById("yogyakarta4").classList.add("hidden");
    document.getElementById("yogyakarta5").classList.add("hidden");
    document.getElementById("yogyakarta6").classList.add("hidden");
    document.getElementById("magelang1").classList.remove("hidden");
    document.getElementById("magelang2").classList.remove("hidden");
    document.getElementById("magelang3").classList.remove("hidden");
    document.getElementById("magelang4").classList.remove("hidden");
    document.getElementById("magelang5").classList.remove("hidden");
    document.getElementById("magelang6").classList.remove("hidden");
    document.getElementById("bali1").classList.add("hidden");
    document.getElementById("bali2").classList.add("hidden");
    document.getElementById("bali3").classList.add("hidden");
    document.getElementById("bali4").classList.add("hidden");
    document.getElementById("bali5").classList.add("hidden");
    document.getElementById("bali6").classList.add("hidden");
}

function showbali() {
  document.getElementById("yogyakarta").classList.remove("hidden");
    document.getElementById("yogyakarta1").classList.add("hidden");
    document.getElementById("yogyakarta2").classList.add("hidden");
    document.getElementById("yogyakarta3").classList.add("hidden");
    document.getElementById("yogyakarta4").classList.add("hidden");
    document.getElementById("yogyakarta5").classList.add("hidden");
    document.getElementById("yogyakarta6").classList.add("hidden");
    document.getElementById("magelang1").classList.add("hidden");
    document.getElementById("magelang2").classList.add("hidden");
    document.getElementById("magelang3").classList.add("hidden");
    document.getElementById("magelang4").classList.add("hidden");
    document.getElementById("magelang5").classList.add("hidden");
    document.getElementById("magelang6").classList.add("hidden");
    document.getElementById("bali1").classList.remove("hidden");
    document.getElementById("bali2").classList.remove("hidden");
    document.getElementById("bali3").classList.remove("hidden");
    document.getElementById("bali4").classList.remove("hidden");
    document.getElementById("bali5").classList.remove("hidden");
    document.getElementById("bali6").classList.remove("hidden");
}
