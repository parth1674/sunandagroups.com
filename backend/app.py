from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": "https://sunandagroups.com"}})

# Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USER')

mail = Mail(app)

@app.route('/send_email', methods=['POST'])
def send_email():
    try:
        data = request.get_json()
        msg = Message(
            subject=f"New contact from {data['name']}",
            recipients=["parth.verma@sunandagroups.com","info@sunandagroups.com"],
            body=f"""
            Name: {data['name']}
            Email: {data['email']}
            Phone: {data['phone']}
            Message: {data['message']}
            """
        )
        mail.send(msg)
        return jsonify({"success": True}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
    