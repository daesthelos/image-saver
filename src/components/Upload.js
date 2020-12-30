import { Container } from '@material-ui/core'


//It seems like indexedDB functionality doesn't work in development mode?
//I would like to use sessionStorage or localStorage, but it seems like the storage size is too small
// The image I used was 16mb, but could be larger

/*
var db = null;
function createDB({ onsuccess, onerror }) {
  const request = window.indexedDB.open('images')
  request.onsuccess = (event) => { console.log("db was made!"); db = request.result; onsuccess(event); }
  request.onerror = (event) => onerror(event)
}

function saveImage(imageFile) {
  console.log("file size: ", imageFile.size)
  const reader = new FileReader();
  reader.onload = ({ target }) => { console.log(target.result); }
  reader.readAsDataURL(imageFile)
}

function saveFile(file) {
  try {
    var transaction = db.transaction('images').objectStore('images')
    var objectStore = transaction.objectStore('images');
    objectStore.put(file)
  }
  catch (e) { console.log(e); }
}
*/

function displayImage(imageFile) {
  let imagePreview = document.querySelector("#preview");
  imagePreview.src = URL.createObjectURL(imageFile);
}

export default function Upload() {

  document.onpaste = (event) => {
    const image = [...event.clipboardData.items].find(item => item.kind === 'file' && item.type.match(/image/g))
    if (image) {
      displayImage(image.getAsFile())
      //saveImage(image.getAsFile())
    }
  }

  return (
    <Container>
      <h1>Upload</h1>
      <div>Upload your images here!</div>
      <img id="preview" alt="preview" width="100%" height="100%" />
    </Container>
  )
}