const h3FileSizeBytes = document.getElementById("h3FileSizeBytes");
const h3Url = document.getElementById("h3Url");
const imgCachorro = document.getElementById("imgCachorro");

const retrieveRandomDog = async () => {
  const response = await fetch(`https://random.dog/woof.json`);
  const data = await response.json();
  h3FileSizeBytes.innerHTML = "Size = " + data.fileSizeBytes + "bytes";
  h3Url.innerHTML = "URL = " + data.url;
  imgCachorro.src = data.url;
};

retrieveRandomDog();
