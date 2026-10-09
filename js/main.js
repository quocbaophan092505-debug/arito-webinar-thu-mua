(() => {
  const targetDate = new Date('2026-10-24T08:30:00+07:00').getTime();
  const countdowns = [...document.querySelectorAll('[data-countdown]')];
  const captions = [...document.querySelectorAll('[data-countdown-caption]')];

  let countdownInterval;
  function updateCountdown() {
    const remaining = targetDate - Date.now();
    if (remaining <= 0) {
      window.clearInterval(countdownInterval);
      countdowns.forEach((timer) => {
        timer.hidden = true;
        timer.setAttribute('aria-label', 'Webinar đã bắt đầu hoặc đã kết thúc');
      });
      captions.forEach((item) => { item.textContent = 'Webinar đã bắt đầu hoặc đã kết thúc.'; });
      return;
    }

    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    const values = { days, hours, minutes, seconds };
    Object.entries(values).forEach(([unit, value]) => {
      document.querySelectorAll(`[data-countdown-value="${unit}"]`).forEach((element) => {
        element.textContent = String(value).padStart(2, '0');
      });
    });
  }

  updateCountdown();
  countdownInterval = window.setInterval(updateCountdown, 1000);

  const form = document.getElementById('registration-form');
  const status = document.getElementById('form-status');
  const fields = [...form.querySelectorAll('input[required]')];
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  function validateField(field) {
    const isCheckbox = field.type === 'checkbox';
    let valid = isCheckbox ? field.checked : field.value.trim().length > 0;
    if (field === emailInput && valid) valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
    if (field === phoneInput && valid) {
      const digitCount = field.value.replace(/\D/g, '').length;
      valid = digitCount >= 8 && digitCount <= 15;
    }
    field.setAttribute('aria-invalid', String(!valid));
    return valid;
  }

  fields.forEach((field) => {
    field.addEventListener(field.type === 'checkbox' ? 'change' : 'input', () => {
      validateField(field);
      status.hidden = true;
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.hidden = true;
    const invalidFields = fields.filter((field) => !validateField(field));
    if (invalidFields.length) {
      status.textContent = 'Vui lòng kiểm tra và điền đầy đủ các trường bắt buộc, bao gồm email, số điện thoại hợp lệ và xác nhận đồng ý.';
      status.hidden = false;
      invalidFields[0].focus();
      return;
    }

    status.textContent = 'Form hiện chưa kết nối hệ thống nhận đăng ký. Thông tin của bạn chưa được gửi hoặc lưu.';
    status.hidden = false;
    status.focus?.();
  });
})();
