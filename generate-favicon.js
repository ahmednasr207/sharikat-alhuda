const fs = require("fs");
const LetterAvatar = require("letter-avatar");
const pngToIco = require("png-to-ico");

// توليد صورة PNG بحرف "هـ"
const avatar = LetterAvatar.generate("هـ", {
  size: 64,
  backgroundColor: "#1E40AF",
  textColor: "#FFFFFF",
});

fs.writeFileSync("favicon.png", avatar);

// تحويل PNG إلى ICO
pngToIco('favicon.png')
  .then(buf => {
    fs.writeFileSync('favicon.ico', buf);
    console.log("favicon.ico تم توليده بنجاح");
  })
  .catch(console.error);
