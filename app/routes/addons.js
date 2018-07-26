
const fs = require('fs');
const ApiError = require('../models/api_error');
const HttpStatus = require('../helpers/http_status');

class AddOns {

  static middleware(req, res, next) {

    res.downloadFile = (filePath) => {
      if (fs.existsSync(filePath)) {
        res.download(filePath);
      }
      else {
        const apiError = ApiError.NotFound;
        apiError.message = `Arquivo "${filePath.replace(/.*\/(.+)$/, '$1')}" não encontrado`;
        res.status(apiError.status).json(apiError);
      }
    };

    res.setTotalCount = (count) => {
      res.header('X-Total-Count', count);
    };

    res.sendWordDocument = (fileName, fileBuffer) => {
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.setHeader('Content-Disposition', `attachment; filename="${fileName || 'download.docx'}"`);
      res.status(HttpStatus.Ok).end(fileBuffer, 'binary');
    };

    res.sendPdf = (fileName, fileBuffer) => {
      res.setHeader('Content-Disposition', `attachment; filename="${fileName || 'download.pdf'}"`);
      res.setHeader('Content-Type', 'application/pdf');
      res.status(HttpStatus.Ok).end(fileBuffer, 'binary');
    };

    res.sendReportPdf = (fileBuffer) => {
      const today = (new Date()).toISOString().replace(/^(\d{4})\-(\d{2})\-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})\.(\d{3})Z$/, '$1$2$3$4$5$6');
      const fileName = `Report_${today}.pdf`;
      res.sendPdf(fileName, fileBuffer);
    };

    next();
  }
}

module.exports = AddOns;