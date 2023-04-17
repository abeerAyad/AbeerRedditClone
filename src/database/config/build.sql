BEGIN;
DROP TABLE IF EXISTS users,posts,comments,votes;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    content_post TEXT,
    image_url TEXT,
    user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE votes(
    id SERIAL PRIMARY KEY,
    vote_type TEXT,
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username,email,password) VALUES ('Abeer','abeerayyad2000@gmail.com','123654789');
INSERT INTO users (username,email,password) VALUES ('Aya','aya@gmail.com','123654789');

INSERT INTO posts (title,content_post,image_url,user_id) VALUES('DataGrip','DataGrip: the GUI tool for SQL and databases. Supports PostgreSQL, MySQL, SQL Server, Oracle, and others. Key features: smart coding assistance, powerful navigation, configurable export. Works on Win, Mac, and Linux.','https://external-preview.redd.it/zQjApYpllYtgki6hkeRIU8EI5J5Kx8ecCex5nr8w_UI.jpg?width=640&crop=smart&auto=webp&v=enabled&s=17a6194b0c1176ce102c2e895466a1507007a30f',1);
INSERT INTO posts (title,content_post,image_url,user_id) VALUES('DataGrip','DataGrip: the GUI tool for SQL and databases. Supports PostgreSQL, MySQL, SQL Server, Oracle, and others. Key features: smart coding assistance, powerful navigation, configurable export. Works on Win, Mac, and Linux.','https://external-preview.redd.it/zQjApYpllYtgki6hkeRIU8EI5J5Kx8ecCex5nr8w_UI.jpg?width=640&crop=smart&auto=webp&v=enabled&s=17a6194b0c1176ce102c2e895466a1507007a30f',2);

-- INSERT INTO comments (comment,user_id,post_id) VALUES('Great post!',1,1);
-- INSERT INTO votes (vote_type,user_id,post_id) VALUES('up',1,1);


COMMIT;