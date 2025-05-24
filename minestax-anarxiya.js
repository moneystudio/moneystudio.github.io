const premiumEmailList = [
  "shoxmoneylord01@gmail.com",
  "afruz908@gmail.com"
];

const pluginData = {
  pluginName: "ᴍɪɴᴇꜱᴛᴀx | ᴀɴᴀʀxɪʏᴀ ",
  pluginImage: "anarxiya.jpg",
  pluginCategory: "ᴍɪɴᴇꜱᴛᴀx",
  pluginInfo: "ᴍɪɴᴇꜱᴛᴀx | ᴀɴᴀʀxɪʏᴀ . Ushbu sborkada hamma funksiyalar to'liqligicha nusxalangan.",
  pluginFileLink: "https://store5.gofile.io/download/web/8668e67d-ee30-4e9d-80b3-5477cf56ef96/ANARXIYA.zip",
  isPremium: true,
  pluginURL: "https://youtu.be/PCCEf3xfZXY?si=Hd7YmkVjt89rbDgE"
};

function loadPluginDetail() {
  const detailContainer = document.getElementById('pluginDetail');
  const userEmail = localStorage.getItem('userEmail');
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  let detailHTML = `
    <h1>${pluginData.pluginName}</h1>
    <img src="${pluginData.pluginImage}" alt="Plugin Image" class="plugin-image">
    <div class="plugin-info">
      <p><strong>Turi:</strong> ${pluginData.pluginCategory}</p>
      <p><strong>Plugin haqida:</strong> ${pluginData.pluginInfo}</p>
    </div>
  `;

  if (pluginData.pluginURL) {
    detailHTML += `
      <div style="text-align: center; margin-bottom: 15px;">
        <a href="${pluginData.pluginURL}" target="_blank" style="color: #007bff; text-decoration: none; font-weight: bold;">
          ➡️ Ko'proq Bilish
        </a>
      </div>
    `;
  }

  let downloadHTML = "";
  if (pluginData.isPremium) {
    if (isLoggedIn && userEmail && premiumEmailList.includes(userEmail.toLowerCase())) {
      downloadHTML = `
        <div class="action-buttons">
          <a href="${pluginData.pluginFileLink}" download class="download-button">Yuklab olish</a>
        </div>
        <div class="premium-status">&nbsp;&nbsp;​Sotib olingan</div>
      `;
    } else {
      downloadHTML = `
        <div class="action-buttons">
          <a href="https://t.me/SHoXBoSSYT" class="disabled-button">Siz buni sotib olmagansiz</a>
        </div>
        <div class="premium-status">&nbsp;&nbsp;​​🇺​​🇸​​🇭​​🇧​​🇺​ ​🇷​​🇪​​🇸​​🇺​​🇷​​🇸​ ​🇵​​🇺​​🇱​​🇱​​🇮​​🇰​. ​🇸​​🇴​​🇹​​🇮​​🇧​ ​🇴​​🇱​​🇮​​🇸​​🇭​ ​🇺​​🇨​​🇭​​🇺​​🇳​ ​🇹​​🇪​​🇱​​🇪​​🇬​​🇷​​🇦​​🇲​ - @​🇸​​🇭​​🇴​​🇽​​🇧​​🇴​​🇸​​🇸​​🇾​​🇹​​</div>
      `;
    }
  } else {
    downloadHTML = `
      <div class="action-buttons">
        <a href="${pluginData.pluginFileLink}" download class="download-button">Yuklab olish</a>
      </div>
      <div class="premium-status">&nbsp;&nbsp;</div>
    `;
  }

  detailContainer.innerHTML = detailHTML + downloadHTML;
}

window.onload = function() {
  loadPluginDetail();
};
