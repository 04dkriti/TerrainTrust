import pandas as pd
import joblib
model = joblib.load('landslide_model.pkl')
print("Model loaded successfully!")
new_data = pd.read_csv('new_data.csv')
X_new = new_data.drop(columns=["Landslide"], errors='ignore')  
predictions = model.predict(X_new)
print("Predictions:", predictions)
