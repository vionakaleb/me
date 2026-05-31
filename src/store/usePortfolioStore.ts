import { create } from "zustand";
import { portfolioData } from "../data/portfolioData";
import type { PortfolioData } from "../interface";
import { mergeImportedProfile } from "../data/mergeImportedProfile";
import output from "../data/output/profile.imported.json";

interface PortfolioState {
  data: PortfolioData;
}

export const usePortfolioStore = create<PortfolioState>(() => ({
  data: mergeImportedProfile(portfolioData, output),
}));
