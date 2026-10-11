-- =========================
-- Recipes
-- =========================
CREATE TABLE recipes
(
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    name         TEXT NOT NULL,
    method_type  TEXT NOT NULL CHECK (method_type IN ('url', 'book', 'steps')),
    method_value TEXT NOT NULL,
    created_at   DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- Ingredients
-- =========================
CREATE TABLE ingredients
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- =========================
-- Recipe ↔ Ingredients
-- =========================
CREATE TABLE recipe_ingredients
(
    recipe_id     INTEGER NOT NULL,
    ingredient_id INTEGER NOT NULL,
    quantity      TEXT,

    PRIMARY KEY (recipe_id, ingredient_id),

    FOREIGN KEY (recipe_id)
        REFERENCES recipes (id)
        ON DELETE CASCADE,

    FOREIGN KEY (ingredient_id)
        REFERENCES ingredients (id)
        ON DELETE RESTRICT
);

-- =========================
-- Tags
-- =========================
CREATE TABLE tags
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- =========================
-- Recipe ↔ Tags
-- =========================
CREATE TABLE recipe_tags
(
    recipe_id INTEGER NOT NULL,
    tag_id    INTEGER NOT NULL,

    PRIMARY KEY (recipe_id, tag_id),

    FOREIGN KEY (recipe_id)
        REFERENCES recipes (id)
        ON DELETE CASCADE,

    FOREIGN KEY (tag_id)
        REFERENCES tags (id)
        ON DELETE CASCADE
);

-- =========================
-- Indexes (recommended)
-- =========================
CREATE INDEX idx_recipe_ingredients_ingredient_id
    ON recipe_ingredients (ingredient_id);

CREATE INDEX idx_recipe_tags_tag_id
    ON recipe_tags (tag_id);
