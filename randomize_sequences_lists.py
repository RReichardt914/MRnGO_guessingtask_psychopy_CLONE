#%% IMPORT
from pathlib import Path
import pandas as pd
import unicodedata

#%% GLOBAL
BASE_DIR = Path(".")
CURATION_FILE = BASE_DIR / "MRNGO_curation_workspace.xlsx"
FEATURE_FILE = BASE_DIR / "MRNGO_features_pilot.xlsx"
OUTPUT_DIR = BASE_DIR / "sequences"

FINAL_SHEET = "Final"

#%% HELPER
def deaccent_text(text):
    text = str(text)
    text = unicodedata.normalize("NFKD", text)
    text = "".join(char for char in text if not unicodedata.combining(char))
    return text

#%% READ-IN
final_df = pd.read_excel(CURATION_FILE, sheet_name=FINAL_SHEET, dtype=str)
feature_df = pd.read_excel(FEATURE_FILE, dtype=str)

final_df.columns = final_df.columns.str.strip()
feature_df.columns = feature_df.columns.str.strip()

final_df = final_df.dropna(how="all").reset_index(drop=True)
feature_df = feature_df.dropna(how="all").reset_index(drop=True)

feature_df["featureno"] = feature_df["featureno"].astype(str).str.strip()
feature_df["itemno"] = feature_df["itemno"].astype(str).str.strip()

final_df["Concept"] = final_df["Concept"].astype(str).str.strip()
final_df["FeatureNo"] = final_df["FeatureNo"].astype(str).str.strip()

# Features
feature_lookup = {}

for _, row in feature_df.iterrows():
    featureno = row["featureno"]

    if featureno not in feature_lookup:
        feature_lookup[featureno] = row


#%% MAIN LOOP
current_concept = None
current_rows = []

for _, row in final_df.iterrows():
    concept = row["Concept"]
    feature_no = row["FeatureNo"]
    concept_no = row["ConceptNo"]
    
    print(feature_no)

    if current_concept is None:
        current_concept = concept

    if concept != current_concept:
        
        current_concept = concept
        current_rows = []

    if feature_no not in feature_lookup:
        raise ValueError(f"FeatureNo not found in {FEATURE_FILE}: {feature_no}")

    feature_row = feature_lookup[feature_no]

    trialno = row["TrialNo"] if "TrialNo" in final_df.columns else row["Trialno"]

    if "Feature" in final_df.columns:
        feature_name = row["Feature"]
    elif "Feature" in feature_df.columns:
        feature_name = feature_row["Feature"]
    elif "feature" in feature_df.columns:
        feature_name = feature_row["feature"]
    else:
        feature_name = feature_no

    itemno = feature_row["itemno"]
    feature_name = deaccent_text(feature_name)
    feature_file = f"stimuli/{itemno}.png"
    
    current_rows.append({
        "trialno": trialno,
        "feature_name": feature_name,
        "feature_file": feature_file
    })

    if current_concept is not None and current_rows:
        concept_dir = OUTPUT_DIR / concept_no
        concept_dir.mkdir(parents=True, exist_ok=True)
    
        out_df = pd.DataFrame(
            current_rows,
            columns=["trialno", "feature_name", "feature_file"]
        )
    
        out_path = concept_dir / f"{concept_no}_list.csv"
        out_df.to_csv(out_path, index=False, encoding="utf-8")

#%% FIXED STIMLISTS

FIXED_LIST_DIR = BASE_DIR / "fixed_lists"
FIXED_LIST_DIR.mkdir(parents=True, exist_ok=True)

practice_conceptnos = ["f12", "t24", "a19"]
stimlist01_conceptnos = ["t17", "v13", "ty07", "c13", "f15", "pl11", "p35", "l02", "a16", "b11"]


# make simple ConceptNo -> Concept lookup from Final sheet
concept_lookup = {}

for _, row in final_df.iterrows():
    concept_no = row["ConceptNo"]
    concept = row["Concept"]

    if concept_no not in concept_lookup:
        concept_lookup[concept_no] = concept


# practice list
practice_rows = []

for i, concept_no in enumerate(practice_conceptnos, start=1):
    concept = concept_lookup[concept_no]
    concept_dir = OUTPUT_DIR / concept_no
    sequence_filepath = concept_dir / f"{concept_no}_list.csv"

    practice_rows.append({
        "concept_trial": f"P{i}",
        "conceptno": concept_no,
        "concept": concept,
        "sequence_filepath": str(sequence_filepath)
    })

practice_df = pd.DataFrame(
    practice_rows,
    columns=["concept_trial", "conceptno", "concept", "sequence_filepath"]
)

practice_out_path = FIXED_LIST_DIR / "stimlist_practice.csv"
practice_df.to_csv(practice_out_path, index=False, encoding="utf-8-sig")


# actual stimlist01
stimlist01_rows = []

for i, concept_no in enumerate(stimlist01_conceptnos, start=1):
    concept = concept_lookup[concept_no]
    concept_dir = OUTPUT_DIR / concept_no
    sequence_filepath = (concept_dir / f"{concept_no}_list.csv").as_posix()

    stimlist01_rows.append({
        "concept_trial": i,
        "conceptno": concept_no,
        "concept": concept,
        "sequence_filepath": sequence_filepath
    })

stimlist01_df = pd.DataFrame(
    stimlist01_rows,
    columns=["concept_trial", "conceptno", "concept", "sequence_filepath"]
)

stimlist01_out_path = FIXED_LIST_DIR / "stimlist01.csv"
stimlist01_df.to_csv(stimlist01_out_path, index=False, encoding="utf-8-sig")

#%%
print("Done.")
print(f"Created concept-specific CSV files in: {OUTPUT_DIR}")