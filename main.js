// ambil elemen jarum detik

const jarumDetik = document.querySelector(".second-hand");
const jarumMenit = document.querySelector(".min-hand");
const jarumJam = document.querySelector(".hour-hand");

function setDate() {
  const waktuSekarang = new Date();
  const detik = waktuSekarang.getSeconds();
  const menit = waktuSekarang.getMinutes();
  const jam = waktuSekarang.getHours();

  // bagaimana mengkonversi detik menjadi sumbu
  const detikToDegrees = ((detik / 60) * 360) + 90;
  jarumDetik.style.transform = `rotate(${detikToDegrees}deg)`;

  // menit
  const menitToDegrees = ((menit / 60) * 360) + 90;
  jarumMenit.style.transform = `rotate(${menitToDegrees}deg)`;

  // jam
  const jamToDegree = ((jam / 12) * 360) + 90;
  jarumJam.style.transform = `rotate(${jamToDegree}deg)`;

}
setInterval(setDate, 1000);