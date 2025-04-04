import pandas as pd
df = pd.read_csv("converted.csv")

print(df['Description'].unique())

