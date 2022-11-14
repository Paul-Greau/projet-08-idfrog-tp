--
-- Base de données :  "IdFrog"
--

BEGIN;


--
-- Déchargement des données de la table "profil"
--

INSERT INTO "profile" ("email", "password", "pseudo", "is_admin") VALUES
('alex@idfrog.com', 'passalex', 'pseudoalex', TRUE),
('paul@idfrog.com', 'passpaul', 'pseudopaul', TRUE),
('nico@idfrog.com', 'passnico', 'pseudonico', TRUE),
('ramses@idfrog.com', 'passramses', 'pseudoramses', TRUE),
('userlambda1@idfrog.com', '1234', 'pseudolambda1', FALSE),
('userlambda2@idfrog.com', '1234', 'pseudolambda2', FALSE),
---
('alexa@actiively.com', 'passalexa', 'pseudoalexa', FALSE);
('aline@adoptetonmhumain.com', 'passaline', 'pseudoaline', FALSE),
('clement@metrix.com', 'passclement', 'pseudoclement', FALSE),
('margaux@nomdunvin.com', 'passmargaux', 'pseudomargaux', FALSE),
('dylan@ofood.com', 'passdylan', 'pseudodylan', FALSE),
('antoined@trapr.com', 'passantoined', 'pseudoantoined', FALSE),

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

INSERT INTO "person" ("profile_id", "first_name", "last_name", "birth_date", "birth_place", "gender", "status", "nationality", "adress", "city", "zip_code", "phone_number") VALUES
(1, 'alex', 'leg', '1988-02-16', 'bagnolet', 'male', 'person', 'fr', '7rue fkldfkdfkl', 'st-pierre', 97410, '0601020304' ),
(5, 'lambda1', 'nomlambda1', '1990-03-17', 'mexico', 'male', 'person', 'fr', '7rue du mexique', 'paris', 75019, '0601020304' );


--
-- Déchargement des données de la table "society"
--

INSERT INTO "society" ("siret", "profile_id", "name", "status") VALUES
('12355845454', 2, 'fSociety', 'entreprise'),
('99885335555', 6, 'lambdasociety2', 'entreprise');

--
-- Déchargement des données de la table "project"
--

INSERT INTO "project" ("profile_id", "category_id", "name", "invest_type", "amount_target", "rate", "end_time", "title", "subtitle", "description", "visibility") VALUES
(1, 2, 'Delorean 2022', 'capital', '200000', 2.5,  '2022-12-16', 'Delorean 2K22', 'En hommage à retour vers le futur', 'Une super voiture qui vous permettra de voyager dans le temps', false),
(2, 9, 'Actiively', 'capital', '150000', 3,  '2023-12-31', 'Actiively', "Trouvez une activité sportive/artistique qui correspond à vos critères !", "Une plateforme pour rechercher des activités (sportives, artistiques…) en fonction de critères précis : lieu, tarif, niveau (débutant, confirmé…), jour de la semaine, genre (mixte, femmes, hommes), inscription possible ou non à un instant T
L’objectif est de faciliter la recherche d’activités en fournissant des résultats le plus précis possible. Cela permettrait aux utilisateurs de trouver rapidement l’activité qui correspond à leurs besoins et aux associations/clubs de se faire connaître.",
 false),
(3, 3, 'Adopte ton mhumain', 'capital', '100000', 4,  '2024-01-01', 'Adopte ton mhumain', 'Les chats au pouvoir !', "Adopte ton Mhumain! est une plateforme permettant aux chats de trouver l'humain qui leur corresponde le plus. Les humains quant à eux se feront un profil afin d'être adopté par un chat. Un maître mot: Soyez le plus mignon possible! Les chats seront intransigeants! 😼", false),
(4, 12, 'Metrix', 'capital', '500000', 5,  '2024-06-15', 'MetriX (Reloaded)', 'Analyse de données on-chain [Web3]', "Metrix est une application permettant de faire de l'analyse de données on-chain.
Dans un premier temps sur des ERC-721 (NFTs) mais également d'autres standards.
L'objectif étant de fournir des indicateurs pertinents sur la qualité des projets, par exemple :
Momentum lors des mints
Répartition des tokens sur les adresses propriétaires
etc.",
 false),
(5, 11, "Nom d'un vin", 'capital', '200000', 4, '2022-12-31', "Nom d'un vin ! ", 'Trouvez la bouteille idéale à coup sûr !', 'Vous aimez le vin … mais vous n’y connaissez rien ? Vous ne savez pas quel vin choisir ? Pas de panique ! Avec Nom d’un vin ! vous trouverez la bouteille idéale à coup sûr 😉
Nom d’un vin ! est un site de vente en ligne de vins, simple d’utilisation, qui dépoussière le monde du vin (pas de chichi entre nous !).
Nom d’un vin ! peut vous aider à trouver la bouteille idéale rapidement grâce à son « caviste virtuel » (un chatbot quoi..).
Nom d’un vin ! vous fait (re)découvrir des petites pépites grâce à sa box mensuelle et à ses évènements : dégustations, visites de domaines viticoles.',
 false),
(6, 11, 'Ofood', 'capital', '150000', 3, '2023-08-31', 'Ofood', 'Les meilleures recettes en ligne', "Ofood est une plateforme en ligne offrant des milliers de recettes allant de plats les plus populaires aux plus exotiques et loufoques", false),
(7, 18 , 'Trapr', 'capital', '250000', 4, '2024-06-15', 'Trapr', 'Faites livrer vos produits différemment', "Cette application Web serait utile aux producteurs et artisans afin de livrer leurs produits lors de différents déplacements.
ex: André, Ostréiculteur à Cancale pars en vacances à Paris Plage et propose un arrêt livraison dans les villes suivantes : Rennes, Le Mans, Chartres et (Paris du coup). Eden, avec quelques copines du quartier, regardent notre site régulièrement pour voir quels "produits" passent par chez eux, au Mans, et surprise, ils remarquent André et ses huitres, et décident de lui en acheter 6 douzaines.
Greg, de Paris, et ses amis, souhaiteraient prendre 8 douzaines eux ! André peut alors préparer son départ et charger 14 douzaines d'huitres, amortissant en partie le trajet de ses vacances et promouvant ses produits au passage. Il ne s'arrêtera donc pas à Rennes ni Chartres ( ils sont pas drôles, y'a pas eu de commande).",
 false);

--
-- Déchargement des données de la table "comment"
--

INSERT INTO "comment" ("profile_id", "project_id", "text") VALUES
(2, 1, 'Nom de Zeus !!!'),
(3, 1, "Tannen n'a qu''a bien se tenir");

--
-- Déchargement des données de la table "contribution"
--

INSERT INTO "contribution" ("profile_id", "project_id", "invested_amount", "sold") VALUES
(2, 1, 5000, false),
(3, 1, 7500, false),
(2, 2, 6000, false),
(3, 2, 7000, false),
(2, 3, 10000, false),
(3, 3, 2000, false),
(2, 4, 5000, false),
(3, 4, 10000, false);
(2, 5, 3000, false),
(3, 5, 6000, false),
(2, 6, 3500, false),
(3, 6, 7000, false),
(2, 7, 10000, false),
(3, 7, 12000, false),
(2, 8, 5000, false),
(3, 8, 8500, false);


COMMIT;
