from pydantic import BaseModel
from typing import List, Optional

class ResearchRequest(BaseModel):
    topic: str
    risk_tolerance: Optional[str] = "Medium"

class CompanyResult(BaseModel):
    name: str
    ticker: str
    reason: str

class FinalResponse(BaseModel):
    status: str
    winner: str
    justification: str
    candidates: List[CompanyResult]