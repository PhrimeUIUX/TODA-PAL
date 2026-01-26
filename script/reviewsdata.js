
const reviewsData = [
  {
    name: "Faith N.",
    role: "Passenger",
    stars: 5,
    photo: "https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/faith.jpg",
    text: "Mabilis, maayos, at user-friendly. Highly recommended ang PPC TODA app!"
  },
  {
    name: "PhrimeUIUX",
    role: "Developer",
    stars: 5,
    photo: "https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/phrime.jpg",
    text: "Astig ah, Basta astig dito guayz try niyo! Supafast, supamura. Tara na sa PPC TODA!"
  },
  {
    name: "Rovic S.",
    role: "Passenger",
    stars: 4,
    photo: "https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/rovic.jpg",
    text: "Ang bilis ng serbisyo! Hindi na kailangan maghintay ng matagal, salamat PPC TODA!"
  },
  {
    name: "Jhouize D.",
    role: "Passenger",
    stars: 5,
    photo: "https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/jhouize.jpg",
    text: "Buti na lang may PPC TODA app. Laking ginhawa sa araw-araw na biyahe!"
  },
  {
    name: "Fherlyn N.",
    role: "Passenger",
    stars: 5,
    photo: "https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/ferlhyn.jpg",
    text: "Sobrang convenient gamitin ang PPC TODA app. Isang click lang, may tricycle ka na!"
  },
  {
    name: "Shayla F.",
    role: "Passenger",
    stars: 5,
    photo: "https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/shayla.jpg",
    text: "Very accommodating, very easy to use — mura, mabilis, at walang kuskus balukos."
  },
  {
    name: "Max & Bunny",
    role: "Partner",
    stars: 5,
    photo: "https://storage.googleapis.com/ppctoda_website/ppctoda_assets/reviews/maxbunny.jpg",
    text: "Araw-araw po namin ginagamit ang PPC TODA para sa Max & Bunny Restaurant."
  }
];



const track = document.getElementById("reviewsTrack");

/* render + duplicate */
function renderReviews(data) {
  const html = data.map(r => `
    <div class="review-card">
      <div class="review-content">
        <div class="review-header">
          <img class="review-photo" src="${r.photo}" />
          <div>
            <div class="review-name">${r.name}</div>
            <div class="stars">${"⭐".repeat(r.stars)}</div>
            <div class="review-role">${r.role}</div>
          </div>
        </div>
        <div class="review-text">“${r.text}”</div>
      </div>
    </div>
  `).join("");

  // duplicate for seamless loop
  track.innerHTML = html + html;
}

renderReviews(reviewsData);

/* animation */
let position = 0;
let speed = 0.50; // 👈 lower = slower, higher = faster

function animate() {
  position += speed;

  const halfWidth = track.scrollWidth / 2;

  if (position >= halfWidth) {
    position = 0; // invisible reset
  }

  track.style.transform = `translateX(-${position}px)`;
  requestAnimationFrame(animate);
}

animate();

/* reset on resize */
window.addEventListener("resize", () => {
  position = 0;
});