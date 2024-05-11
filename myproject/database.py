
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
        FOREING KEY (author_id) REFERENS users (id)
    );
    """)

    cursor.execute("""
    CREATE table likes (
        id integer primary key,
        post_id integer,
        user_id integer,
        FOREING KEY (post_id) REFERENS posts (id)
        FOREING KEY (user_id) REFERENS users (id)
    );
    """)

    cursor.execute("""
    CREATE table subs (
        id integer primary key,
        user_id integer,
        subs_id integer ,
        FOREING KEY (subs_id) REFERENS users (id)
        FOREING KEY (user_id) REFERENS users (id)
    );
    """)    
connect.close()