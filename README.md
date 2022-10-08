# Jira-NLP-TicketEstimate

## Description
Forge App for integration into Jira Cloud Projects. The goal is to use modularized NLP Backend services to predict the estimated time on IT support tickets within development stages.

## Prerequisites for developing with Forge
### On Windows
1. Docker 17.03 or later
2. WSL 2 Backend (optional) -> https://developer.atlassian.com/platform/forge/installing-forge-on-windows/
3. Node.js 10.0.0 or later

Forge-CLI install:
1. `npm install -g @forge/cli`
2. Verify: `forge --version` (should be 1.1.0)

For further details visit: https://developer.atlassian.com/platform/forge/getting-started/

# NLP Model

## Project Structure
<pre>
├── README.md                 <- The top-level README for developers using this project.
├── .gitignore                <- Ignore directories/files that shouldn't be commited.
├── nlp-estimate-app          <- JIRA project
│   └── ...
├── model                     <- Root folder for NLP Model
    ├── notebooks             <- Jupyter notebooks. Naming convention is a number (for ordering),
    │                             the creator's initials, and a short `-` delimited description, e.g.
    │                             `1.0-jqp-initial-data-exploration`.
    ├── data                  <- Ticket data
    └── src
        └── make_dataset.py   <- Script to build dataset for training/validation
        └── train_model.py    <- Script to train models
        └── predict_model.py  <- Script to use trained models to make predictions
</pre>
