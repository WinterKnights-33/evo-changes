
from flask_app.config.mysqlconnection import connectToMySQL

from flask import flash

class Painting:
    db = "EER DIAGRAM"
    def __init__(self,data):
        self.id = data['id']
        self.title = data['title']
        self.description = data['description']
        self.user_id = data['user_id']
        self.created_by = data['created_by']
        self.updated_by = data['updated_by']

    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO paintings ( title, description, user_id, created_by, updated_by) VALUES (%(title)s, %(description)s, %(user_id)s, %(created_by)s, %(updated_by)s);"

        # comes back as the new row id
        result = connectToMySQL(cls.db).query_db(query, data)
        return result

    @classmethod
    def get_my_t(cls,data):
        query = "SELECT first_name FROM users LEFT JOIN paintings ON user.id = painting.user_id WHERE id = %(id)s;"
        query = "SELECT * FROM paintings WHERE user_id = %(id)s;"
        results = connectToMySQL('EER DIAGRAM').query_db(query,data)
        paintingstoreturn = []
        for result in results:
            paintingstoreturn.append(cls(result))
        return (paintingstoreturn)

    @classmethod
    def get_all_t(cls):
        query = "SELECT first_name FROM users LEFT JOIN paintings ON user.id = painting.user_id WHERE id = %(id)s;"
        query = "SELECT * FROM paintings;"
        results = connectToMySQL('EER DIAGRAM').query_db(query)
        print (f"RESULTS{results}")
        paintings = []
        for row in results:
            paintings.append( cls(row))
        return paintings

    @classmethod
    def get_one_t(cls,data):
        query = "SELECT first_name FROM users LEFT JOIN paintings ON user.id = painting.user_id WHERE id = %(id)s;"
        query = "SELECT * FROM paintings WHERE id = %(id)s;"
        results = connectToMySQL('EER DIAGRAM').query_db(query,data)
        return cls(results[0])

    @classmethod
    def get_name(cls,data):
        query = "SELECT * FROM users LEFT JOIN paintings ON user.id = painting.user_id WHERE id = %(id)s;"
        query = "SELECT first_name FROM users WHERE user_id = %(user_id)s;"
        results = connectToMySQL('EER DIAGRAM').query_db(query,data)
        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = "UPDATE paintings SET title = %(title)s, description = %(description)s, user_id = %(user_id)s WHERE id = %(id)s;"
        return connectToMySQL('EER DIAGRAM').query_db(query, data)

    @classmethod
    def submit_report(cls, data):
        query = "UPDATE paintings SET title = %(title)s, description = %(description)s, user_id = %(user_id)s, created_by = %(created_by)s WHERE id = %(id)s;"
        return connectToMySQL('EER DIAGRAM').query_db(query, data)
    
    @classmethod
    def report(cls, data):
        query = "UPDATE paintings SET title = %(title)s, description = %(description)s, created_by = %(created_by)s, WHERE id = %(id)s;"
        return connectToMySQL('EER DIAGRAM').query_db(query, data)


    @classmethod
    def destroy(cls, data):
        query  = "DELETE FROM paintings WHERE id = %(id)s;"
        return connectToMySQL('EER DIAGRAM').query_db(query, data)
        
#    @staticmethod
#    def validate_reg(painting):
#        is_valid= True
#        if len(painting['title']) < 2:
#            is_valid= False
#            flash("Title must be at least 2 characters")
#        if len(painting['description']) < 10:
#            is_valid= False
#            flash("Description must be at least 10 characters long")
#        if len(painting['price']) < 0:
#            is_valid= False
#            flash("price should be greater than 0")
#        return is_valid