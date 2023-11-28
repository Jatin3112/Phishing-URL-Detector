# %pip install plotly
import pandas as pd
import numpy as np
import plotly.express as px

import seaborn as sns
import matplotlib.pyplot as plt

from sklearn.svm import SVC
from sklearn import tree

# %matplotlib inline
# Loading the dataset
phish_data = pd.read_csv("phishing_site_urls.csv")
phish_data.head()
phish_data.info()
phish_data.isnull().sum()
label_counts = pd.DataFrame(phish_data.Label.value_counts())
fig = px.bar(label_counts, x=label_counts.index, y=label_counts.Label)
fig.show()
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer

# Replacing "Label" column with 0s and 1s
phish_data["Label"] = phish_data["Label"].apply(lambda x: 1 if x == "good" else 0)

X = phish_data["URL"]
y = phish_data["Label"]

# Convert X to a list of strings
X = X.astype(str)

# Splitting the data (Training and testing)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=42
)
oversample = RandomOverSampler(sampling_strategy="minority")
X_train_resampled, y_train_resampled = oversample.fit_resample(
    X_train.values.reshape(-1, 1), y_train
)

X_train_resampled = X_train_resampled.flatten()

# Initialize TF-IDF vectorizer
tfidf = TfidfVectorizer(max_features=4000)  # You can adjust max_features

# Fit and transform the training and testing data
X_train_tfidf = tfidf.fit_transform(X_train_resampled)
X_test_tfidf = tfidf.transform(X_test)

clf = tree.DecisionTreeClassifier(random_state=22)

clf.fit(X_train_tfidf, y_train_resampled)


from sklearn.metrics import (
    accuracy_score,
    classification_report,
    accuracy_score,
    confusion_matrix,
)


y_pred = clf.predict(X_test_tfidf)
train_accuracy = accuracy_score(y_test, y_pred)
print(train_accuracy)

classification_rep = classification_report(y_test, y_pred)
conf_matrix = confusion_matrix(y_test, y_pred)

print("Confusion Matrix:")
print(conf_matrix)
print("Classification Report:")
print(classification_rep)
import plotly.graph_objects as go

classification_metrics = classification_rep.split("\n")

header = ["Class", "Precision", "Recall", "F1-Score", "Support"]
values = [x.split() for x in classification_metrics[2:4]]

# Transpose the 'values' list
values = list(map(list, zip(*values)))

# Create a Plotly table
fig = go.Figure(
    data=[
        go.Table(
            header=dict(values=header),
            cells=dict(values=values, align=["left", "center"]),
        )
    ]
)

fig.show()

print("visualizing")

from sklearn.metrics import confusion_matrix

# Visualize the confusion matrix
plt.figure(figsize=(8, 6))
sns.heatmap(conf_matrix, annot=True, fmt="d", cmap="Blues", cbar=False)
plt.xlabel("Predicted")
plt.ylabel("Actual")
plt.title("Confusion Matrix")
plt.show()

# Plot accuracy
plt.figure(figsize=(6, 4))
plt.bar(["Accuracy"], [train_accuracy])
plt.ylabel("Accuracy")
plt.title("Model Accuracy")
plt.show()

importances = clf.feature_importances_
feature_names = tfidf.get_feature_names_out()
top_n = 10

indices = np.argsort(importances)[::-1][:top_n]
selected_features = [feature_names[i] for i in indices]

plt.figure(figsize=(10, 5))
plt.barh(range(top_n), importances[indices], align="center")
plt.yticks(range(top_n), selected_features)
plt.xlabel("Feature Importance")
plt.title("Top Feature Importance for Decision Tree")
plt.show()


print("Model training done")

import joblib

# Save the trained model to a file
model_filename = "decision_tree_model.pkl"
joblib.dump(clf, model_filename)
print(f"Model saved as {model_filename}")

# Save the TF-IDF vectorizer
tfidf_vectorizer_filename = "tfidf_vectorizer.pkl"
joblib.dump(tfidf, tfidf_vectorizer_filename)
print(f"TF-IDF Vectorizer saved as {tfidf_vectorizer_filename}")
