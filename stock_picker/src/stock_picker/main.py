import os
import yaml
from crewai import Agent, Task, Crew, Process
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Using 2.5-flash as requested
GEMINI_LLM = "gemini/gemini-2.5-flash"

def load_config():
    config_path = os.path.join(os.path.dirname(__file__), 'config')
    with open(os.path.join(config_path, 'agents.yaml'), 'r') as f:
        agents = yaml.safe_load(f)
    with open(os.path.join(config_path, 'tasks.yaml'), 'r') as f:
        tasks = yaml.safe_load(f)
    return agents, tasks

def run_research():
    try:
        agents_cfg, tasks_cfg = load_config()

        print("\n" + "="*40)
        print("🚀  AI STOCK ANALYST v2.5")
        print("="*40)
        
        # Terminal Inputs
        topic = input("Enter sector to research (e.g. AI start up): ") or "AI start up"
        risk = input("Enter risk tolerance (Low, Medium, High): ") or "Medium"
        
        print(f"\n[System] Analyzing {topic} for {risk} risk profile...")

        # Initialize Agents
        finder = Agent(config=agents_cfg['trending_company_finder'], llm=GEMINI_LLM, max_iter=1)
        researcher = Agent(config=agents_cfg['financial_researcher'], llm=GEMINI_LLM, max_iter=1)
        picker = Agent(config=agents_cfg['stock_picker'], llm=GEMINI_LLM, max_iter=1)
        final_manager = Agent(config=agents_cfg['senior_portfolio_manager'], llm=GEMINI_LLM, max_iter=1)

        # Initialize Tasks
        task1 = Task(config=tasks_cfg['find_trending_companies'], agent=finder)
        task2 = Task(config=tasks_cfg['research_trending_companies'], agent=researcher)
        task3 = Task(config=tasks_cfg['pick_best_company'], agent=picker)
        task4 = Task(config=tasks_cfg['portfolio_recommendation_task'], agent=final_manager)

        # Setup Crew
        crew = Crew(
            agents=[finder, researcher, picker, final_manager],
            tasks=[task1, task2, task3, task4],
            process=Process.sequential, 
            verbose=True,
            max_rpm=2 
        )

        # Kickoff
        result = crew.kickoff(inputs={
            'topic': topic,
            'current_year': '2026',
            'risk_tolerance': risk
        })
        
        # Display & Save Output
        print("\n" + "="*40)
        print("              ✨ FINAL RECOMMENDATION                  ")
        print("="*40)
        print(result)

        # Auto-save to file
        filename = f"report_{topic.replace(' ', '_')}.md"
        with open(filename, "w", encoding="utf-8") as f:
            f.write(str(result))
        
        print(f"\n[Success] Report saved to {filename}")
        
    except Exception as e:
        if "429" in str(e):
            print("\n🛑 QUOTA EXCEEDED: You hit the Gemini daily limit.")
        else:
            print(f"\n❌ ERROR: {str(e)}")

if __name__ == "__main__":
    run_research()