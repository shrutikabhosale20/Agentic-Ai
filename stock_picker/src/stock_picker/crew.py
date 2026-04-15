from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from langchain_google_genai import ChatGoogleGenerativeAI
import os

@CrewBase
class StockPickerCrew():
    """StockPicker crew optimized for the Gemini 2.5 Flash Free Tier"""
    
    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    def __init__(self) -> None:
        # Using 2.5 Flash with a lower temperature for more stable, predictable responses
        self.llm = ChatGoogleGenerativeAI(
            model="gemini-2.5-flash", 
            temperature=0.1,
            max_retries=5  # Increased retries to handle 503 spikes automatically
        )

    @agent
    def trending_company_finder(self) -> Agent:
        return Agent(
            config=self.agents_config['trending_company_finder'],
            llm=self.llm,
            verbose=True,
            allow_delegation=False,
            max_iter=2,       
            max_rpm=1,        # Set to 1 for 2.5 Flash to avoid 429 errors
            max_retry_limit=3 
        )

    @agent
    def financial_researcher(self) -> Agent:
        return Agent(
            config=self.agents_config['financial_researcher'],
            llm=self.llm,
            verbose=True,
            allow_delegation=False,
            max_iter=2,
            max_rpm=1,
            max_retry_limit=3
        )

    @agent
    def stock_picker(self) -> Agent:
        return Agent(
            config=self.agents_config['stock_picker'],
            llm=self.llm,
            verbose=True,
            allow_delegation=False,
            max_iter=2,
            max_rpm=1,
            max_retry_limit=3
        )

    @agent
    def senior_portfolio_manager(self) -> Agent:
        return Agent(
            config=self.agents_config['senior_portfolio_manager'],
            llm=self.llm,
            verbose=True,
            allow_delegation=False,
            max_iter=2,
            max_rpm=1,
            max_retry_limit=3
        )

    @task
    def find_trending_companies(self) -> Task:
        return Task(
            config=self.tasks_config['find_trending_companies'],
            agent=self.trending_company_finder()
        )

    @task
    def research_trending_companies(self) -> Task:
        return Task(
            config=self.tasks_config['research_trending_companies'],
            agent=self.financial_researcher(),
            context=[self.find_trending_companies()]
        )

    @task
    def pick_best_company(self) -> Task:
        return Task(
            config=self.tasks_config['pick_best_company'],
            agent=self.stock_picker(),
            context=[self.research_trending_companies()]
        )

    @task
    def portfolio_recommendation_task(self) -> Task:
        return Task(
            config=self.tasks_config['portfolio_recommendation_task'],
            agent=self.senior_portfolio_manager(),
            context=[self.pick_best_company()]
        )

    @crew
    def crew(self) -> Crew:
        return Crew(
            agents=self.agents, 
            tasks=self.tasks,   
            process=Process.sequential, 
            verbose=True,
            cache=True,         
            max_rpm=1,          # Mandatory for 2.5 Flash Free Tier
            planning=False,     
            embedder={
                "provider": "google",
                "config": {
                    "model": "models/embedding-001",
                    "task_type": "retrieval_document",
                }
            }
        )