const registrationForm = document.getElementById('registrationForm');
  const outputSection = document.getElementById('output');
  const outputFullName = document.getElementById('outputFullName');
  const outputEmail = document.getElementById('outputEmail');

  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    outputFullName.textContent = fullName;
    outputEmail.textContent = email;

    outputSection.style.display = 'block';
  });