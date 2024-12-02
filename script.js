document.addEventListener("DOMContentLoaded", function () {
  // Tangkap tombol dengan ID scroll-to-explore
  const scrollToExploreButton = document.getElementById("scroll-to-explore");

  // Tambahkan event listener klik
  scrollToExploreButton.addEventListener("click", function (event) {
    // Mencegah default behavior dari anchor (#)
    event.preventDefault();

    // Scroll ke elemen dengan ID explore
    const exploreSection = document.getElementById("explore");
    exploreSection.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start" // Posisi scroll dimulai dari atas
    });
  });
});
