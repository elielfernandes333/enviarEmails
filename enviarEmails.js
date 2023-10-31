function enviarEmails() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getSheetByName('Nome da planilha');
  var dados = aba.getRange('A1:D100').getValues();

  for (var i = 0; i < dados.length; i++) {
    var indice = dados[i][]; //Coluna da planilha que contem o indice
    var nome = dados[i][]; //Coluna da planilha que contem o nome
    var matricula = dados[i][]; //Coluna da planilha que contem a matricula
    var email = dados[i][]; //Coluna da planilha que contem o endereço de email do destinatário

    //Gera um qr code que será enviado como anexo do email acerca das informaçoes únicas de cada dedstinatário
    var qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(indice + ';' + nome + ';' + matricula);
    var response = UrlFetchApp.fetch(qrCodeUrl);
    var qrCodeBlob = response.getBlob();

    //Gera um qr code que será enviado como anexo do email acerca das informaçoes únicas de cada dedstinatário

var assunto = "Assunto do email";


var mensagem = "Prezado(a) " + nome + ",<br><br>" +
  "mensagem do email"



MailApp.sendEmail({
  to: email,
  subject: assunto,
  body: mensagem,  
  htmlBody: mensagem, 
  attachments: [qrCodeBlob] 
});
  }
}
