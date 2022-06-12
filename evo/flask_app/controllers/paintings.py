from flask import render_template,redirect,request,session

from flask_app import app

from flask_app.models.painting import Painting

from flask_app.controllers.users import User

@app.route('/home')
def home():
    if 'user_id' not in session:
        return redirect('/logout')
    data ={
        'id': session['user_id']
    }
    #print (session["user_id"])
    return render_template("home.html", user=User.get_w_id(data), paintings=Painting.get_all_t())


@app.route('/painting/veiw/<int:id>')
def view(id):
    data = {
        'id': id
    }
    return render_template("view.html", painting=Painting.get_one_t(data))


@app.route('/painting/edit/<int:id>')
def edit(id):
#    if 'user_id' not in session:
#        return redirect('/logout')
    data = {
        'id': id
    }
    return render_template("edit.html", painting=Painting.get_one_t(data))


#@app.route('/plant/painting/update/<int:id>', methods=['POST'])
#def update(id):
#    data = {
#        'id' : id
#    }
#    Painting.update(request.form)
#    return redirect('/home')

@app.route('/plant/painting/update/<int:id>', methods=['POST'])
def update(id):
#    if 'user_id' not in session:
#        return redirect('/logout')
    data = {
        'id' : id,
        "title" : request.form["title"],
        "description" : request.form["description"],
        "user_id": session["user_id"],
    }
    Painting.update(data)
    return redirect('/home')


@app.route('/painting/delete/<int:id>')
def destroy(id):
    data = {
        'id': id
    }
    Painting.destroy(data)
    return redirect('/home')

@app.route('/painting/plant')
def report():
    return render_template("plant.html", painting=Painting)


@app.route('/painting/plant/save', methods=['POST'])
def save():
#    if 'user_id' not in session:
#        return redirect('/logout')
    data = {
        'id' : id,
        "title" : request.form["title"],
        "description" : request.form["description"],
        "created_by" : request.form["created_by"],
        "updated_by" : request.form["updated_by"],
        "user_id": session["user_id"],
    }
    Painting.save(data)
    return redirect('/home')

