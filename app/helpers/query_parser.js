
const aqp = require('api-query-params');

class QueryParser {

  static parse(query) {

    let nPage = parseInt(query.page);
    let nPerPage = parseInt(query.per_page);

    if (isNaN(nPage) || nPage < 1) nPage = 1;
    if (isNaN(nPerPage)) nPerPage = 20;

    if (nPerPage < 1) {
      nPerPage = 1;
    }

    query.skip = (nPage - 1) * nPerPage;
    query.limit = nPerPage;

    delete query['page'];
    delete query['per_page'];
  
    return aqp(query);
  }

  static middleware(req, res, next) {
    try { req.mongoQuery = QueryParser.parse(req.query); }
    catch (ex) {}
    next();
  }
}

module.exports = QueryParser;