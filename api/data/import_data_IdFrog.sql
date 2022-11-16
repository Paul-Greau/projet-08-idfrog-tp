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
('userlambda2@idfrog.com', '1234', 'pseudolambda2', FALSE);

--
-- Déchargement des données de la table "category"
--

INSERT INTO "category" ("name", "color") VALUES
('environnement', '#21BA45'),
('automobile', '#000'),
('animaux', '#f0f');


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

INSERT INTO "project" ("profile_id", "category_id", "name", "invest_type", "amount_target", "rate", "end_time", "title", "resume", "description", "visibility") VALUES
(1, 2, 'Delorean 2022', 'capital', '200000', 2.5,  '2022-12-16', 'Delorean 2K22', 'En hommage à retour vers le futur', 'Une super voiture qui vous permettra de voyager dans le temps', false);


--
-- Déchargement des données de la table "comment"
--

INSERT INTO "comment" ("profile_id", "project_id", "text") VALUES
(2, 1, 'Nom de Zeus !!!'),
(3, 1, 'Tannen n''a qu''a bien se tenir');

--
-- Déchargement des données de la table "contribution"
--

INSERT INTO "contribution" ("profile_id", "project_id", "invested_amount", "sold") VALUES
(2, 1, 5000, false),
(3, 1, 7500, false);


COMMIT;