const blob = document.getElementById("blob");
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
const blobSize = 100; // Adjust this value according to the size of your blob element

function getRandomPosition() {
  const x = Math.random() * (screenWidth - blobSize);
  const y = Math.random() * (screenHeight - blobSize);
  return { x, y };
}

function animateBlob() {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  const { x, y } = getRandomPosition();

  blob.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 3000, fill: "forwards" }
  ).onfinish = animateBlob;
}

window.addEventListener('resize', () => {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
});

animateBlob();
