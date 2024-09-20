const citations = [
    "J'ai vu tant de choses que vous, humains, ne pourriez pas croire.",
    "Les larmes se perdront dans la pluie.",
    "Tous ces moments se perdront dans le temps, comme des larmes dans la pluie.",
    "C'est dommage qu'elle doive vivre, mais tout le monde doit mourir un jour.",
    "La lumière qui brûle deux fois plus fort brûle deux fois moins longtemps.",
    "Je ne savais pas combien de temps nous avions ensemble. Qui le sait jamais ?"
  ];
  
  function getRandomCitation() {
    const randomIndex = Math.floor(Math.random() * citations.length);
    return citations[randomIndex];
  }
  
  document.getElementById('reboot-button').addEventListener('click', function() {
    document.getElementById('jumbotron-text-1').textContent = getRandomCitation();
    document.getElementById('jumbotron-text-2').textContent = getRandomCitation();
    document.getElementById('jumbotron-text-3').textContent = getRandomCitation();
    document.getElementById('jumbotron-text-4').textContent = getRandomCitation();
  });
  
  const jumbotronContent = {
    1: {
      title: "Bienvenue sur la page 1",
      text1: "Voici le contenu initial du jumbotron pour la première page.",
      text2: "Ce texte changera en fonction de la page sélectionnée."
    },
    2: {
      title: "Bienvenue sur la page 2",
      text1: "Ceci est le contenu pour la deuxième page du jumbotron.",
      text2: "Chaque page affiche un texte différent pour montrer la pagination."
    },
    3: {
      title: "Bienvenue sur la page 3",
      text1: "Voici le contenu de la troisième page du jumbotron.",
      text2: "Utilisez les boutons de pagination pour explorer chaque page."
    }
  };
  
  function updateJumbotron(page) {
    const content = jumbotronContent[page];
    document.querySelector('.jumbotron h1').textContent = content.title;
    document.querySelectorAll('.lead')[0].textContent = content.text1;
    document.querySelectorAll('.lead')[1].textContent = content.text2;
    document.querySelectorAll('.lead')[2].textContent = content.text2;
  }
  
  document.querySelectorAll('.page-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const page = this.getAttribute('data-page');
      updateJumbotron(page);
    });
  });
  
  let progress = 75;
  const $progressBar = $('.progress-bar');
  
  $('.bi-arrow-bar-left').click(function() {
    if (progress > 0) {
      progress -= 5;
      $progressBar.css('width', `${progress}%`).attr('aria-valuenow', progress);
    }
  });
  
  $('.bi-arrow-bar-right').click(function() {
    if (progress < 100) {
      progress += 5;
      $progressBar.css('width', `${progress}%`).attr('aria-valuenow', progress);
    }
  });
  
  let keySequence = [];
  const validSequence = ['d', 'g', 'c'];
  
  $(document).on('keydown', function(e) {
    keySequence.push(e.key.toLowerCase());
    if (keySequence.slice(-3).join('') === validSequence.join('')) {
      $('#recapModal').modal('show');
      keySequence = [];
    }
  });
  
  $('#form-submit').click(function(e) {
    e.preventDefault();
    const email = $('input[placeholder="Login"]').val();
    const password = $('input[placeholder="Mot de passe"]').val();
  
    if (!email && !password) {
      const colors = ['text-primary', 'text-success', 'text-danger', 'text-warning', 'text-info'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
      $('.spinner-border').removeClass('text-primary text-success text-danger text-warning text-info').addClass(randomColor);
    }
  });
  