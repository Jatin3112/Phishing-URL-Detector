from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS module
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model
model = joblib.load('decision_tree_model.pkl')

# Load the fitted TF-IDF vectorizer
tfidf = joblib.load('tfidf_vectorizer.pkl')

# Define a route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    # Get the URL from the request
    url = request.json['url']

    # Transform the input URL using the loaded TF-IDF vectorizer
    input_data = tfidf.transform([url])

    # Make prediction using the loaded model
    prediction = model.predict(input_data)[0]

    # Convert the prediction to a human-readable label
    result = "good" if prediction == 1 else "phishing"

    # Return the result as JSON
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
