(function () {
  var paperReturn = document.querySelector('[data-paper-return]');

  if (paperReturn) {
    var source = new URLSearchParams(window.location.search).get('from');
    if (source === 'portfolio') {
      paperReturn.hidden = false;
    }
  }

  document.addEventListener('click', function (event) {
    var player = event.target.closest('[data-youtube-id]');
    if (!player) return;

    event.preventDefault();

    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(player.dataset.youtubeId) + '?autoplay=1';
    iframe.title = player.dataset.youtubeTitle;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;

    player.replaceWith(iframe);
    iframe.focus();
  });
})();
