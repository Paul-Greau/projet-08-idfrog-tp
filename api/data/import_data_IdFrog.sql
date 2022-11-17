--
-- Base de données :  "IdFrog"
--

BEGIN;


--
-- Déchargement des données de la table "profil"
--

INSERT INTO "profile" ("email", "password", "pseudo", "is_admin") VALUES
('alex@idfrog.com', '$2a$10$ImYxeX958gK9F7RVNEcJv.vtGK5CqzowJqDuhsl.5Q1W8/F/qfCdy', 'pseudoalex', TRUE),
('paul@idfrog.com', '$2a$10$dJAjAH33YDNu2hU4LKAHaePFkj8KzEleYiHwWhMEFEnjfWsfAoShi', 'pseudopaul', TRUE),
('nico@idfrog.com', '$2a$10$tounNntMwsNPr5nNg1FvdOsb85NHnP2bTdYftSAQRL6EgiHA4VoyC', 'pseudonico', TRUE),
('ramses@idfrog.com', '$2a$10$RAn941/UroP1OgN01VwEneaOdy.Jh0mNE5WtXAENKdZBhEi/uaeSS', 'pseudoramses', TRUE),
('userlambda1@idfrog.com', '$2a$10$KfoDxBtcgAwXoEkHImxtzehQzMOWjabJAIInCs2bxYmmdMVu8YaL.', 'pseudolambda1', FALSE),
('userlambda2@idfrog.com', '$2a$10$kov83g8LQCkKw6Rb5yepYOvXg3eqYED6mqYgHggb8/LjlMqRd6oiy', 'pseudolambda2', FALSE),
---
('alexa@actiively.com', '$2a$10$d9DiBlhGmxRRk/yfznL6hu7Dtc1vKxyqwr5NGC66vLOMk0xl3aYpa', 'pseudoalexa', FALSE),
('aline@adoptetonmhumain.com', '$2a$10$lZIyMFJZXezUQfkXLO5XQeLv6YJMRWrb8p6QhIZB/bPeflH3teVUq', 'pseudoaline', FALSE),
('clement@metrix.com', '$2a$10$68REtH5qIHOplV3VJ5npRud6o40YM/QU6gti0vdMgLat9Vz.oeype', 'pseudoclement', FALSE),
('margaux@nomdunvin.com', '$2a$10$BN7GedjAS8CbRyJKJQ2jcOlNaUxYWsG5jtYebhFGvTivZRRlhXgue', 'pseudomargaux', FALSE),
('dylan@ofood.com', '$2a$10$kbRmHTld75OBxxfvjPdPweu/MY0.Bc6QC89lmRK7HayvuiJkLADNO', 'pseudodylan', FALSE),
('antoine@trapr.com', '$2a$10$L6Th4E0iUhgczWxd1iNVG.2rduyWBfE/7ug.p9HYHSQK1MhMdkFfC', 'pseudoantoine', FALSE),
('jerome@miimosa.com', '$2a$10$Jl.Kt3z2RnbQilbJPW1r5uoPP9x3exIJWn1L57RL7ovDBeFONq6Yu', 'pseudojerome', FALSE),
('steve@delorean.com', '$2a$10$jdRzgw6jbWV2S0H51vWhRu.vtdbtPXx8yGkiM7EL/2SsDT3XAYGDO', 'pseudosteve', FALSE);

--
-- Déchargement des données de la table "category"
--

INSERT INTO "category" ("name", "color") VALUES
('toutes categories', '#fff'),
('animaux', '#f0f'),
('art & photo', '#fff'),
('artisanat & cuisine', '#fff'),
('automobile', '#000'),
('bd', '#fff'),
('edition & journal', '#fff'),
('enfance & education', '#fff'),
('environnement', '#21BA45'),
('film & video', '#fff'),
('jeux', '#fff'),
('mode & design', '#fff'),
('musique', '#fff'),
('santé & bien-être', '#fff'),
('solidaire & citoyen', '#fff'),
('spectacle vivant', '#fff'),
('sports', '#fff'),
('technologie', '#fff'),
('autres projets', '#fff');


--
-- Déchargement des données de la table "person"
--

INSERT INTO "person" ("profile_id", "first_name", "last_name", "birth_date", "birth_place", "gender", "status", "nationality", "adress", "city", "zip_code", "phone_number","avatar_url" ) VALUES
(1, 'alex', 'leg', '1988-02-16', 'bagnolet', 'male', 'person', 'fr', '7rue fkldfkdfkl', 'st-pierre', 97410, '0601020304' ),
(5, 'Jean-pierre', 'adidole', '1990-03-17', 'mexico', 'male', 'person', 'fr', '7rue du mexique', 'paris', 75019, '0601020304' ),
(3, 'Marcel', 'patulacci', '1988-02-16', 'bagnolet', 'male', 'person', 'fr', '7rue fkldfkdfkl', 'st-pierre', 97410, '0601020304' ),
(4, 'veronique', 'sonsan', '1972-08-21', 'jouy-en-josas', 'female', 'person', 'fr', '29 rue ravier', 78350, '0668592587' ),
(7, 'beatrice', 'dolle', '1974-04-13', 'brest', 'female', 'person', 'fr', '14 avenue du general leclerc', 'brest', 29200, '0165898787' ),
(9, 'alain', 'deloin', '1969-09-23', 'dijon', 'male', 'person', 'fr', '39 rue du mistral', 'poitiers' , 86000, '0157982132' ),
(11, 'michelle', 'obamo', '1978-01-28', 'marseille', 'female', 'person', 'fr', '59 rue du velodrome', 'marseille' , 13000, '0157982132' ),
(13, 'michel','jordant', '1981-02-03', 'dunkerque', 'male', 'person', 'fr', '8 rue des oisillons', 'rouen', 76000, '0758694251' ),
(14, 'josephine', 'bekker', '1959-07-28', 'nice', 'female', 'person', 'fr', '18 chemin des peupliers', 'juan les pins', 06160, '0154366585' ),
(16, 'marc', 'zuckerborg', '1985-11-12', 'bordeaux', 'male', 'person', 'fr', '100 boulevard du metavers', 'la rochelle', 17000, '0615498955' ),
(17, 'steve', 'jabs', '1976-10-06', 'lyon', 'male', 'person', 'fr', '7 rue de la pomme', 'lyon', 69001, '0188574162' ),
(18, 'mylene', 'Fermar', '1991-03-17', 'mont-de-marsan', 'female', 'person', 'fr', '29 rue libertine', 'paris', 69001, '0615468988' ),

(21, 'alexa', 'dupin', '1989-06-14', 'paris', 'female', 'person', 'fr', '25 rue gallieni', 'Alfortville', 94140, '0612323358' ), 
(22, 'aline', 'massard', '1997-05-22', 'orleans', 'female', 'person', 'fr', '8 rue salvador dali', 'orleans', 45000, '0655239537' ),
(23, 'clement', 'guillaud-saumur', '1991-05-01', 'clermont-ferrand', 'male', 'person', 'fr', '6 rue escudier', 'clermont-ferrand', 63000, '0625654410' ),
(24, 'margaux', 'perrier', '1998-02-08', 'nice', 'female', 'person', 'fr', '12 boulevard du midi', 'nice',06000, '0677983681' ),
(25, 'dylan', 'stockinger', '1998-07-23', 'paris', 'male', 'person', 'fr', '36 rue varenne', 'saint-ouen', 93400, '0625663134' ),
(26, 'antoine', 'deshayes', '1994-02-07', 'clermont-ferrand', 'male', 'person', 'fr', '5 rue hoche', 'clermont-ferrand', 63000, '0637584550' ),
(27, 'nicolas', 'ortigue', '1980-06-15', 'paris', 'male', 'person', 'fr', '11 rue pivert', 'Noisy-le-Grand', 93160, '0665543210' ),
(28, 'jerome', 'commandant', '1978-12-25', 'caen', 'male', 'person', 'fr', '24 avenue de la villardière', 'caen', 14000, '0667892812' );

--
-- Déchargement des données de la table "society"
--

INSERT INTO "society" ("siret", "profile_id", "name", "status") VALUES
('12355845454', 2, 'fsociety', 'entreprise'),
('99885335555', 6, 'Blockrack', 'entreprise'),
('99885335555', 8, 'gcapital', 'entreprise'),
('98564423127', 10, 'oxo', 'entreprise'),
('56654658790', 12, 'skynet', 'entreprise'),
('15646713215', 15, 'ineos', 'entreprise'),
('99548451451', 19, 'tornado', 'entreprise'),
('55655548122', 20, 'pompelop', 'entreprise');

--
-- Déchargement des données de la table "project"
--


INSERT INTO "project" ("profile_id", "category_id", "name", "invest_type", "amount_target", "rate", "end_time", "img_url", "web_url", "title", "resume", "description", "visibility") VALUES
(17, 2, 'Delorean 2022', 'capital', '200000', 2.5, '2022-12-16', '/home/student/Bureau/html/idfrog/projet-08-idfrog/api/data/ProjectsImages/project-1668411645261-delorean_2022.png', 'https://delorean2k22.com', 'Delorean 2K22', 'En hommage à retour vers le futur', 'Une super voiture qui vous permettra de voyager dans le temps', false),
(21, 9, 'Actiively', 'capital', '150000', 3,  '2023-12-31', '/home/student/Bureau/html/idfrog/projet-08-idfrog/api/data/ProjectsImages/project-1668411715471-actiively.png', 'https://actiively', 'Actiively', "Trouvez une activité sportive/artistique qui correspond à vos critères !", "Une plateforme pour rechercher des activités (sportives, artistiques…) en fonction de critères précis : lieu, tarif, niveau (débutant, confirmé…), jour de la semaine, genre (mixte, femmes, hommes), inscription possible ou non à un instant T
L’objectif est de faciliter la recherche d’activités en fournissant des résultats le plus précis possible. Cela permettrait aux utilisateurs de trouver rapidement l’activité qui correspond à leurs besoins et aux associations/clubs de se faire connaître.",
 false),
(22, 3, 'Adopte ton mhumain', 'capital', '100000', 4,  '2024-01-01', '/home/student/Bureau/html/idfrog/projet-08-idfrog/api/data/ProjectsImages/project-1668411726029-adoptemonmhumain.png', 'https://adoptetonmhumain.com', 'Adopte ton mhumain', 'Les chats au pouvoir !', "Adopte ton Mhumain! est une plateforme permettant aux chats de trouver l'humain qui leur corresponde le plus. Les humains quant à eux se feront un profil afin d'être adopté par un chat. Un maître mot: Soyez le plus mignon possible! Les chats seront intransigeants! 😼", false),
(23, 12, 'Metrix', 'capital', '200000', 3,5,  '2024-06-15', '/home/student/Bureau/html/idfrog/projet-08-idfrog/api/data/ProjectsImages/project-1668411734260-metrix.png', 'https://unimetrix.xyz', 'MetriX (Reloaded)', 'Analyse de données on-chain [Web3]', "Metrix est une application permettant de faire de l'analyse de données on-chain.
Dans un premier temps sur des ERC-721 (NFTs) mais également d'autres standards.
L'objectif étant de fournir des indicateurs pertinents sur la qualité des projets, par exemple :
Momentum lors des mints
Répartition des tokens sur les adresses propriétaires
etc.",
 false),
(24, 11, "Nom d'un vin", 'capital', '200000', 4, '2022-12-31', '/home/student/Bureau/html/idfrog/projet-08-idfrog/api/data/ProjectsImages/project-1668411792948-nomdunvin.png', 'https://nomdunvin.com' "Nom d'un vin ! ", 'Trouvez la bouteille idéale à coup sûr !', 'Vous aimez le vin … mais vous n’y connaissez rien ? Vous ne savez pas quel vin choisir ? Pas de panique ! Avec Nom d’un vin ! vous trouverez la bouteille idéale à coup sûr 😉
Nom d’un vin ! est un site de vente en ligne de vins, simple d’utilisation, qui dépoussière le monde du vin (pas de chichi entre nous !).
Nom d’un vin ! peut vous aider à trouver la bouteille idéale rapidement grâce à son « caviste virtuel » (un chatbot quoi..).
Nom d’un vin ! vous fait (re)découvrir des petites pépites grâce à sa box mensuelle et à ses évènements : dégustations, visites de domaines viticoles.',
 false),
(25, 11, 'Ofood', 'capital', '150000', 3, '2023-08-31', '/home/student/Bureau/html/idfrog/projet-08-idfrog/api/data/ProjectsImages/project-1668411830945-ofood.png', 'https://ofood.com' 'Ofood', 'Les meilleures recettes en ligne', "Ofood est une plateforme en ligne offrant des milliers de recettes allant de plats les plus populaires aux plus exotiques et loufoques", false),
(26, 18 , 'Trapr', 'capital', '250000', 4, '2024-06-15', '/home/student/Bureau/html/idfrog/projet-08-idfrog/api/data/ProjectsImages/project-1668413366397-trapr.png', 'https://trapr', 'Trapr', 'Faites livrer vos produits différemment', "Cette application Web serait utile aux producteurs et artisans afin de livrer leurs produits lors de différents déplacements.
ex: André, Ostréiculteur à Cancale pars en vacances à Paris Plage et propose un arrêt livraison dans les villes suivantes : Rennes, Le Mans, Chartres et (Paris du coup). Eden, avec quelques copines du quartier, regardent notre site régulièrement pour voir quels "produits" passent par chez eux, au Mans, et surprise, ils remarquent André et ses huitres, et décident de lui en acheter 6 douzaines.
Greg, de Paris, et ses amis, souhaiteraient prendre 8 douzaines eux ! André peut alors préparer son départ et charger 14 douzaines d'huitres, amortissant en partie le trajet de ses vacances et promouvant ses produits au passage. Il ne s'arrêtera donc pas à Rennes ni Chartres ( ils sont pas drôles, y'a pas eu de commande).",
 false),
(27, 18, 'Idfrog', 'capital', '200000', 3, '2023-12-31', '/home/student/Bureau/html/idfrog/projet-08-idfrog/api/data/ProjectsImages/project-1668413376823-idfrog.png', 'https://idfrog', 'Idfrog', 'La boîte à idées', "idFrog est une plateforme qui permet donc à une personne lambda ayant une idée ou plusieurs de la partager avec ses amis afin de la faire évoluer pour qu'au final il puisse la poster dans un environnement sécurisé où elle sera regardée par des investisseurs potentiellement intéressé par celle-ci."
 false),
(28, 18, 'Miimosa', 'capital', '100000', 2,5, '2022-12-31', '/home/student/Bureau/html/idfrog/projet-08-idfrog/api/data/ProjectsImages/project-1668416737515-miimosa.png', 'https://miimosa.com', 'Miimosa', 'Le financement participatif dédié à la transition agricole et alimentaire', 'Sur MiiMOSA, l’agriculture et l’alimentation de demain se financent aujourd’hui. Depuis 2015, nous proposons aux citoyens et aux entreprises de financer des projets d’agriculture et d’alimentation durables sur le modèle du don avec contrepartie ou du prêt rémunéré.', 
 false);
--
-- Déchargement des données de la table "comment"
--

INSERT INTO "comment" ("profile_id", "project_id", "text") VALUES
(5, 1, 'Nom de Zeus !!!'),
(11, 1, "Tannen n'a qu'a bien se tenir"),
(14, 2, 'Ah ça faisait longtemps que je cherchais un site comme celui-ci !'),
(3, 2, 'Top projet !'),
(17, 3, "Waouh vraiment innovant ! J'adore !"),
(3, 3, "J'aime vraiment ce projet."),
(16, 4, "L'idée de mélanger blockchain et environnement est vraiment interéssante !!"),
(4, 4, 'Je suis conquise !'),
(11, 5, 'Beau projet à suivre !'),
(1, 5, 'Enfin un site aussi bien pour les connaisseurs que pour les novices ! comptez sur moi pour suivre le projet !'),
(7, 6, 'mmm ce projet donne faim !! :)'),
(5, 6, 'vraiment intéressant'),
(19, 7, "Dans notre ville on aurait bien besoin d'un projet comme celui-ci !"),
(9, 7, 'Hâte de voir le projet abouti !'),
(3, 8, 'Super projet !!'),
(14, 8, "Pressée de voir ce projet fini. J'ai un projet perso que j'aimerais pousser.");
(18, 9, 'Curieuse de voir ce projet abouti!');

--
-- Déchargement des données de la table "contribution"
--

INSERT INTO "contribution" ("profile_id", "project_id", "invested_amount", "sold") VALUES

(1, 1, 5000, false),
(6, 1, 150000, false),
(14, 2, 30000, false),
(10, 2, 50500, false),
(8, 3, 20700, false),
(4, 3, 14000, false),
(16, 4, 20400, false),
(3, 4, 16000, false);
(15, 5, 100800, false),
(2, 5, 103000, false),
(7, 6, 31000, false),
(9, 6, 20500, false),
(5, 7, 17000, false),
(4, 7, 1200, false),
(12, 8, 10600, false),
(18, 8, 32000, false),
(2, 9, 14500, false),
(20, 9, 11000, false);



COMMIT;