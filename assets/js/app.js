(function () {
  const body = document.body;
  const chapter = body.dataset.chapter || "home";

  // --- Navigation & sidebar ---
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebarMenu = document.querySelector(".sidebar-menu");

  if (sidebarToggle && sidebarMenu) {
    sidebarToggle.addEventListener("click", () => {
      sidebarMenu.classList.toggle("open");
    });
  }

  const submenuButtons = document.querySelectorAll(".submenu-toggle");
  submenuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const ul = btn.nextElementSibling;
      if (ul) ul.classList.toggle("open");
    });
  });

  // --- Floating buttons ---
  const btnTop = document.getElementById("btn-top");
  const btnBack = document.getElementById("btn-back");

  if (btnTop) {
    btnTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", () => {
      btnTop.style.opacity = window.scrollY > 150 ? "1" : "0.4";
    });
  }

  if (btnBack) {
    btnBack.addEventListener("click", () => history.back());
  }

  // --- Flashcards with weighted selection & clickable history ---
  function initFlashcards() {
    const qEl = document.getElementById("flashcard-question");
    const aEl = document.getElementById("flashcard-answer");
    const showBtn = document.getElementById("btn-show-answer");
    const bucketNon = document.getElementById("bucket-non");
    const bucketConfus = document.getElementById("bucket-confus");
    const bucketMaitrise = document.getElementById("bucket-maitrise");
    const bucketButtons = document.querySelectorAll(".flashcard-actions button[data-bucket]");

    if (!qEl || !aEl || !showBtn || !bucketNon || !bucketConfus || !bucketMaitrise) return;
    if (!flashcardData || !flashcardData[chapter]) return;

    let cards = flashcardData[chapter].map((c, index) => ({
      id: c.id ?? index,
      name: c.name ?? `F${index + 1}`,
      question: c.question,
      answer: c.answer,
      status: "new"
    }));

    let currentCard = null;

    function getWeight(card) {
      switch (card.status) {
        case "non": return 6;
        case "confus": return 4;
        case "maitrise": return 1;
        case "new":
        default: return 5;
      }
    }

    function pickRandomCardWeighted() {
      const available = cards;
      if (available.length === 0) {
        qEl.textContent = "Aucune carte disponible.";
        aEl.textContent = "";
        aEl.classList.add("hidden");
        return;
      }
      let total = 0;
      const weights = available.map(card => {
        const w = getWeight(card);
        total += w;
        return w;
      });
      let r = Math.random() * total;
      let chosenIndex = 0;
      for (let i = 0; i < available.length; i++) {
        r -= weights[i];
        if (r <= 0) {
          chosenIndex = i;
          break;
        }
      }
      currentCard = available[chosenIndex];
      displayCurrentCard(false);
    }

    function displayCurrentCard(showAnswer) {
      if (!currentCard) return;
      qEl.textContent = `[${currentCard.name}] ${currentCard.question}`;
      aEl.textContent = currentCard.answer;
      if (showAnswer) aEl.classList.remove("hidden");
      else aEl.classList.add("hidden");
    }

    function renderBuckets() {
      bucketNon.innerHTML = "";
      bucketConfus.innerHTML = "";
      bucketMaitrise.innerHTML = "";

      cards.forEach(card => {
        if (card.status === "non" || card.status === "confus" || card.status === "maitrise") {
          const li = document.createElement("li");
          li.textContent = card.name;
          li.dataset.cardId = String(card.id);
          if (card.status === "non") bucketNon.appendChild(li);
          if (card.status === "confus") bucketConfus.appendChild(li);
          if (card.status === "maitrise") bucketMaitrise.appendChild(li);
        }
      });
    }

    function bucketClickHandler(event) {
      const li = event.target.closest("li");
      if (!li || !li.dataset.cardId) return;
      const id = li.dataset.cardId;
      const found = cards.find(c => String(c.id) === id);
      if (found) {
        currentCard = found;
        displayCurrentCard(false);
      }
    }

    bucketNon.addEventListener("click", bucketClickHandler);
    bucketConfus.addEventListener("click", bucketClickHandler);
    bucketMaitrise.addEventListener("click", bucketClickHandler);

    showBtn.addEventListener("click", () => {
      aEl.classList.remove("hidden");
    });

    bucketButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (!currentCard) return;
        const bucket = btn.dataset.bucket;
        currentCard.status = bucket;
        renderBuckets();
        pickRandomCardWeighted();
      });
    });

    pickRandomCardWeighted();
  }

  // --- Quiz with randomised answer positions ---
  function initQuiz() {
    const qEl = document.getElementById("quiz-question");
    const optionsEl = document.getElementById("quiz-options");
    const nextBtn = document.getElementById("quiz-next");
    const progressEl = document.getElementById("quiz-progress");
    const feedbackContainer = document.getElementById("quiz-feedback");
    const feedbackMsg = document.getElementById("feedback-message");

    if (!qEl || !optionsEl || !nextBtn || !progressEl || !feedbackContainer || !feedbackMsg) return;
    if (!quizQuestions || !quizQuestions.length) return;

    const questions = [...quizQuestions];
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    let currentIndex = 0;
    let score = 0;
    let answered = false;

    function renderQuestion() {
      answered = false;
      feedbackMsg.textContent = "";
      feedbackContainer.classList.remove("animate-correct", "animate-wrong");
      nextBtn.disabled = true;

      const q = questions[currentIndex];
      qEl.textContent = q.question;
      optionsEl.innerHTML = "";

      const indices = q.options.map((_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      indices.forEach((originalIndex) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = q.options[originalIndex];
        btn.className = "quiz-option-btn";
        btn.dataset.optionIndex = String(originalIndex);
        btn.addEventListener("click", () => handleAnswer(btn, originalIndex, q));
        li.appendChild(btn);
        optionsEl.appendChild(li);
      });

      progressEl.textContent = `Question ${currentIndex + 1} / ${questions.length} – Score : ${score}`;
    }

    function handleAnswer(btnClicked, selectedIndex, q) {
      if (answered) return;
      answered = true;

      const allButtons = optionsEl.querySelectorAll(".quiz-option-btn");
      allButtons.forEach(b => (b.disabled = true));

      const correctText = q.options[q.answer] ?? "";

      if (selectedIndex === q.answer) {
        score += 1;
        btnClicked.classList.add("correct");
        feedbackMsg.textContent = `Bravo, en effet la bonne réponse est : "${correctText}".`;
        feedbackContainer.classList.add("animate-correct");
      } else {
        btnClicked.classList.add("incorrect");
        allButtons.forEach(b => {
          if (Number(b.dataset.optionIndex) === q.answer) {
            b.classList.add("correct");
          }
        });
        feedbackMsg.textContent = `Dommage, en effet la bonne réponse était : "${correctText}".`;
        feedbackContainer.classList.add("animate-wrong");
      }

      progressEl.textContent = `Question ${currentIndex + 1} / ${questions.length} – Score : ${score}`;
      nextBtn.disabled = false;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex += 1;
      if (currentIndex >= questions.length) {
        qEl.textContent = "Quiz terminé 🎉";
        optionsEl.innerHTML = "";
        progressEl.textContent = `Score final : ${score} / ${questions.length}`;
        feedbackMsg.textContent = score >= questions.length * 0.7
          ? "Très bon résultat, tu maîtrises bien le cours !"
          : "Continue à réviser, tu peux facilement progresser 🙂";
        feedbackContainer.classList.remove("animate-correct", "animate-wrong");
        nextBtn.disabled = true;
        return;
      }
      renderQuestion();
    });

    renderQuestion();
  }

  // --- Image zoom lens (local zoom under cursor) ---
  function initImageLens() {
    const containers = document.querySelectorAll(".zoom-lens-container");
    if (!containers.length) return;

    containers.forEach(container => {
      const img = container.querySelector("img.zoom-lens-image");
      if (!img) return;

      const lens = document.createElement("div");
      lens.className = "zoom-lens";
      container.appendChild(lens);

      const zoom = Number(img.dataset.zoom) || 2;

      function updateBackgroundSize() {
        const rect = img.getBoundingClientRect();
        lens.style.backgroundImage = `url(${img.src})`;
        lens.style.backgroundRepeat = "no-repeat";
        lens.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
      }

      updateBackgroundSize();
      window.addEventListener("resize", updateBackgroundSize);

      function move(e) {
        const rect = img.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const lw = lens.offsetWidth || 140;
        const lh = lens.offsetHeight || 140;

        if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
          lens.style.opacity = "0";
          return;
        }

        lens.style.opacity = "1";

        let lx = x - lw / 2;
        let ly = y - lh / 2;
        if (lx < 0) lx = 0;
        if (ly < 0) ly = 0;
        if (lx > rect.width - lw) lx = rect.width - lw;
        if (ly > rect.height - lh) ly = rect.height - lh;

        lens.style.left = `${lx}px`;
        lens.style.top = `${ly}px`;

        const bgX = -((x * zoom) - lw / 2);
        const bgY = -((y * zoom) - lh / 2);
        lens.style.backgroundPosition = `${bgX}px ${bgY}px`;
      }

      container.addEventListener("mousemove", move);
      container.addEventListener("touchmove", move);
      container.addEventListener("mouseleave", () => {
        lens.style.opacity = "0";
      });
    });
  }

  // --- Init depending on page ---
  if (chapter === "chap1" || chapter === "chap2" || chapter === "chap3") {
    initFlashcards();
  }
  if (chapter === "quiz") {
    initQuiz();
  }
  initImageLens();
})();