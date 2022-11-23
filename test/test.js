
const textCountry = document.getElementById('country');
const inputCountry = document.getElementById('textCountry');
const inputButton = document.getElementById('button');
const imgFlag = document.getElementById('imgFlag');
let country;

inputButton.addEventListener('click', () => {
  let userCountry = inputCountry.value;
  country = userCountry;
  if (country) {
    showCountry();
  } else { textCountry.textContent = 'Вы не ввели страну'}
}, false)

const getCountryInfo = (country) => {
  const countryPromise = fetch('https://api.sampleapis.com/countries/countries');
  return countryPromise
    .then(data => data.json())
    .then(list => {
      const countryNew = list.find(res => res.name.toLowerCase() === country.toLowerCase());
      if (!countryNew) { textCountry.textContent = 'Такой страны нет' }
      return countryNew;

  }).catch(err => console.log(err))
}

const showCountry = () => getCountryInfo(country)
  .then(newCountry => {
    console.log(newCountry);
    textCountry.textContent = `Страна: ${newCountry.name},
                               столица: ${newCountry.capital}, 
                               телефонный префикс: ${newCountry.phone}`;
    imgFlag.src = newCountry.emblem;
    return newCountry
  })
  .catch(err => console.log(err));


