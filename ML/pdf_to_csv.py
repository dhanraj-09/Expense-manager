# import tabula 

# file = "statement.pdf"
# # output = tabula.read_pdf(file,stream = True)


# output = tabula.io.convert_into(file, "converted.csv", output_format="csv", lattice=True, stream=False,  pages="all" )

import pdfplumber
import csv

file_path  = "6statement.pdf"

out_path = "output.csv"

with pdfplumber.open(file_path) as pdf, open(out_path, "w", newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    for page in pdf.pages:
        table = page.extract_table()
        if table:
            for row in table:
                writer.writerow(row)