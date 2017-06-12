// Generated by CoffeeScript 2.0.0-beta2
(function() {
  var Kraken, KrakenPrivate, KrakenPublic;

  KrakenPublic = require('./local/KrakenPublic');

  KrakenPrivate = require('./local/KrakenPrivate');

  Kraken = class Kraken {
    constructor(api_key, private_key) {
      this.api_key = api_key;
      this.private_key = private_key;
    }


    /*
     *
     * Public market data
     *
     */

    time() {
      var krak;
      krak = new KrakenPublic('Time');
      return krak.api().then(function(response) {
        return response.result;
      });
    }

    assets(...assets) {
      var krak;
      if (Array.isArray(assets[0])) {
        assets = assets[0];
      }
      assets = assets.join(',');
      krak = new KrakenPublic('Assets', {
        asset: assets
      });
      return krak.api().then(function(response) {
        return response.result;
      });
    }

    assetPairs(...pairs) {
      var krak;
      if (Array.isArray(pairs[0])) {
        pairs = pairs[0];
      }
      pairs = pairs.join(',');
      krak = new KrakenPublic('AssetPairs', {
        pair: pairs
      });
      return krak.api().then(function(response) {
        return response.pair().result;
      });
    }

    ticker(...pairs) {
      var krak;
      if (Array.isArray(pairs[0])) {
        pairs = pairs[0];
      }
      pairs = pairs.join(',');
      krak = new KrakenPublic('Ticker', {
        pair: pairs
      });
      return krak.api().then(function(response) {
        return response.pair().result;
      });
    }

    ohlc(pair, interval, last) {
      var krak, options;
      options = {
        pair: pair
      };
      if (interval) {
        options.interval = interval;
      }
      if (last) {
        options.last = last;
      }
      krak = new KrakenPublic('OHLC', options);
      return krak.api().then(function(response) {
        return response.pair().result;
      });
    }

    depth(pair, count) {
      var krak, options;
      options = {
        pair: pair
      };
      if (count) {
        options.count = count;
      }
      krak = new KrakenPublic('Depth', options);
      return krak.api().then(function(response) {
        return response.pair().result;
      });
    }

    trades(pair, since) {
      var krak, options;
      options = {
        pair: pair
      };
      if (since) {
        options.since = since;
      }
      krak = new KrakenPublic('Trades', options);
      return krak.api().then(function(response) {
        return response.pair().result;
      });
    }

    spread(pair, since) {
      var krak, options;
      options = {
        pair: pair
      };
      if (since) {
        options.since = since;
      }
      krak = new KrakenPublic('Spread', options);
      return krak.api().then(function(response) {
        return response.pair().result;
      });
    }


    /*
     *
     * Private user data
     *
     */

    balance() {
      var krak;
      krak = new KrakenPrivate('Balance', this.api_key, this.private_key);
      return krak.api().then(function(response) {
        return response.float().currency().result;
      });
    }

    tradeBalance(currency, aclass) {
      var krak, params;
      params = {};
      if (aclass) {
        params.aclass = aclass;
      }
      if (currency) {
        params.asset = currency;
      }
      krak = new KrakenPrivate('TradeBalance', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.float().result;
      });
    }

    openOrders(trades, userref) {
      var krak, params;
      params = {};
      if (trades != null) {
        params.trades = trades;
      }
      if (userref) {
        params.userref = userref;
      }
      krak = new KrakenPrivate('OpenOrders', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.result;
      });
    }

    closedOrders(trades, userref, start, end, ofs, closetime) {
      var krak, params;
      params = {};
      if (trades != null) {
        params.trades = trades;
      }
      if (userref) {
        params.userref = userref;
      }
      if (start) {
        params.start = start;
      }
      if (end) {
        params.end = end;
      }
      if (ofs) {
        params.ofs = ofs;
      }
      if (closetime) {
        params.closetime = closetime;
      }
      krak = new KrakenPrivate('ClosedOrders', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.result;
      });
    }

    queryOrders(txids, trades, userref) {
      var krak, params;
      if (!Array.isArray(txids)) {
        txids = [txids];
      }
      params = {
        txid: txids.join(',')
      };
      if (trades != null) {
        params.trades = trades;
      }
      if (userref) {
        params.userref = userref;
      }
      krak = new KrakenPrivate('QueryOrders', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.result;
      });
    }

    tradesHistory(type, trades, start, end, ofs) {
      var krak, params;
      params = {};
      if (type != null) {
        params.type = type;
      }
      if (trades != null) {
        params.trades = trades;
      }
      if (start) {
        params.start = start;
      }
      if (end) {
        params.end = end;
      }
      if (ofs) {
        params.ofs = ofs;
      }
      krak = new KrakenPrivate('TradesHistory', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.result;
      });
    }

    queryTrades(txids, trades) {
      var krak, params;
      if (!Array.isArray(txids)) {
        txids = [txids];
      }
      params = {
        txid: txids.join(',')
      };
      if (trades != null) {
        params.trades = trades;
      }
      krak = new KrakenPrivate('QueryTrades', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.result;
      });
    }

    openPositions(docalcs, txids) {
      var krak, params;
      params = {};
      if (txids != null) {
        if (!Array.isArray(txids)) {
          txids = [txids];
        }
        params.txid = txids.join(',');
      }
      if (docalcs != null) {
        params.docalcs = docalcs;
      }
      krak = new KrakenPrivate('OpenPositions', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.result;
      });
    }

    profitLoss() {
      return this.openPositions(true).then((result) => {
        var currency, item, key, profits;
        profits = {};
        for (key in result) {
          item = result[key];
          currency = item.pair.substr(-4).replace(/^[XZ]/, '');
          if (profits[currency] == null) {
            profits[currency] = 0;
          }
          profits[currency] += parseFloat(item.net);
        }
        return profits;
      });
    }

    ledgers(assets, type, start, end, ofs, aclass) {
      var krak, params;
      params = {};
      if (assets != null) {
        if (!Array.isArray(assets)) {
          assets = [assets];
        }
        params.asset = assets.join(',');
      }
      if (type) {
        params.type = type;
      }
      if (start) {
        params.start = start;
      }
      if (end) {
        params.end = end;
      }
      if (ofs) {
        params.ofs = ofs;
      }
      if (aclass) {
        params.aclass = aclass;
      }
      krak = new KrakenPrivate('Ledgers', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.result;
      });
    }

    queryLedgers(...ids) {
      var krak, params;
      if (Array.isArray(ids[0])) {
        ids = ids[0];
      }
      params = {
        id: ids.join(',')
      };
      krak = new KrakenPrivate('QueryLedgers', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.result;
      });
    }

    tradeVolume(...pairs) {
      var krak, params;
      params = {
        'fee-info': true
      };
      if (Array.isArray(pairs[0])) {
        pairs = pairs[0];
      }
      if (pairs.length > 0) {
        params.pair = pairs.join(',');
      }
      krak = new KrakenPrivate('TradeVolume', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.result;
      });
    }


    /*
     *
     * Private user trading
     *
     */

    addOrder(pair, type, ordertype, volume, price, price2, leverage, oflags, starttm, expiretm, userref, valdate, closetype, closeprice, closeprice2) {
      var krak, params;
      if (pair === Object(pair)) {
        params = pair;
      } else {
        params = {pair, type, ordertype, volume};
        if (price != null) {
          params.price = price;
        }
        if (price2 != null) {
          params.price2 = price2;
        }
        if (leverage != null) {
          params.leverage = leverage;
        }
        params.oflags = Array.isArray(oflags) ? oflags.join(',') : oflags;
        if (starttm != null) {
          params.starttm = starttm;
        }
        if (expiretm != null) {
          params.expiretm = expiretm;
        }
        if (userref != null) {
          params.userref = userref;
        }
        if (typeof validate !== "undefined" && validate !== null) {
          params.validate = validate;
        }
        if (closetype != null) {
          params['close[ordertype]'] = closetype;
          params['close[price]'] = closeprice;
          if (closeprice2 != null) {
            params['close[price2]'] = closeprice2;
          }
        }
      }
      krak = new KrakenPrivate('AddOrder', this.api_key, this.private_key, params);
      return krak.api().then((response) => {
        return response.result;
      });
    }

    cancelOrder(txid) {
      var krak;
      krak = new KrakenPrivate('AddOrder', this.api_key, this.private_key, {
        txid: txid
      });
      return krak.api().then((response) => {
        return response.result;
      });
    }

  };

  module.exports = Kraken;

}).call(this);
