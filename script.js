/* Omar & Ghada: static GitHub Pages wedding invitation. */
(() => {
  'use strict';

  const overlay = document.getElementById('openingScreen');
  const openButton = document.getElementById('openInvitation');
  const openCta = document.getElementById('openCta');
  const music = document.getElementById('weddingMusic');
  const musicToggle = document.getElementById('musicToggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let hasOpened = false;

  function finishOpening() {
    document.body.classList.remove('invite-locked');
    overlay.classList.add('is-leaving');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.inert = true;
  }

  function openInvitation() {
    if (hasOpened) return;
    hasOpened = true;
    // This runs FIRST and directly inside the same trusted user click. We do not
    // wait for the envelope animation or any async media-loading operation.
    startWeddingMusic();
    overlay.classList.add('is-opening');
    openButton.disabled = true;
    openCta.disabled = true;
    window.setTimeout(finishOpening, reducedMotion ? 100 : 1650);
  }

  openButton.addEventListener('click', openInvitation);
  openCta.addEventListener('click', openInvitation);
  // Always show the envelope on each fresh visit/reload. This ensures the
  // sound starts only after the guest deliberately opens the invitation.

  // Thursday 19 November 2026, 7:00 PM in Egypt (Africa/Cairo is UTC+02 in November).
  const weddingDate = new Date('2026-11-19T19:00:00+02:00').getTime();
  const units = ['days', 'hours', 'minutes', 'seconds'];
  const fields = Object.fromEntries(units.map((id) => [id, document.getElementById(id)]));
  const completeMessage = document.getElementById('countdownComplete');

  function updateCountdown() {
    const delta = Math.max(0, weddingDate - Date.now());
    const values = {
      days: Math.floor(delta / 86400000),
      hours: Math.floor((delta % 86400000) / 3600000),
      minutes: Math.floor((delta % 3600000) / 60000),
      seconds: Math.floor((delta % 60000) / 1000),
    };
    for (const id of units) {
      fields[id].textContent = String(values[id]).padStart(2, '0');
    }
    if (delta === 0) {
      completeMessage.hidden = false;
      window.clearInterval(countdownInterval);
    }
  }
  const countdownInterval = window.setInterval(updateCountdown, 1000);
  updateCountdown();

  // The guest opening the envelope is the user gesture that starts the song.
  // Keep the floating control available to pause/resume at any time.
  function setMusicState(playing) {
    musicToggle.classList.toggle('is-playing', playing);
    musicToggle.setAttribute('aria-pressed', String(playing));
    musicToggle.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
    musicToggle.title = playing ? 'Pause wedding music' : 'Play wedding music';
    musicToggle.querySelector('.music-label').textContent = playing ? 'MUSIC ON' : 'MUSIC OFF';
  }

  // Preload while the guest sees the envelope, so sound can begin quickly.
  // Some mobile browsers ignore preload until interaction; the click still
  // directly invokes play() and is never delayed behind a Promise or timer.
  music.preload = 'auto';
  music.volume = 0.7;
  if (music.networkState === HTMLMediaElement.NETWORK_EMPTY) music.load();

  function startWeddingMusic() {
    try {
      // Do not seek to time 0 before the first play: on phones where the MP3
      // has not loaded yet, seeking can fail or postpone sound unnecessarily.
      const attempt = music.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch((error) => {
          setMusicState(false);
          musicToggle.querySelector('.music-label').textContent = 'TAP TO PLAY';
          console.warn('Audio playback was blocked or could not load:', error);
        });
      }
    } catch (error) {
      setMusicState(false);
      musicToggle.querySelector('.music-label').textContent = 'TAP TO PLAY';
      console.warn('Unable to start wedding music:', error);
    }
  }

  musicToggle.addEventListener('click', () => {
    if (music.paused) startWeddingMusic();
    else music.pause();
  });
  music.addEventListener('play', () => setMusicState(true));
  music.addEventListener('pause', () => setMusicState(false));
  music.addEventListener('ended', () => setMusicState(false));
  music.addEventListener('error', () => {
    setMusicState(false);
    musicToggle.querySelector('.music-label').textContent = 'AUDIO ERROR';
  });

  // The gallery opens a larger preview on click or keyboard activation.
  const galleryDialog = document.getElementById('galleryDialog');
  const galleryPreview = document.getElementById('galleryPreview');
  const galleryCaption = document.getElementById('galleryCaption');
  document.querySelectorAll('.gallery-item').forEach((item) => {
    item.querySelector('.gallery-view').addEventListener('click', () => {
      const picture = item.querySelector('img');
      galleryPreview.src = picture.src;
      galleryPreview.alt = picture.alt;
      galleryCaption.textContent = item.querySelector('figcaption').textContent.trim().replace(/^\d+\s*/, '');
      if (typeof galleryDialog.showModal === 'function') galleryDialog.showModal();
    });
  });
  document.getElementById('galleryClose').addEventListener('click', () => galleryDialog.close());
  galleryDialog.addEventListener('click', (event) => {
    if (event.target === galleryDialog) galleryDialog.close();
  });

  // Subtle scroll-in movement. Content stays visible without IntersectionObserver.
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
  }
})();
