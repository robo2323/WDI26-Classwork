// const videoLinks = d.getEl('a');
// my dom library
// for (let i = 0; i < videoLinks.length; i++) {
//   const href = d.getAtr(videoLinks[i], 'href');
//   const thumbUrl = youtube.generateThumbnailUrl(href);
//   const img = d.create('img');

//   d.setAtr(img, 'src', thumbUrl);
//   videoLinks[i].appendChild(img);
// }

// umbrella

// const vidLinks = u('a');

// vidLinks.each((node,i) => {
//   u(node).prepend(
//     `<img src=
//         '${youtube.generateThumbnailUrl(u(node).attr('href'))}'>`
//   );
// });

//zepto
/*global $ */

$('a').each(function() {
  const thumbUrl = youtube.generateThumbnailUrl($(this).attr('href'));
  $(this)
    .prepend(`<img src="${thumbUrl}">`)
    .on('click', function(e) {
      e.preventDefault();
      const embedUrl = youtube.generateEmbedUrl($(this).attr('href'));
      $('#player').animate({ opacity: 0 }, 500, 'ease-out', function() {
        $(this).animate({ opacity: 1 }, 1000, 'ease-out', function() {
          $(this).html(
            `<iframe width='560' height='315' src='${embedUrl}' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
          );
        });
      });
    });
});

// var elem = document.querySelector('.pulse');
// var animation = elem.animate({
//   opacity: [0.5, 1],
//   transform: ['scale(0.5)', 'scale(1)'],
// }, {
//   direction: 'alternate',
//   duration: 1000,
//   iterations: Infinity,
// });

//nodelist + umbrella

// const vidLinks = $$('a');

// vidLinks.forEach((element, i) => {
//   u(element)
//     .prepend(
//       `<img src='${youtube.generateThumbnailUrl(vidLinks.get('href')[i])}'>`
//     )
//     .on('click', function(e) {
//       e.preventDefault();

//       const player = u($$('#player')[0]);
//       const embedUrl = youtube.generateEmbedUrl(vidLinks.get('href')[i]);

//       player.html(
//         `<iframe width='560' height='315' src='${embedUrl}' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
//       );
//     });
// });
