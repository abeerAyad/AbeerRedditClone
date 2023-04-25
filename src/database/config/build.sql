BEGIN;
DROP TABLE IF EXISTS users,posts,comments,votes;
DROP TYPE IF EXISTS vote_types;
CREATE TYPE vote_types AS ENUM ('up', 'down');

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    content_post TEXT,
    image_url TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE votes(
    id SERIAL PRIMARY KEY,
    vote_type vote_types NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username,email,password) VALUES ('Abeer','abeerayyad2000@gmail.com',' $2b$10$iTuMndhX/x5iQdhuT7NVbOemk0q6xLpoPhujckDzMTphj/B2rQ1mG');
INSERT INTO users (username,email,password) VALUES ('Aya','aya@gmail.com',' $2b$10$iTuMndhX/x5iQdhuT7NVbOemk0q6xLpoPhujckDzMTphj/B2rQ1mG');

INSERT INTO posts (title,content_post,image_url,user_id) VALUES('DataGrip','DataGrip: the GUI tool for SQL and databases.','https://external-preview.redd',1);
INSERT INTO posts (title,content_post,image_url,user_id) VALUES('DataGrip','DataGrip: the GUI tool for SQL and databases. Supports PostgreSQL, MySQL','https://external-preview.redd.it/',2);

INSERT INTO comments (comment,user_id,post_id) VALUES('Great post!',1,1);
INSERT INTO comments (comment,user_id,post_id) VALUES('HELLO !',1,1);
INSERT INTO comments (comment,user_id,post_id) VALUES('HELLO !',2,2);


INSERT INTO votes (vote_type,user_id,post_id) VALUES('up',1,1);
INSERT INTO votes (vote_type,user_id,post_id) VALUES('down',1,1);



COMMIT;