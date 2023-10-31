# enviarEmails

A função enviarEmails.js permite que seja possivel gerar emails automaticamente para um número ilimitado de destinatários usando o script integrado a uma planilha do google sheets.

A função em questao possui os seguintes parametros:
MailApp.sendEmail({
  to: email,
  subject: assunto,
  body: mensagem,  
  htmlBody: mensagem, 
  attachments: [qrCodeBlob] 
});

Todos os dados são retirados da planilha, sendo assim, capaz de automatizar o envio.

O QR CODE não se faz necessário, é apenas parte da aplicação para que foi desenvolvida a priori.
