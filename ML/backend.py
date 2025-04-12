from flask import Flask,request,jsonify
from flask_cors import CORS
import pandas as pd
import json
app = Flask(__name__)

CORS(app)

df = pd.read_csv('final.csv')

total_balance = df["Balance"].iloc[-1]
total_spending = df["DR"].sum()
total_recieved = df["CR"].sum()


df["Date"] = pd.to_datetime(df["Date"])
monthly_sum = df.groupby(df["Date"].dt.to_period("M"))["DR"].sum().reset_index()
monthly_sum["Date"] = monthly_sum["Date"].dt.to_timestamp()
monthly_sum["Date"] = monthly_sum["Date"].astype(str)

monthly_sum_dict = monthly_sum.to_dict(orient = "records")

curr_month = monthly_sum['DR'].iloc[-1]
prev_month = monthly_sum['DR'].iloc[-2]

upi_id = df["UPI_ID"].to_list()
date = df["Date"].astype(str).to_list()

amount = []

for dr,cr in zip(df['DR'],df["CR"]):
	if dr != 0:
		amount.append(-dr)
	else:
		amount.append(+cr)



tran_hist = {
	"upi_id" : upi_id,
	"date" : date,
	"amount" : amount
}

daily_sum = df.groupby(df["Date"].dt.to_period("D"))["DR"].sum().reset_index()
daily_sum["Date"] = daily_sum["Date"].dt.to_timestamp()
daily_sum["Date"] = daily_sum["Date"].astype(str)

daily_sum_dict = daily_sum.to_dict(orient = "records")





# with open("mainahibatarahahu.json", "w", encoding="utf-8") as f:
# 	json.dump(tran_hist, f, indent=4)







dashboard = ({
		"total balance" : total_balance,
		"total spending" : total_spending,
		"total recieved" : total_recieved,
		"current month" : curr_month,
		"previous month" : prev_month,
		"transaction history" : tran_hist,
		"monthly summary" : monthly_sum_dict,
		"daily summary" : daily_sum_dict
		
    })

with open("dashboard.json", "w", encoding="utf-8") as f:
	json.dump(dashboard, f, indent=4)

# @app.route('/dashboard', methods = ["GET"])
# def values():
# 	return jsonify({
# 		"total balance" : total_balance,
# 		"total spending" : total_spending,
# 		"total recieved" : total_recieved,
# 		"current month" : curr_month,
# 		"previous month" : prev_month,
# 		"transaction history" : tran_hist,
# 		"monthly summary" : monthly_sum,
# 		"daily summary" : daily_sum
		
#     })


# if __name__ == "__main__":
# 	app.run(debug = True,host = '0.0.0.0', port = 5000)







