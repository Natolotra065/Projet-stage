const country = document.getElementById('country')
const telephone = document.getElementById('telephone')

document.getElementById('button2').addEventListener('click', function() {
window.location.href = 'main.html';});



  country.addEventListener('change', () => {
    if (country.value) {
      telephone.value = country.value + ' ';
    }
  });
