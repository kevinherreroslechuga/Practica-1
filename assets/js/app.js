const baseEndpoint = 'https://api.github.com';// en esta funcion extraemos la informacion del json e imprimimos name, blog, locacion del usuario se imprime la informacion del json 
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//agrege el . por que referencia una clase
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //agrege async a la funcion 
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);//cambia la funcion a asincrona para que permitiera el await
  const data= await response.json();// declaramos la variable de data con await
  console.log(data);
  $n.textContent = `${data.name}`;//corregi las comillas de estas declaraciones de texto
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}` ;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;//le faltaba el simbolo "$" al nombre d el avariable
}

displayUser('stolinski').catch(handleError);