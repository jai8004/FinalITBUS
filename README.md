                           Django BUSIT Week Mini Blog Project


#Admin id and Password
id-jai
pass-jai123456

#To run project 

1.Activate Environment 

a).Linux 
source ./env/bin/activate

b).Windows
\path\to\env\Scripts\activate

ex : C:\Users\'Username'\venv\Scripts\activate.bat


2.Run server 
python manage.py runserver



#################################   If above fails #######################################


Create your enviroment and then run

1.Linux

python3 -m venv env

## Go to above step

2.Windows

https://programwithus.com/learn-to-code/Pip-and-virtualenv-on-Windows/


###################### Change password of admin or create new admin #######################

1.Create new admin 

python manage.py createsuperuser


2.Change password

python manage.py changepassword <user_name>
