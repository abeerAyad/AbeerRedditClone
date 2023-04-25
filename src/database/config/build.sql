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
INSERT INTO users (username,email,password) VALUES ('Sally','saly@gmail.com',' $2b$10$iTuMndhX/x5iQdhuT7NVbOemk0q6xLpoPhujckDzMTphj/B2rQ1mG');

INSERT INTO posts (title,content_post,image_url,user_id) VALUES('TEsssT','DeadLineee','https://img.universitystudent.org/1/4/3337/when-you-discover-the-deadline-is-tomorrow-meme.jpg',2);
INSERT INTO posts (title,content_post,image_url,user_id) VALUES('I want graduateee','','https://img.universitystudent.org/1/4/3281/university-life-first-semester-last-semester-meme.jpg',1);

INSERT INTO comments (comment,user_id,post_id) VALUES('Great post!',1,1);
INSERT INTO comments (comment,user_id,post_id) VALUES('Hellooo!',1,1);
INSERT INTO comments (comment,user_id,post_id) VALUES('Okayyy!',2,2);


INSERT INTO votes (vote_type,user_id,post_id) VALUES('up',1,1);
INSERT INTO votes (vote_type,user_id,post_id) VALUES('down',1,1);



COMMIT;