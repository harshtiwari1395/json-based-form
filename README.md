This app is built using create-react-app.

Steps to run on local: 

git clone https://github.com/harshtiwari1395/json-based-form.git

cd json-based-form

npm i --force 

(--force because there are some legacy modules)

npm start

The format.json file consists a limmited number of instances of various input types used form input process. It can be configured to adjust the positioning and default field values according to the requirements.

The "renderFormFromJson" function is used for rendering various input componets using metadata taken from JSON file. 

This is a rudimentary implementation without attention to CSS.

On varyinh any field, you will be able to see its value logged out in onsole with the field key. This is coming from state updates.

This logic can be added to specific requirements for making any kind of forms.