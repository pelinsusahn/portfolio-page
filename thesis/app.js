(function () {
  const frame = document.querySelector(".scene-frame");
  const sceneContent = document.querySelector(".scene-content");
  const image = document.querySelector(".scene-image");
  const hotspots = Array.from(document.querySelectorAll(".hotspot"));
  const viewerOverlay = document.getElementById("viewer-overlay");
  const viewerFrame = document.getElementById("viewer-frame");
  const viewerClose = document.getElementById("viewer-close");
  const questionCopy = document.getElementById("question-copy");
  let isTransitioning = false;
  let activeHotspot = null;

  if (!frame || !sceneContent || !image || !hotspots.length || !viewerOverlay || !viewerFrame || !viewerClose) {
    return;
  }

  function layoutHotspots() {
    const frameWidth = frame.clientWidth;
    const frameHeight = frame.clientHeight;
    const imageWidth = image.naturalWidth || 1916;
    const imageHeight = image.naturalHeight || 821;
    const scale = Math.max(frameWidth / imageWidth, frameHeight / imageHeight);
    const drawnWidth = imageWidth * scale;
    const drawnHeight = imageHeight * scale;
    const offsetX = (frameWidth - drawnWidth) / 2;
    const offsetY = (frameHeight - drawnHeight) / 2;

    hotspots.forEach(function (hotspot) {
      const x = Number(hotspot.dataset.x || 50) / 100;
      const y = Number(hotspot.dataset.y || 50) / 100;
      const size = Number(hotspot.dataset.size || 10) / 100;

      hotspot.style.setProperty("--left-px", `${offsetX + (drawnWidth * x)}px`);
      hotspot.style.setProperty("--top-px", `${offsetY + (drawnHeight * y)}px`);
      const minimumSize = window.innerWidth <= 560 ? 52 : window.innerWidth <= 820 ? 46 : 0;
      hotspot.style.setProperty("--size-px", `${Math.max(drawnWidth * size, minimumSize)}px`);
    });
  }

  function wireQuestionReveal() {
    if (!questionCopy) {
      return;
    }

    const reveal = function () {
      questionCopy.classList.add("is-visible");
    };

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.35
    });

    observer.observe(questionCopy);
  }

  if (image.complete) {
    layoutHotspots();
  } else {
    image.addEventListener("load", layoutHotspots, { once: true });
  }

  window.addEventListener("resize", layoutHotspots);
  wireQuestionReveal();

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("click", function () {
      const href = hotspot.dataset.href;
      if (isTransitioning) {
        return;
      }

      hotspots.forEach(function (node) {
        node.classList.remove("is-active");
      });

      hotspot.classList.add("is-active");

      if (href) {
        startTransition(hotspot, href);
      }
    });
  });

  function startTransition(hotspot, href) {
    isTransitioning = true;

    const zoom = Number(hotspot.dataset.zoom || 2.4);
    const centerX = frame.clientWidth / 2;
    const centerY = frame.clientHeight / 2;
    const hotspotX = parseFloat(hotspot.style.getPropertyValue("--left-px")) || (frame.clientWidth / 2);
    const hotspotY = parseFloat(hotspot.style.getPropertyValue("--top-px")) || (frame.clientHeight / 2);
    const panX = centerX - (hotspotX * zoom);
    const panY = centerY - (hotspotY * zoom);

    frame.style.setProperty("--pan-x", `${panX}px`);
    frame.style.setProperty("--pan-y", `${panY}px`);
    frame.style.setProperty("--zoom", `${zoom}`);

    window.requestAnimationFrame(function () {
      frame.classList.add("is-transitioning");
    });

    window.setTimeout(function () {
      openViewer(hotspot, href);
    }, 640);
  }

  function openViewer(hotspot, href) {
    activeHotspot = hotspot;
    const ratio = hotspot.dataset.viewRatio || "16 / 10";
    const ratioNumber = hotspot.dataset.viewRatioNumber || "1.6";
    frame.style.setProperty("--viewer-ratio", ratio);
    frame.style.setProperty("--viewer-ratio-number", ratioNumber);
    viewerFrame.title = `${hotspot.getAttribute("aria-label") || "Adaptive Topologies"} viewer`;
    viewerFrame.src = href;
    viewerOverlay.setAttribute("aria-hidden", "false");
    viewerOverlay.classList.add("is-open");
    isTransitioning = false;
  }

  function closeViewer() {
    viewerOverlay.classList.remove("is-open");
    viewerOverlay.setAttribute("aria-hidden", "true");
    frame.classList.remove("is-transitioning");
    frame.style.setProperty("--pan-x", "0px");
    frame.style.setProperty("--pan-y", "0px");
    frame.style.setProperty("--zoom", "1");
    frame.style.setProperty("--viewer-ratio", "16 / 10");
    frame.style.setProperty("--viewer-ratio-number", "1.6");
    isTransitioning = false;

    window.setTimeout(function () {
      viewerFrame.src = "";
    }, 220);

    if (activeHotspot) {
      activeHotspot.focus({ preventScroll: true });
    }
  }

  viewerClose.addEventListener("click", closeViewer);

  viewerOverlay.addEventListener("click", function (event) {
    if (event.target instanceof HTMLElement && event.target.dataset.close === "viewer") {
      closeViewer();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && viewerOverlay.classList.contains("is-open")) {
      closeViewer();
    }
  });
})();
