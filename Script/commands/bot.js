const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "Bot বলে অসম্মান করছি,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" ,"- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "help")) {
     return api.sendMessage("type /help", threadID);
   };
  
    if ((event.body.toLowerCase() == "☠️") || (event.body.toLowerCase() == "💀")) {
     return api.sendMessage("🙄 কি হইছে ভাই.!", threadID);
   };  
  
   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("simsimi কমান্ড এড় নাই টাইপ করুন baby", threadID);
   };
  
   if ((event.body.toLowerCase() == "ওই কিরে") || (event.body.toLowerCase() == "oi keray") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("মধু মধু রসমালাই 🍆⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("কিরে হালা লুচ্চা, এগুলো কি ইমুজি দেস ।", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "shifat") || (event.body.toLowerCase() == "shifat bai") || (event.body.toLowerCase() == "@Ullash ッ") || (event.body.toLowerCase() == "উল্লাস")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ SHIFAT ッ ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 SHIFAT.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100078859776449\nতার সাতে যোগা যোগ করবেন WhatsApp :- +0175570***", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator: SHIFAT ❤️ হাই আমি মেছেন্জার ROBOT  আামার বস সিফাত আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is Shifat ッ❤️ তাকে সবাই সিফাত নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "sala ami tor boss") || (event.body.toLowerCase() == "sala ami shifat") || (event.body.toLowerCase() == "cup sala ami ullash") || (event.body.toLowerCase() == "madari")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "@Farhana Ontora") || (event.body.toLowerCase() == "@Farhana Ontora ")) {
     return api.sendMessage("খবরদার কেউ এই আইড়ি মেনশন দিবানা এটা আমার বস উল্লাস এর বউ এর আইড়ি😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "shifa") || (event.body.toLowerCase() == "arohi")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস সিফাত এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "mim") || (event.body.toLowerCase() == "Mim")) {
     return api.sendMessage("মিম একটা খুব ভালো বট ছিলো,,, আমার থেকেও এডভাঞ্চ হয়তো 🥰", threadID);
   };

  if ((event.body.toLowerCase() == "kotha") || (event.body.toLowerCase() == "nila")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস সিফাত এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "@MD khan ") || (event.body.toLowerCase() == "রিয়ান")) {
     return api.sendMessage("🥰-সিয়াম-🌺 আমার বস সিফাত এর বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hum")) {
     return api.sendMessage("️হুম হুম বইলো না মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_>miss shifa", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss daw")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইতে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("প্রেম করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল🌚🐸", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো বট") || (event.body.toLowerCase() == "kemon acho bot") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you bot") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("লাভ ইউ টু বাবু 😘🫶", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না লাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("হুম লাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "bot game khelba") || (event.body.toLowerCase() == "bot game aso") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("হা খেলবো আসো গেমে 😘🫶", threadID);
   };

  if ((event.body.toLowerCase() == "oi bot daymond gift korba") || (event.body.toLowerCase() == "কিছু ডায়মন্ড গিফ্ট করো বট") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি ফকির আমি মিসকিন জঙ্গলে আমার বাড়ি", threadID);
   };

   if ((event.body.toLowerCase() == "ki khobor bot") || (event.body.toLowerCase() == "কেমন আছো বট") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("ভালোই আছি তোমাদের দোয়ায়😘🫶", threadID);
   };

   if ((event.body.toLowerCase() == "বট তোমার বাসা কোথায়") || (event.body.toLowerCase() == "বট কোথায় থাকিস তুই") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("আমার বাসা খুলনা তে , কেনো আসবে নাকি আমার কাছে 🫢", threadID);
   };

   if ((event.body.toLowerCase() == "ami shifat") || (event.body.toLowerCase() == "kire")) {
     return api.sendMessage("হ্যা বস কেমন আছেন..?☺️", threadID);
   };
  mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
     
