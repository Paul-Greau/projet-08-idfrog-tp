BEGIN;

-- Comme c'est un script de création de tables ont s'assure que celles-ci
-- Soit supprimées avant de les créées.
-- On peut supprimer plusieurs tables en même temps

DROP TABLE IF EXISTS "logger",
"category",
"person",
"society",
"project",
"comment",
"contribution";

-- -----------------------------------------------------
-- Schema IdFrog
-- -----------------------------------------------------
-- Par convention on va nommer toutes les tables au singulier, en minuscule et en anglais.
-- Chaque table contiendra un champs created_at contenant la date de création d'un enregistrement
-- Et un champ updated_at contenant la date de mise à jour de cet enregistrement
-- Création d'une transaction, c'est un groupe d' instruction SQL
-- qui rends celles-ci dépéndantes les unes des autres. 
-- Si au moins une des instructions génère une erreur, 
-- alors toutes les commandes sont invalidés


-- -----------------------------------------------------
-- Table "logger"
-- -----------------------------------------------------
-- On ne peut pas référencé le champ id de la table question ici, car la table n'existe pas encore. On fera une modification à la fin du script pour ajouter la référence.
CREATE TABLE IF NOT EXISTS "logger" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL,
  "password" text NOT NULL,
  "pseudo" text NOT NULL UNIQUE,
  "is_admin" boolean NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "category"
CREATE TABLE IF NOT EXISTS "category" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "color" text NOT NULL DEFAULT '#FFFFFF',
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "person"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "person" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "user_id" INT NOT NULL REFERENCES "logger" ("id"),
  "first_name" text NOT NULL,
  "last_name" text NOT NULL,
  "birth_date" date DEFAULT NULL,
  "birth_place" text DEFAULT NULL,
  "gender" text DEFAULT NULL,
  "status" text DEFAULT NULL,
  "nationality" text DEFAULT NULL,
  "adress" text DEFAULT NULL,
  "city" text DEFAULT NULL,
  "zip_code" INT DEFAULT NULL,
  "phone_number" INT DEFAULT NULL, 
  "avatar_url" text DEFAULT NULL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "society"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "society" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "siret" INT NOT NULL,
  "user_id" INT NOT NULL REFERENCES "logger" ("id"),
  "name" text NOT NULL,
  "status" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "updated_at" timestamptz
);


-- -----------------------------------------------------
-- Table "project"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "project" (
  -- une clé primaire est automatiquement NOT NULL. Pas besoin de le préciser.
  -- 
  -- On spécifie que la colonne sera généré automatiquement par la BDD en suivant une séquence numérique prédéfinie de 1 en 1
  -- On peut définir BY DEFAULT (surcharge de la valeur possible) ou ALWAYS (surcharge de la valeur impossible)
  -- Ici on utilise BY DEFAULT car on défini nous même les valeurs des clé primaires dans les insertions du fichier import_data.sql
  -- Mais on utilisera plus généralement ALWAYS afin de sécurisé l'incrémentation des valeurs du champ
  --
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "logger_id" INT NOT NULL REFERENCES "logger" ("id"),
  "category_id" INT NOT NULL REFERENCES "category" ("id"),
  "name" text NOT NULL,
  "invest_type" text NOT NULL,
  "amount_target" INT NOT NULL,
  "rate" decimal NOT NULL,
  "end_time" timestamptz NOT NULL,
  "img_url" text NULL,
  "web_url" text NULL,
  "title" text NOT NULL,
  "subtitle" text NOT NULL,
  "description" text NOT NULL,
  "visibility" boolean NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(), --on peut utiliser now() aussi
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "comment"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "comment" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "logger_id" INT NOT NULL REFERENCES "logger" ("id"),
  "project_id" INT NOT NULL REFERENCES "project" ("id"),
  "text" text NOT NULL
);

-- -----------------------------------------------------
-- Table "contribution"
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS "contribution" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "logger_id" INT NOT NULL REFERENCES "logger" ("id"),
  "project_id" INT NOT NULL REFERENCES "project" ("id"),
  "invested_amount" INT NOT NULL,
  "sold" boolean NOT NULL,
  "type" text NOT NULL
);



-- Pour mettre fin à au bloc de transaction et l'exécuter
COMMIT;
