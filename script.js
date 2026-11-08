const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let balance = 1000;

function updateBalance() {
    document.getElementById("balance").textContent =
        balance.toLocaleString("ru-RU");
}

function openGame(game) {
    const games = {
        upgrade: "⚔️ Апгрейд",
        storm: "💎 Шторм",
        cases: "🎁 Кейсы",
        rating: "🏆 Рейтинг"
    };

    tg.showAlert("Раздел " + games[game] + " скоро появится!");
}

function showPage(page) {
    const pages = {
        games: "🎮 Игры",
        cases: "🎁 Кейсы",
        bonus: "💰 Бонусы",
        profile: "👤 Профиль"
    };

    tg.showAlert("Раздел " + pages[page] + " скоро появится!");
}

updateBalance();