document.addEventListener("DOMContentLoaded", () => {
    console.log("Emergency Angeles Website geladen");

    const robloxLink = "https://www.roblox.com/games/DEINE_GAME_ID";

    document.getElementById("game-tab").addEventListener("click", () => {
        window.open(robloxLink, "_blank");
    });

    document.getElementById("play-roblox").addEventListener("click", () => {
        window.open(robloxLink, "_blank");
    });
});
