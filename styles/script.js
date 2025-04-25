  const dots = document.getElementById("dots");
  let count = 0;

  setInterval(() => {
    count = (count + 1) % 4;
    dots.textContent = ".".repeat(count);
  }, 500);

