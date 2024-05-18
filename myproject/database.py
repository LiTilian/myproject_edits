
def init_db():
    connect = sqlite3.connect(database) 
    cursor = connect.cursor()
    cursor.execute("""
    CREATE table users (
        id integer primary key,
        login text,
        password text,
        name text
    );
    """)
    
    cursor.execute("""
    CREATE table posts (
        id integer primary key,
        text_post text,
        likes integer,
        author_id integer,
        FOREIGN KEY (author_id) REFERENCES users (id)
    );
    """)

    cursor.execute("""
    CREATE table likes (
        id integer primary key,
        post_id integer,
        user_id integer,
        FOREIGN KEY (post_id) REFERENCES posts (id)
        FOREIGN KEY (user_id) REFERENCES users (id)
    );
    """)

    cursor.execute("""
    CREATE table subs (
        id integer primary key,
        user_id integer,
        subs_id integer ,
        FOREIGN KEY (subs_id) REFERENCES users (id)
        FOREIGN KEY (user_id) REFERENCES users (id)
    );
    """)    
    connect.close()

def check_user(logiin, password):
    connect = sqlite3.connect(database)
    cursor = connect.cursor()
    cursor.execute("SELECT * FROM users where login="+ login +"")
    res = cursor.fetchall()
    if res:
        if res[0][2] == password:
            return True
