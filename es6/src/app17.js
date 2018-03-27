
requirejs.config({
  paths: {
    ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
  },
});

require(['ramda', 'jquery'], ({ compose, curry, map, prop }, $) => {
  const trace = curry((log, value) => {
    console.log(log, value);
    return value;
  });

    // const prop = curry((propertyName, obj) => obj[propertyName]);

  const mediaUrl = compose(prop('m'), prop('media'));

    // const srcs = compose(map(mediaUrl), prop('items'));
    // img :: String -> Object
  const img = url => $('<img />', { src: url });

    // const images = compose(map(img), srcs);
  const images = compose(map(compose(img, mediaUrl)), prop('items'));

  const Impure = {
    getJSON: curry((callback, url) => {
      $.getJSON(url, callback);
    }),

    setHtml: curry((sel, html) => {
      $(sel).html(html);
    }),
  };

  const url = function (term) {
    return `https://api.flickr.com/services/feeds/photos_public.gne?tags=${term}&format=json&jsoncallback=?`;
  };

  const renderImages = compose(Impure.setHtml('#container'), images);

  const app = compose(Impure.getJSON(renderImages), url);

  app('cats');
});

// const { compose, curry } = require('ramda');
// const $ = require('jquery');

