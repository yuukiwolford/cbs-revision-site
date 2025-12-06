// Données des flashcards et du quiz
// Contenu basé sur les chapitres des PDF fournis :
// - Analyse-Structurelle-1-VF (dessin industriel)
// - Analyse-Structurelle-2 & Récapitulatif liaisons mécaniques usuelles (liaisons & schéma cinématique)
// - Analyse-Structurelle-3, Synthèse transmission et transformation de mouvement (engrenages & transmissions)

const flashcardData = {
  // Chapitre 1 : dessin industriel
  chap1: [
    {
      name: "C1-F1",
      question: "Cite les trois grandes familles de dessins techniques utilisées dans le cours.",
      answer: "Schémas (symboles), dessins d’ensemble, dessins de définition (dessins de pièce)."
    },
    {
      name: "C1-F2",
      question: "À quoi sert un dessin d’ensemble selon le cours ?",
      answer: "À représenter un mécanisme complet, montrer les liaisons entre pièces et le fonctionnement global."
    },
    {
      name: "C1-F3",
      question: "Définis un dessin de définition.",
      answer: "Dessin qui définit complètement une pièce : géométrie, cotes, tolérances, rugosité, matière, etc."
    },
    {
      name: "C1-F4",
      question: "Donne la formule de l’échelle utilisée en dessin industriel.",
      answer: "Échelle = dimension dessinée / dimension réelle."
    },
    {
      name: "C1-F5",
      question: "Donne un exemple d’échelle de réduction et un d’agrandissement vus en cours.",
      answer: "Réduction : 1:2, 1:5, 1:10… Agrandissement : 2:1, 5:1, 10:1…"
    },
    {
      name: "C1-F6",
      question: "Quel est le rapport longueur/largeur des formats de la série A (A0, A1, A2, …) ?",
      answer: "L/ℓ = √2 pour tous les formats A."
    },
    {
      name: "C1-F7",
      question: "Que trouve-t-on dans le cartouche normalisé d’un dessin ?",
      answer: "Titre, échelle, format, symbole de projection, nom du dessinateur, date, n° de plan, révision, etc."
    },
    {
      name: "C1-F8",
      question: "À quoi sert la nomenclature associée à un dessin d’ensemble ?",
      answer: "À lister toutes les pièces (repère, désignation, quantité, matière, norme, etc.)."
    },
    {
      name: "C1-F9",
      question: "Pourquoi dit-on qu’une seule vue ne suffit pas à représenter une pièce ?",
      answer: "Parce qu’une seule vue ne montre pas tous les détails géométriques, il faut plusieurs projections normales."
    },
    {
      name: "C1-F10",
      question: "Quel type de trait est utilisé pour indiquer les axes de symétrie ?",
      answer: "Un trait mixte fin (tirés-points)."
    },
    {
      name: "C1-F11",
      question: "Dans quelles phases du cycle de vie produit utilise-t-on surtout les croquis et schémas ?",
      answer: "En avant-projet / étude préliminaire pour explorer des solutions rapidement."
    },
    {
      name: "C1-F12",
      question: "Pourquoi les coupes et sections sont-elles utilisées dans le dessin industriel ?",
      answer: "Pour rendre visibles les formes intérieures et clarifier l’usinage ou le montage."
    }
  ],

  // Chapitre 2 : liaisons et schéma cinématique
  chap2: [
    {
      name: "C2-F1",
      question: "Combien de degrés de liberté possède un solide libre dans l’espace ?",
      answer: "6 DDL : 3 translations (TX, TY, TZ) et 3 rotations (RX, RY, RZ)."
    },
    {
      name: "C2-F2",
      question: "Que représentent Ns et Nc pour une liaison mécanique ?",
      answer: "Ns = DDL supprimés, Nc = DDL conservés, avec Ns + Nc = 6."
    },
    {
      name: "C2-F3",
      question: "Quel est le mouvement autorisé par une liaison pivot idéale ?",
      answer: "Une seule rotation autour d’un axe (Nc = 1)."
    },
    {
      name: "C2-F4",
      question: "Quel est le mouvement autorisé par une liaison glissière idéale ?",
      answer: "Une seule translation suivant un axe (Nc = 1)."
    },
    {
      name: "C2-F5",
      question: "Quelle combinaison de mouvements autorise une liaison pivot glissant ?",
      answer: "Une rotation + une translation coaxiales (Nc = 2)."
    },
    {
      name: "C2-F6",
      question: "Décris le principe d’une liaison hélicoïdale.",
      answer: "La translation est liée à la rotation par un pas p (comme une vis), Nc = 1 couplé."
    },
    {
      name: "C2-F7",
      question: "Quelles sont les possibilités de mouvement pour une liaison rotule idéale ?",
      answer: "3 rotations possibles autour de trois axes passant par le centre (Nc = 3)."
    },
    {
      name: "C2-F8",
      question: "Que signifie CEC (classe d’équivalence cinématique) dans le cours ?",
      answer: "Ensemble de pièces qui ont exactement le même mouvement (même vitesse, même trajectoire)."
    },
    {
      name: "C2-F9",
      question: "Quelle est la CEC0 dans un schéma cinématique ?",
      answer: "La CEC0 correspond au bâti ou châssis, la référence fixe par rapport à laquelle on décrit les mouvements."
    },
    {
      name: "C2-F10",
      question: "Quelles sont les grandes étapes pour construire un schéma cinématique ?",
      answer: "Identifier les CEC, choisir la CEC0, déterminer les liaisons entre CEC, tracer le graphe de liaisons, puis le schéma cinématique normalisé."
    },
    {
      name: "C2-F11",
      question: "Dans le graphe de liaisons, à quoi correspondent les nœuds et les arcs ?",
      answer: "Les nœuds représentent les CEC, les arcs représentent les liaisons entre CEC."
    },
    {
      name: "C2-F12",
      question: "Pourquoi le cours insiste-t-il sur la nature des surfaces de contact dans une liaison ?",
      answer: "Parce qu’elles conditionnent les DDL possibles (surface plane, cylindrique, sphérique…) et donc le type de liaison."
    }
  ],

  // Chapitre 3 : engrenages et transmissions
  chap3: [
    {
      name: "C3-F1",
      question: "Définis l’entraxe d’un engrenage.",
      answer: "Distance entre les axes des deux roues dentées, égale à la somme de leurs rayons primitifs."
    },
    {
      name: "C3-F2",
      question: "Exprime le pas primitif p en fonction de R et Z.",
      answer: "p = 2πR / Z (distance entre deux dents successives sur le cercle primitif)."
    },
    {
      name: "C3-F3",
      question: "Pourquoi le pas primitif doit-il être identique pour deux roues en prise ?",
      answer: "Pour que l’engrènement soit correct : les dents se correspondent sans choc ni glissement excessif."
    },
    {
      name: "C3-F4",
      question: "Qu’est-ce que le module m d’une denture ?",
      answer: "Paramètre de taille des dents (m = D/Z), il doit être identique pour deux roues qui engrènent."
    },
    {
      name: "C3-F5",
      question: "Que se passe-t-il si le module est trop faible ?",
      answer: "Les dents sont fines et fragiles, ce qui limite la puissance transmissible."
    },
    {
      name: "C3-F6",
      question: "Donne un inconvénient des engrenages à denture droite.",
      answer: "Ils sont plus bruyants à grande vitesse que les dentures hélicoïdales."
    },
    {
      name: "C3-F7",
      question: "Quel est l’avantage principal d’un engrenage à chevrons ?",
      answer: "Les efforts axiaux générés par chaque denture hélicoïdale s’annulent mutuellement."
    },
    {
      name: "C3-F8",
      question: "Donne la définition générale du rapport de transmission R dans le cours.",
      answer: "R = vitesse de sortie / vitesse d’entrée (souvent R = ωs / ωe)."
    },
    {
      name: "C3-F9",
      question: "Pour un engrenage simple, comment s’exprime R en fonction des nombres de dents ?",
      answer: "R = Z_menue / Z_menante."
    },
    {
      name: "C3-F10",
      question: "Que signifie R < 1 pour le système étudié ?",
      answer: "Le système est réducteur : la vitesse de sortie est plus faible que la vitesse d’entrée, le couple augmente."
    },
    {
      name: "C3-F11",
      question: "Quel est l’intérêt des trains épicycloïdaux d’après le cours ?",
      answer: "Ils permettent de grands rapports de réduction avec un bon rendement, dans un volume compact."
    },
    {
      name: "C3-F12",
      question: "À quoi sert un différentiel automobile (vue dans les systèmes spécialisés) ?",
      answer: "À permettre des vitesses de rotation différentes des roues droites et gauches en virage."
    },
    {
      name: "C3-F13",
      question: "Donne un avantage et un inconvénient du système poulies-courroies.",
      answer: "Avantage : transmission possible sur de grandes distances et silencieuse. Inconvénient : glissement possible et durée de vie limitée de la courroie."
    },
    {
      name: "C3-F14",
      question: "Donne un avantage et un inconvénient du système par chaînes.",
      answer: "Avantage : très bon rendement (~97 %), peu de glissement. Inconvénient : bruyant et demande de la lubrification."
    },
    {
      name: "C3-F15",
      question: "Quelle relation simple relie la course du piston au rayon du vilebrequin dans une bielle-manivelle ?",
      answer: "Course = 2 × rayon du vilebrequin."
    }
  ]
};


// 50 questions de quiz couvrant les 3 chapitres

const quizQuestions = [
  // Chapitre 1 – Dessin industriel (16 questions)
  {
    chapter: "chap1",
    question: "Quel type de dessin permet une représentation symbolique d’un circuit hydraulique dans le cours ?",
    options: ["Dessin de définition", "Schéma", "Dessin d’ensemble", "Perspective éclatée"],
    answer: 1
  },
  {
    chapter: "chap1",
    question: "Le dessin d’ensemble sert principalement à :",
    options: [
      "Coter précisément une pièce unique",
      "Visualiser l’assemblage global d’un système",
      "Représenter les symboles électriques",
      "Montrer uniquement les coupes"
    ],
    answer: 1
  },
  {
    chapter: "chap1",
    question: "Le dessin de définition sert à :",
    options: [
      "Illustrer le fonctionnement global",
      "Définir complètement une pièce (cotes, tolérances…)",
      "Lister les pièces d’un ensemble",
      "Réaliser un schéma cinématique"
    ],
    answer: 1
  },
  {
    chapter: "chap1",
    question: "Quelle est la bonne expression de l’échelle utilisée en dessin industriel ?",
    options: [
      "Échelle = dimension réelle / dimension dessinée",
      "Échelle = dimension dessinée / dimension réelle",
      "Échelle = dimension réelle × dimension dessinée",
      "Échelle = 1 / (dimension dessinée)"
    ],
    answer: 1
  },
  {
    chapter: "chap1",
    question: "Parmi les échelles suivantes, laquelle est une échelle en réduction ?",
    options: ["2:1", "5:1", "1:2", "10:1"],
    answer: 2
  },
  {
    chapter: "chap1",
    question: "Parmi les échelles suivantes, laquelle est une échelle en agrandissement ?",
    options: ["1:10", "1:1", "1:2", "10:1"],
    answer: 3
  },
  {
    chapter: "chap1",
    question: "Quel élément n’est PAS typiquement présent dans un cartouche normalisé ?",
    options: ["Titre du dessin", "Symbole de projection", "Échelle", "Vitesse de rotation d’un moteur d’étude"],
    answer: 3
  },
  {
    chapter: "chap1",
    question: "À quoi sert la nomenclature sur un dessin d’ensemble ?",
    options: [
      "À représenter le schéma fonctionnel",
      "À identifier et lister toutes les pièces de l’ensemble",
      "À représenter les tolérances géométriques",
      "À tracer les projections normalisées"
    ],
    answer: 1
  },
  {
    chapter: "chap1",
    question: "Le rapport longueur/largeur des formats A (A0, A1, A2, …) est :",
    options: ["1", "2", "√2", "0,5"],
    answer: 2
  },
  {
    chapter: "chap1",
    question: "Pourquoi utilise-t-on plusieurs vues (projections) pour représenter une pièce ?",
    options: [
      "Pour faire joli",
      "Parce qu’une seule vue ne permet pas de définir entièrement la géométrie",
      "Pour augmenter la taille du plan",
      "Pour utiliser plus de feuilles"
    ],
    answer: 1
  },
  {
    chapter: "chap1",
    question: "Quel type de trait est utilisé pour représenter les axes et plans de symétrie ?",
    options: [
      "Trait continu fort",
      "Trait mixte fin (tirés-points)",
      "Trait interrompu fin",
      "Trait de contour fin"
    ],
    answer: 1
  },
  {
    chapter: "chap1",
    question: "En phase d’avant-projet, on utilise surtout :",
    options: [
      "Des croquis et schémas",
      "Des dessins de définition détaillés",
      "Des perspectives éclatées",
      "Uniquement des plans à l’échelle 1:1"
    ],
    answer: 0
  },
  {
    chapter: "chap1",
    question: "En phase de conception détaillée, on utilise surtout :",
    options: [
      "Des croquis libres",
      "Des dessins normalisés d’ensemble et de définition",
      "Des perspectives artistiques",
      "Seulement des schémas électriques"
    ],
    answer: 1
  },
  {
    chapter: "chap1",
    question: "Une perspective éclatée est surtout utile pour :",
    options: [
      "Coter précisément une pièce",
      "Visualiser l’ordre de montage et l’assemblage des pièces",
      "Dessiner les symboles hydrauliques",
      "Appliquer les tolérances géométriques"
    ],
    answer: 1
  },
  {
    chapter: "chap1",
    question: "Quel est l’avantage de travailler à l’échelle 1:1 ?",
    options: [
      "Aucun, on ne l’utilise pas",
      "On voit l’objet en vraie grandeur sans réduction ni agrandissement",
      "Les cotes sont automatiquement calculées",
      "On peut tout dessiner sur A4"
    ],
    answer: 1
  },
  {
    chapter: "chap1",
    question: "Un format A3 est obtenu à partir de :",
    options: [
      "2 × A2",
      "1/2 A2",
      "1/4 A0",
      "1/8 A0"
    ],
    answer: 1
  },

  // Chapitre 2 – Liaisons & schéma cinématique (17 questions)
  {
    chapter: "chap2",
    question: "Combien de degrés de liberté possède un solide libre dans l’espace ?",
    options: ["3", "4", "5", "6"],
    answer: 3
  },
  {
    chapter: "chap2",
    question: "Une liaison pivot conserve :",
    options: [
      "Une translation",
      "Une rotation",
      "Deux rotations",
      "Une translation et une rotation"
    ],
    answer: 1
  },
  {
    chapter: "chap2",
    question: "La liaison glissière autorise :",
    options: [
      "Une rotation",
      "Une translation",
      "Deux rotations",
      "Deux translations"
    ],
    answer: 1
  },
  {
    chapter: "chap2",
    question: "Dans une liaison, Ns + Nc =",
    options: ["3", "4", "5", "6"],
    answer: 3
  },
  {
    chapter: "chap2",
    question: "La liaison rotule autorise :",
    options: [
      "Une translation",
      "Une rotation",
      "Trois rotations",
      "Trois translations"
    ],
    answer: 2
  },
  {
    chapter: "chap2",
    question: "Une liaison hélicoïdale :",
    options: [
      "Couple rotation/translation via un pas p",
      "Ne permet aucune rotation",
      "Ne permet qu’une translation",
      "Est identique à une glissière"
    ],
    answer: 0
  },
  {
    chapter: "chap2",
    question: "La liaison encastrement supprime :",
    options: [
      "1 DDL",
      "3 DDL",
      "5 DDL",
      "6 DDL"
    ],
    answer: 3
  },
  {
    chapter: "chap2",
    question: "Une liaison pivot glissant conserve :",
    options: [
      "1 DDL",
      "2 DDL",
      "3 DDL",
      "4 DDL"
    ],
    answer: 1
  },
  {
    chapter: "chap2",
    question: "Le but d’un schéma cinématique est :",
    options: [
      "De représenter les couleurs des pièces",
      "De représenter la géométrie exacte de chaque pièce",
      "De représenter les mouvements et liaisons entre sous-ensembles",
      "De montrer la nomenclature"
    ],
    answer: 2
  },
  {
    chapter: "chap2",
    question: "La CEC0 dans un schéma cinématique représente :",
    options: [
      "Le pignon menant",
      "Le bâti (référence fixe)",
      "La pièce la plus lourde",
      "L’effecteur"
    ],
    answer: 1
  },
  {
    chapter: "chap2",
    question: "Une classe d’équivalence cinématique regroupe :",
    options: [
      "Des pièces de même matériau",
      "Des pièces ayant le même mouvement",
      "Des pièces au même coût",
      "Des pièces portant la même référence"
    ],
    answer: 1
  },
  {
    chapter: "chap2",
    question: "Dans le graphe de liaisons, les nœuds représentent :",
    options: [
      "Les contacts ponctuels seulement",
      "Les degrés de liberté",
      "Les CEC (solides cinématiques)",
      "Les efforts mécaniques"
    ],
    answer: 2
  },
  {
    chapter: "chap2",
    question: "La liaison sphère-plan est :",
    options: [
      "Une liaison parfaite sans mouvement",
      "Une liaison ponctuelle avec plusieurs rotations possibles",
      "Une liaison avec une seule translation",
      "Une liaison purement hélicoïdale"
    ],
    answer: 1
  },
  {
    chapter: "chap2",
    question: "La liaison cylindre-plan permet généralement :",
    options: [
      "Uniquement une rotation",
      "Uniquement une translation",
      "Une translation + une rotation dans le plan",
      "Aucun mouvement"
    ],
    answer: 2
  },
  {
    chapter: "chap2",
    question: "L’étape finale de la méthodologie de schéma cinématique est :",
    options: [
      "La détermination des efforts",
      "Le tracé du schéma cinématique normalisé",
      "Le choix des matériaux",
      "La rédaction du cahier des charges"
    ],
    answer: 1
  },
  {
    chapter: "chap2",
    question: "Une liaison parfaite sans aucun mouvement est :",
    options: [
      "Glissière",
      "Rotule",
      "Pivot",
      "Encastrement"
    ],
    answer: 3
  },
  {
    chapter: "chap2",
    question: "Une liaison rotule conserve :",
    options: [
      "3 rotations, 0 translation",
      "0 rotation, 3 translations",
      "1 rotation, 1 translation",
      "2 rotations, 2 translations"
    ],
    answer: 0
  },

  // Chapitre 3 – Engrenages & transmissions (17 questions)
  {
    chapter: "chap3",
    question: "Un engrenage permet de transmettre :",
    options: [
      "Uniquement une translation",
      "Une puissance de rotation entre deux arbres",
      "Uniquement un effort axial",
      "Uniquement un mouvement rectiligne"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "Le pas primitif p d’un engrenage est défini par :",
    options: [
      "p = 2πR · Z",
      "p = 2πR / Z",
      "p = Z / 2πR",
      "p = R / Z"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "Pour une roue d’engrenage, on a :",
    options: [
      "D = Z / m",
      "D = m · Z",
      "D = m / Z",
      "D = Z² · m"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "Le module m représente :",
    options: [
      "La longueur totale de la dent",
      "La résistance du matériau",
      "La taille des dents de l’engrenage",
      "Le diamètre du moyeu"
    ],
    answer: 2
  },
  {
    chapter: "chap3",
    question: "Deux engrenages peuvent engrener correctement si :",
    options: [
      "Leur nombre de dents est identique",
      "Leur module est identique",
      "Leur diamètre est identique",
      "Leur masse est identique"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "La formule générale du rapport de transmission R est :",
    options: [
      "R = vitesse d’entrée / vitesse de sortie",
      "R = vitesse de sortie / vitesse d’entrée",
      "R = couple de sortie / couple d’entrée",
      "R = nombre de dents de la menante / menue"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "Pour un engrenage simple, R peut s’écrire :",
    options: [
      "R = Z_menante / Z_menue",
      "R = Z_menue / Z_menante",
      "R = Z²_menue / Z_menante",
      "R = Z_menue · Z_menante"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "Si R < 1, le système est :",
    options: [
      "Un multiplicateur de vitesse",
      "Un réducteur de vitesse",
      "Ni l’un ni l’autre",
      "Un système bloqué"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "Les engrenages à denture hélicoïdale sont :",
    options: [
      "Plus bruyants que les dentures droites",
      "Plus silencieux et plus performants mais génèrent des efforts axiaux",
      "Toujours irréversibles",
      "Interdits pour les fortes puissances"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "Quel système permet une très forte réduction dans un faible encombrement ?",
    options: [
      "Poulies-courroies",
      "Pignon-crémaillère",
      "Roue & vis sans fin",
      "Chaîne simple"
    ],
    answer: 2
  },
  {
    chapter: "chap3",
    question: "Les pignons intermédiaires (pignons fous) dans un train simple :",
    options: [
      "Modifient le rapport global",
      "N’ont aucun effet sur le sens de rotation",
      "Inversent le sens de rotation mais ne modifient pas le rapport global",
      "Suppriment le glissement"
    ],
    answer: 2
  },
  {
    chapter: "chap3",
    question: "Un train épicycloïdal se caractérise par :",
    options: [
      "Des arbres toujours parallèles",
      "Un axe de roue non fixe par rapport au bâti",
      "L’absence de satellites",
      "Un rendement très faible"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "Le différentiel automobile est :",
    options: [
      "Un réducteur simple",
      "Un multiplicateur de vitesse",
      "Un train épicycloïdal à 1 entrée et 2 sorties",
      "Un système à courroies crantées"
    ],
    answer: 2
  },
  {
    chapter: "chap3",
    question: "Un système poulies/courroie avec courroie lisse transmet :",
    options: [
      "Sans glissement",
      "Avec glissement possible (par adhérence)",
      "Uniquement des forces axiales",
      "Uniquement des forces radiales"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "La transmission par chaînes est caractérisée par :",
    options: [
      "Un faible rendement",
      "Un très fort glissement",
      "Un rendement élevé (~97 %) mais du bruit",
      "Un rendement nul"
    ],
    answer: 2
  },
  {
    chapter: "chap3",
    question: "Quel système transforme une rotation en translation via un profil imposé ?",
    options: [
      "Bielle-manivelle",
      "Came-poussoir",
      "Pignon-crémaillère",
      "Chaîne simple"
    ],
    answer: 1
  },
  {
    chapter: "chap3",
    question: "Dans un pignon-crémaillère, la distance parcourue par la crémaillère est donnée par :",
    options: [
      "d = R / θ",
      "d = R · θ",
      "d = 2πR / Z",
      "d = R · ω"
    ],
    answer: 1
  }
];
