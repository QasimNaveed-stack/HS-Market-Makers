export type TemplateCategory = 'ecommerce' | 'saas' | 'social' | 'streaming' | 'portfolio' | 'marketplace' | 'custom';

export interface PageRequirement {
  id: string;
  name: string;
  urduName: string;
  description: string;
  priority: 'must-have' | 'good-to-have' | 'optional';
  selected: boolean;
}

export interface FeatureRequirement {
  id: string;
  category: 'auth' | 'commerce' | 'interaction' | 'data' | 'ui' | 'admin';
  name: string;
  urduName: string;
  description: string;
  selected: boolean;
  complexity: 'Easy' | 'Medium' | 'Advanced';
}

export interface CloneTemplate {
  id: string;
  name: string;
  tagline: string;
  category: TemplateCategory;
  inspiredBy: string;
  colorTheme: string;
  estimatedEffort: string;
  targetPages: string[];
  keyFeatures: string[];
  recommendedStack: {
    frontend: string;
    styling: string;
    backend: string;
    database: string;
    auth: string;
  };
  samplePrompt: string;
}

export interface CloneProjectSpec {
  websiteUrl: string;
  projectName: string;
  targetBrand: string;
  projectType: TemplateCategory;
  isExactClone: boolean; // Exact 1:1 or Rebranded with custom colors/logo
  customBrandName: string;
  colorPreference: string;
  selectedPages: string[];
  selectedFeatures: string[];
  backendType: 'firebase' | 'cloudsql' | 'mock-frontend' | 'custom-api';
  specialNotes: string;
  assetsProvided: {
    hasLogo: boolean;
    hasScreenshots: boolean;
    hasContent: boolean;
    needAiGeneration: boolean;
  };
}
