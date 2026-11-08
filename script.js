const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

const toast = document.getElementById('toast');

let toastTimer;

function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Навигация по разделам
document.querySelectorAll('[data-tab]').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle(
        'active',
        item.dataset.tab === tab
      );
    });

    const target =
      tab === 'cases'
        ? document.getElementById('cases')
        : tab === 'games'
        ? document.getElementById('games')
        : null;

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      notify(
        tab === 'earn'
          ? 'Раздел заданий скоро появится'
          : 'Раздел бонусов скоро появится'
      );
    }
  });
});

// Игры
document.querySelectorAll('[data-game]').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.game === 'upgrade') {
      notify('Апгрейд скоро станет доступен');
    } else {
      notify('Шторм скоро станет доступен');
    }
  });
});

// Кейсы
document.querySelectorAll('[data-case]').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.case === 'daily') {
      notify('Ежедневная коллекция скоро появится');
    } else {
      notify('Коллекция неон-кейса скоро появится');
    }
  });
});

// Профиль
document
  .getElementById('profileBtn')
  .addEventListener('click', () => {
    notify('Профиль скоро появится');
  });
