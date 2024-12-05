require("./database/module")

//GLOBAL PAYMENT
global.storename = ""
global.dana = "0831"
global.qris = "-"


// GLOBAL SETTING
global.owner = "6283896168476"
global.namabot = "💧⃟𝙍𝙤𝙤𝙩 𝙘𝙧𝙖𝙨𝙝╳🐦‍🔥"
global.nomorbot = "6283896168476"
global.namaCreator = "💧⃟𒆜𝙆𝘼𝙉𝘿𝙄𝙓𝙓⃟╳🐦‍🔥"
global.linkyt = ""
global.autoJoin = false
global.antilink = false
global.versisc = '3.0'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://files.catbox.moe/utcsoo.jpg'
global.thumb = 'https://files.catbox.moe/utcsoo.jpg'
global.isLink = "https://whatsapp.com/channel/0029VarGepU1dAw1U76h3S1k"
global.packname = "Bugs"
global.author = "𝙠𝙖𝙣𝙙𝙞𝙓𝘿"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})