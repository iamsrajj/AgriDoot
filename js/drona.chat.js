async function embeddrona() {
  const t = window.infeanDronaConfig;
  if (t && t.token) {
    var e = !!t.isDev;
    const o = t.baseUrl || `https://${e ? "dev." : ""}udify.app`,
      n = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="39" height="39" id="robot" style="position: relative; bottom: 2px; left: 1px;"><g><g><ellipse cx="24" cy="45.5" fill="#45413c" opacity=".15" rx="19.5" ry="1.5"></ellipse><path fill="#daedf7" d="M42 40.5c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V27c0-9.9 8.1-18 18-18s18 8.1 18 18v13.5z"></path><path fill="#fff" d="M24 9C14.1 9 6 17.1 6 27v5c0-9.9 8.1-18 18-18s18 8.1 18 18v-5c0-9.9-8.1-18-18-18z"></path><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M42 40.5c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V27c0-9.9 8.1-18 18-18s18 8.1 18 18v13.5z"></path><path fill="#c0dceb" d="M30.5 44c0 1.1-.9 2-2 2h-9c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v8z"></path><path fill="#adc4d9" d="M17.5 38.5h13v2h-13z"></path><path fill="#adc4d9" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M45.5 36.5l-3.5 2V26l3.5 2zM2.5 36.5l3.5 2V26l-3.5 2z"></path><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M24 9c.2-1 2.5-8 10.5-6.7"></path><circle cx="36" cy="3.5" r="2.5" fill="#ff6242" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M30.5 44c0 1.1-.9 2-2 2h-9c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v8z"></path><path fill="#ff6242" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M30.5 38.5h-13V36c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v2.5z"></path><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M33.5 11.8C30.7 10.1 27.5 9 24 9s-6.7 1-9.5 2.7V24h19V11.8z"></path><circle cx="32.5" cy="25" r="5" fill="#00dfeb" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle><circle cx="32.5" cy="25" r="2" fill="#627b8c" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle><circle cx="15.5" cy="25" r="5" fill="#00dfeb" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle><circle cx="15.5" cy="25" r="2" fill="#627b8c" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle></g></g></svg>`,
      i = `<svg
          id="closeIcon"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 18L6 6M6 18L18 6"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>`;
    if (!document.getElementById("infean-drona-bubble-button")) {
      e = document.createElement("div");
      (e.id = "infean-drona-bubble-button"),
        (e.style.cssText =
          "position: fixed; bottom: 1rem; right: 2rem; width: 60px; height: 60px; border-radius: 30px; background-color: #0550ae; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px; cursor: pointer; z-index: 2147483647; transition: all 0.2s ease-in-out 0s; left: unset; transform: scale(1); :hover {transform: scale(1.1);}");
      const d = document.createElement("div");
      (d.style.cssText =
        "display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 2147483647;"),
        (d.innerHTML = n),
        e.appendChild(d),
        document.body.appendChild(e),
        e.addEventListener("click", function () {
          var e = document.getElementById("infean-drona-bubble-window");
          e
            ? "none" === e.style.display
              ? ((e.style.display = "block"), (d.innerHTML = i))
              : ((e.style.display = "none"), (d.innerHTML = n))
            : (((e = document.createElement("iframe")).allow =
                "fullscreen;microphone"),
              (e.title = "infean drona bubble window"),
              (e.id = "infean-drona-bubble-window"),
              (e.src = o + "/chatbot/" + t.token),
              (e.style.cssText =
                "border: none; position: fixed; flex-direction: column; justify-content: space-between; box-shadow: rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px; bottom: 6rem; right: 2rem; width: 26rem; max-width: calc(100vw - 2rem); height: 35rem; max-height: calc(100vh - 6rem);border-radius: 1.75rem; display: flex; z-index: 2147483647; overflow: hidden; left: unset; background-color: #F3F4F6;"),
              document.body.appendChild(e),
              (d.innerHTML = i));
        });
    }
  } else console.error("Infean - Drona is empty or token is not invalid");
}

// Drona Pop-Up window default view control
document.body.onload = function () {
  const defaultView = window.infeanDronaConfig.defaultview;
  if (defaultView && defaultView.toLowerCase() === "on") {
    embeddrona();

    var bubbleButton = document.getElementById("infean-drona-bubble-button");
    if (bubbleButton) {
      bubbleButton.click();
    }
  } else {
    document.body.onload = embeddrona();
  }
};
