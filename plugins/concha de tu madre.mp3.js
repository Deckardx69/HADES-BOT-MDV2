import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/concha de tu madre.mp3'
conn.sendFile(m.chat, vn, 'concha de tu madre.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /insulta|linsulta/
handler.command = new RegExp
handler.register = true
export default handler
