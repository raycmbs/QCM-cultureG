const questions = [
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom de la couleur du sang dans la plupart des animaux ?", answers: ["Rouge", "Bleu", "Vert", "Jaune"], correct: 0 },
    { question: "Quel est le nom du célèbre site de la bataille de Waterloo ?", answers: ["Waterloo", "Austerlitz", "Stalingrad", "Normandie"], correct: 0 },
    { question: "Quel est le nom de la célèbre histoire d'Andersen ?", answers: ["La Petite Sirène", "Cendrillon", "Blanche-Neige", "La Belle au bois dormant"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'La Condition Humaine' ?", answers: ["André Malraux", "Albert Camus", "Jean-Paul Sartre", "Henri Bergson"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain de science-fiction ?", answers: ["Isaac Asimov", "Philip K. Dick", "Arthur C. Clarke", "Ray Bradbury"], correct: 0 },
    { question: "Quel est le nom de la célèbre série de romans de J.K. Rowling ?", answers: ["Harry Potter", "Le Seigneur des Anneaux", "Les Chroniques de Narnia", "Le Hobbit"], correct: 0 },
    { question: "Quel est le nom du plus grand désert du monde ?", answers: ["Sahara", "Gobi", "Kalahari", "Désert de l'Atacama"], correct: 0 },
    { question: "Quel est le nom de l'instrument de musique à cordes ?", answers: ["Guitare", "Piano", "Saxophone", "Harmonica"], correct: 0 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom du pays où se trouve le Taj Mahal ?", answers: ["Inde", "Chine", "Japon", "Bangladesh"], correct: 0 },
    { question: "Quel est le nom de la célèbre chanson de Queen ?", answers: ["Bohemian Rhapsody", "We Will Rock You", "Somebody to Love", "Radio Ga Ga"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Fleurs du mal' ?", answers: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir obtenu un prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la planète rouge ?", answers: ["Mars", "Vénus", "Jupiter", "Saturne"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Germinal' ?", answers: ["Émile Zola", "Victor Hugo", "Marcel Proust", "Stendhal"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Misérables' ?", answers: ["Victor Hugo", "Gustave Flaubert", "Émile Zola", "Alexandre Dumas"], correct: 0 },
    { question: "Quel est le nom du célèbre musée d'art moderne à Paris ?", answers: ["Centre Pompidou", "Louvre", "Musée d'Orsay", "Musée Picasso"], correct: 0 },
    { question: "Quel est le nom de la couleur du lait ?", answers: ["Blanc", "Noir", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom de l'instrument de musique à percussion ?", answers: ["Guitare", "Batterie", "Flûte", "Saxophone"], correct: 1 },
    { question: "Quel est le nom du célèbre monument de l'Inde ?", answers: ["Taj Mahal", "Colisée", "Statue de la Liberté", "Machu Picchu"], correct: 0 },
    { question: "Quel est le nom de l'écrivain de 'Madame Bovary' ?", answers: ["Gustave Flaubert", "Émile Zola", "Victor Hugo", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de l'écrivain connu pour ses contes ?", answers: ["Charles Perrault", "Hans Christian Andersen", "Grimm", "J.K. Rowling"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom du roman de Jules Verne sur un voyage autour du monde ?", answers: ["Vingt mille lieues sous les mers", "Le Tour du monde en 80 jours", "De la Terre à la Lune", "Les Enfants du capitaine Grant"], correct: 1 },
    { question: "Quel est le nom de l'auteur de 'L'Étranger' ?", answers: ["Albert Camus", "Jean-Paul Sartre", "Simone de Beauvoir", "Marguerite Duras"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom du héros de la mythologie grecque connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom de la célèbre fable de La Fontaine avec une cigale ?", answers: ["Le Corbeau et le Renard", "La Cigale et la Fourmi", "Le Lièvre et la Tortue", "Le Loup et l'Agneau"], correct: 1 },
    { question: "Quel est le nom du personnage principal de '1984' ?", answers: ["Winston Smith", "O'Brien", "Julia", "Big Brother"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Le Petit Prince' ?", answers: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Seigneur des Anneaux' ?", answers: ["Frodo", "Gandalf", "Aragorn", "Legolas"], correct: 0 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom du célèbre personnage de Disney avec des oreilles rondes ?", answers: ["Mickey Mouse", "Donald Duck", "Goofy", "Pluto"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Trois Mousquetaires' ?", answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de la célèbre pièce de théâtre de Molière ?", answers: ["Le Misanthrope", "Tartuffe", "Dom Juan", "Les Fourberies de Scapin"], correct: 1 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom de l'élément chimique dont le symbole est He ?", answers: ["Hydrogène", "Hélium", "Oxygène", "Carbone"], correct: 1 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom de l'auteur de '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans fantastiques ?", answers: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "Stephen King"], correct: 0 },
    { question: "Quel est le nom de la célèbre fable de La Fontaine avec une cigale ?", answers: ["Le Corbeau et le Renard", "La Cigale et la Fourmi", "Le Lièvre et la Tortue", "Le Loup et l'Agneau"], correct: 1 },
    { question: "Quel est le nom du célèbre personnage de Disney connu pour son apparition dans 'Cendrillon' ?", answers: ["Cendrillon", "Blanche-Neige", "Ariel", "Elsa"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Misérables' ?", answers: ["Victor Hugo", "Émile Zola", "Alexandre Dumas", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans policiers ?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir traversé l'Atlantique ?", answers: ["Amelia Earhart", "Beryl Markham", "Harriet Quimby", "Anne Morrow Lindbergh"], correct: 0 },
    { question: "Quel est le nom du célèbre héros de la mythologie grecque connu pour avoir tué le Minotaure ?", answers: ["Thésée", "Achille", "Hercule", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de '1984' ?", answers: ["Winston Smith", "O'Brien", "Julia", "Big Brother"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Le Petit Prince' ?", answers: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du pays d'origine du sushi ?", answers: ["Japon", "Chine", "Corée", "Thaïlande"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom du célèbre auteur de contes ?", answers: ["Charles Perrault", "Hans Christian Andersen", "Grimm", "J.K. Rowling"], correct: 0 },
    { question: "Quel est le nom du pays où se trouve la Grande Muraille ?", answers: ["Chine", "Inde", "Japon", "Corée"], correct: 0 },
    { question: "Quel est le nom de la célèbre chanson de Queen ?", answers: ["Bohemian Rhapsody", "We Will Rock You", "Somebody to Love", "Radio Ga Ga"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Trois Mousquetaires' ?", answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom de l'élément chimique dont le symbole est He ?", answers: ["Hydrogène", "Hélium", "Oxygène", "Carbone"], correct: 1 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Seigneur des Anneaux' ?", answers: ["Frodo", "Gandalf", "Aragorn", "Legolas"], correct: 0 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom de l'écrivain connu pour ses romans policiers ?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Le Petit Prince' ?", answers: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom de l'auteur de '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans fantastiques ?", answers: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "Stephen King"], correct: 0 },
    { question: "Quel est le nom de la célèbre fable de La Fontaine avec une cigale ?", answers: ["Le Corbeau et le Renard", "La Cigale et la Fourmi", "Le Lièvre et la Tortue", "Le Loup et l'Agneau"], correct: 1 },
    { question: "Quel est le nom du célèbre personnage de Disney connu pour son apparition dans 'Cendrillon' ?", answers: ["Cendrillon", "Blanche-Neige", "Ariel", "Elsa"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans policiers ?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett"], correct: 0 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom de la première femme à avoir traversé l'Atlantique ?", answers: ["Amelia Earhart", "Beryl Markham", "Harriet Quimby", "Anne Morrow Lindbergh"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom de la ville où se trouve le Colisée ?", answers: ["Rome", "Athènes", "Paris", "Berlin"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Fleurs du mal' ?", answers: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans fantastiques ?", answers: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "Stephen King"], correct: 0 },
    { question: "Quel est le nom du célèbre héros de la mythologie grecque connu pour avoir tué le Minotaure ?", answers: ["Thésée", "Achille", "Hercule", "Jason"], correct: 0 },
    { question: "Quel est le nom de la célèbre fable de La Fontaine avec une cigale ?", answers: ["Le Corbeau et le Renard", "La Cigale et la Fourmi", "Le Lièvre et la Tortue", "Le Loup et l'Agneau"], correct: 1 },
    { question: "Quel est le nom du célèbre personnage de Disney connu pour son apparition dans 'Cendrillon' ?", answers: ["Cendrillon", "Blanche-Neige", "Ariel", "Elsa"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Misérables' ?", answers: ["Victor Hugo", "Émile Zola", "Alexandre Dumas", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans policiers ?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom de l'élément chimique dont le symbole est He ?", answers: ["Hydrogène", "Hélium", "Oxygène", "Carbone"], correct: 1 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom de l'instrument de musique à percussion ?", answers: ["Guitare", "Batterie", "Flûte", "Saxophone"], correct: 1 },
    { question: "Quel est le nom de l'auteur de 'Les Trois Mousquetaires' ?", answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du célèbre héros de la mythologie grecque connu pour avoir tué le Minotaure ?", answers: ["Thésée", "Achille", "Hercule", "Jason"], correct: 0 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom du personnage principal de '1984' ?", answers: ["Winston Smith", "O'Brien", "Julia", "Big Brother"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Le Petit Prince' ?", answers: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom de la célèbre chanson de Queen ?", answers: ["Bohemian Rhapsody", "We Will Rock You", "Somebody to Love", "Radio Ga Ga"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de l'auteur de 'Les Fleurs du mal' ?", answers: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom de la ville où se trouve le Colisée ?", answers: ["Rome", "Athènes", "Paris", "Berlin"], correct: 0 },
    { question: "Quel est le nom de l'élément chimique dont le symbole est He ?", answers: ["Hydrogène", "Hélium", "Oxygène", "Carbone"], correct: 1 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Seigneur des Anneaux' ?", answers: ["Frodo", "Gandalf", "Aragorn", "Legolas"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Trois Mousquetaires' ?", answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom de l'auteur de '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir traversé l'Atlantique ?", answers: ["Amelia Earhart", "Beryl Markham", "Harriet Quimby", "Anne Morrow Lindbergh"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom de la ville où se trouve le Colisée ?", answers: ["Rome", "Athènes", "Paris", "Berlin"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Fleurs du mal' ?", answers: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom du personnage principal de '1984' ?", answers: ["Winston Smith", "O'Brien", "Julia", "Big Brother"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Le Petit Prince' ?", answers: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom de l'élément chimique dont le symbole est He ?", answers: ["Hydrogène", "Hélium", "Oxygène", "Carbone"], correct: 1 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom de l'auteur de '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Fleurs du mal' ?", answers: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], correct: 0 },
    { question: "Quel est le nom de la ville où se trouve le Colisée ?", answers: ["Rome", "Athènes", "Paris", "Berlin"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Petit Prince' ?", answers: ["Le Petit Prince", "Le renard", "L'aviateur", "La rose"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans policiers ?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett"], correct: 0 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Trois Mousquetaires' ?", answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom de l'élément chimique dont le symbole est He ?", answers: ["Hydrogène", "Hélium", "Oxygène", "Carbone"], correct: 1 },
    { question: "Quel est le nom de la célèbre chanson de Queen ?", answers: ["Bohemian Rhapsody", "We Will Rock You", "Somebody to Love", "Radio Ga Ga"], correct: 0 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir traversé l'Atlantique ?", answers: ["Amelia Earhart", "Beryl Markham", "Harriet Quimby", "Anne Morrow Lindbergh"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Petit Prince' ?", answers: ["Le Petit Prince", "Le renard", "L'aviateur", "La rose"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans policiers ?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett"], correct: 0 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Trois Mousquetaires' ?", answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de la ville où se trouve le Colisée ?", answers: ["Rome", "Athènes", "Paris", "Berlin"], correct: 0 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Fleurs du mal' ?", answers: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Petit Prince' ?", answers: ["Le Petit Prince", "Le renard", "L'aviateur", "La rose"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans policiers ?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Le Petit Prince' ?", answers: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom de la ville où se trouve le Colisée ?", answers: ["Rome", "Athènes", "Paris", "Berlin"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom de l'élément chimique dont le symbole est He ?", answers: ["Hydrogène", "Hélium", "Oxygène", "Carbone"], correct: 1 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Fleurs du mal' ?", answers: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Petit Prince' ?", answers: ["Le Petit Prince", "Le renard", "L'aviateur", "La rose"], correct: 0 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans policiers ?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett"], correct: 0 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Trois Mousquetaires' ?", answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom de l'auteur de '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir traversé l'Atlantique ?", answers: ["Amelia Earhart", "Beryl Markham", "Harriet Quimby", "Anne Morrow Lindbergh"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Fleurs du mal' ?", answers: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de l'auteur de 'Le Petit Prince' ?", answers: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom de l'auteur de '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom de la ville où se trouve le Colisée ?", answers: ["Rome", "Athènes", "Paris", "Berlin"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Petit Prince' ?", answers: ["Le Petit Prince", "Le renard", "L'aviateur", "La rose"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Fleurs du mal' ?", answers: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], correct: 0 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom de l'auteur de '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Le Petit Prince' ?", answers: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du célèbre tableau de Léonard de Vinci ?", answers: ["La Cène", "La Joconde", "L'Annonciation", "Saint Jean Baptiste"], correct: 1 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans policiers ?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett"], correct: 0 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Trois Mousquetaires' ?", answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Petit Prince' ?", answers: ["Le Petit Prince", "Le renard", "L'aviateur", "La rose"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses nouvelles ?", answers: ["Edgar Allan Poe", "H.P. Lovecraft", "Ray Bradbury", "Herman Melville"], correct: 0 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Le Petit Prince' ?", answers: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Fleurs du mal' ?", answers: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Stéphane Mallarmé"], correct: 0 },
    { question: "Quel est le nom du célèbre festival de musique ?", answers: ["Coachella", "Glastonbury", "Woodstock", "Lollapalooza"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Les Misérables' ?", answers: ["Jean Valjean", "Javert", "Cosette", "Marius"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Trois Mousquetaires' ?", answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom du célèbre roi de France connu pour son long règne ?", answers: ["Louis XIV", "Louis XVI", "François Ier", "Henri IV"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Petit Prince' ?", answers: ["Le Petit Prince", "Le renard", "L'aviateur", "La rose"], correct: 0 },
    { question: "Quel est le nom de la ville lumière ?", answers: ["Paris", "Londres", "New York", "Tokyo"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la première femme à avoir volé dans l'espace ?", answers: ["Valentina Terechkova", "Mae Jemison", "Sally Ride", "Eileen Collins"], correct: 0 },
    { question: "Quel est le nom de l'auteur de '1984' ?", answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], correct: 0 },
    { question: "Quel est le nom de la couleur du chocolat ?", answers: ["Noir", "Blanc", "Rouge", "Jaune"], correct: 0 },
    { question: "Quel est le nom du célèbre film de James Cameron ?", answers: ["Titanic", "Avatar", "Terminator", "Aliens"], correct: 0 },
    { question: "Quel est le nom de l'écrivain connu pour ses œuvres sur les voyages ?", answers: ["Jules Verne", "Herman Melville", "H.G. Wells", "Mark Twain"], correct: 0 },
    { question: "Quel est le nom de la première femme à avoir reçu le prix Nobel ?", answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
    { question: "Quel est le nom de la ville où se trouve le Colisée ?", answers: ["Rome", "Athènes", "Paris", "Berlin"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Moby Dick' ?", answers: ["Ishmaël", "Captain Ahab", "Queequeg", "Starbuck"], correct: 0 },
    { question: "Quel est le nom de l'auteur de 'Les Trois Mousquetaires' ?", answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Marcel Proust"], correct: 0 },
    { question: "Quel est le nom du célèbre écrivain connu pour ses romans policiers ?", answers: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler", "Dashiell Hammett"], correct: 0 },
    { question: "Quel est le nom du héros grec connu pour sa force ?", answers: ["Hercule", "Achille", "Thésée", "Jason"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Le Petit Prince' ?", answers: ["Le Petit Prince", "Le renard", "L'aviateur", "La rose"], correct: 0 },
    { question: "Quel est le nom du personnage principal de 'Harry Potter' ?", answers: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"], correct: 0 },
    { question: "Quel est le nom de l'animal qui peut vivre sans tête ?", answers: ["Hirondelle", "Guêpe", "Cobra", "Sauterelle"], correct: 1 },
    { question: "Quel est le nom de la couleur du ciel par une belle journée ?", answers: ["Rouge", "Bleu", "Jaune", "Vert"], correct: 1 },
    { question: "Quel est le nom de la première femme présidente de la République française ?", answers: ["Simone Veil", "Édith Cresson", "Ségolène Royal", "Christine Lagarde"], correct: 1 },
  ];

let players = []; // Tableau pour stocker les joueurs
let randomQuestions = []; // Questions aléatoires pour le quiz

function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
}

const container = document.getElementById('quiz-container');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
let currentQuestionIndex = 0;
let score = 0;
let timer = 0;
let timerInterval;
let username = '';

function startQuiz() {
    username = document.getElementById('username').value;
    if (username === '') {
        alert('Veuillez entrer un pseudo!');
        return;
    }
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    randomQuestions = getRandomQuestions();
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const question = randomQuestions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.answers.map((answer, index) => `
                <li>
                    <button onclick="checkAnswer(${index})">${answer}</button>
                </li>
            `).join('')}
        </ul>
    `;
    container.innerHTML = '';
    container.appendChild(questionElement);
}

function checkAnswer(selectedIndex) {
    const question = randomQuestions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        timer = Math.max(0, timer - 5); // Réduire le temps en cas de bonne réponse
    } else {
        timer += 5; // Augmenter le temps en cas de mauvaise réponse
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < randomQuestions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    clearInterval(timerInterval);
    players.push({ name: username, score: score }); // Ajouter le joueur au tableau
    players.sort((a, b) => b.score - a.score); // Trier les joueurs par score
    const playerList = players.map(player => `<li>${player.name}: ${player.score}</li>`).join('');
    container.innerHTML = `
        <h2>Votre score est ${score} sur ${randomQuestions.length}</h2>
        <h3>Classement des joueurs :</h3>
        <ul>${playerList}</ul>
        <button onclick="restartQuiz()">Recommencer le quiz</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timer = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    randomQuestions = getRandomQuestions();
    displayQuestion();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = `Temps: ${timer}`;
    }, 1000);
}

// Démarrer le quiz
randomQuestions = getRandomQuestions();