function generateNumericPassword() {
    const chars = "0123456789";
    let password = "";
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }
  
  function generatePasswordEveryMinute(interval) {
    const passwordInput = document.getElementById("password");
    const password = generateNumericPassword();
    passwordInput.value = password;
    setTimeout(() => generatePasswordEveryMinute(interval), interval);
  }
  
  // Gerar uma nova senha a cada 30 segundos
  generatePasswordEveryMinute(3000);
