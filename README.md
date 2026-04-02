# snehagowardhan-gitrepo
📦 AI Inventory & Policy Support Agent (n8n)
This workflow leverages an AI Agent with a Retrieval-Augmented Generation (RAG) backend to handle customer chat messages. It can answer policy questions, manage Google Sheets inventory, and collect feedback in real-time.
🚀 Overview
The agent acts as a centralized brain, connecting your chat interface to internal documentation and operational databases (Google Sheets).
🧠 Core Components
AI Engine: OpenAI Chat Model (GPT-4o/GPT-4o-mini).
Memory: Simple Window Buffer Memory to maintain conversation context.
Vector Store (RAG): Policies RAG via momsmagic-policies document for accurate policy lookups.
Operations: 4-way Google Sheets integration for inventory and order management.
🛠️ Tool Capabilities
The agent is equipped with the following custom tools to perform actions based on user intent:
Tool Name	Action	Description
Get Inventory	read:sheet	Checks current stock levels in the master inventory sheet.
Add Order	append:sheet	Logs new customer orders directly into the sales sheet.
Update Inventory	update:sheet	Adjusts stock counts after a successful order.
Add Feedback	append:sheet	Captures customer sentiment and feedback for review.
Policies RAG	get:document	Retrieves specific company policies from the momsmagic-policies store.
📥 How to Setup
Import JSON: Download the .json file from this repo and import it into your n8n instance.
Credentials:
Set up your OpenAI API Key.
Connect your Google Sheets account (ensure the agent has edit access to your specific sheets).
Configure the Vector Store URL for the Policies RAG node.
Environment Variables: Replace any placeholder Spreadsheet IDs in the Google Sheets nodes with your own.


In this specific n8n workflow, the Retrieval-Augmented Generation (RAG) allows the AI Agent to answer questions using your private company data rather than just general knowledge.
How the RAG Logic Works:
Trigger & Retrieval: When a user asks a policy-related question (e.g., "What is your return policy?"), the AI Agent recognizes the intent and calls the Policies RAG tool.
Vector Search: The workflow sends a POST request to the momsmagic-policies endpoint. This search finds the most relevant "chunks" of text from your uploaded policy documents.
Context Injection: The retrieved text is fed back into the OpenAI Chat Model as specialized context.
Grounded Response: The AI then drafts a response based only on those retrieved facts, significantly reducing "hallucinations" and ensuring accuracy for your specific business.
Technical Components Used:
Vector Store Node: Acts as the bridge to your external database of documents.
Embeddings: Converts your text documents into mathematical vectors so the AI can "search" by meaning rather than just keywords.
Document Loader: Likely connected to the momsmagic-policies document shown in your screenshot.

