import { create } from 'zustand';
import { portfolioData } from '../data/portfolioData';
import type { PortfolioData } from '../interface';

interface PortfolioState {
  data: PortfolioData;
}

export const usePortfolioStore = create<PortfolioState>(() => ({
  data: portfolioData,
}));
