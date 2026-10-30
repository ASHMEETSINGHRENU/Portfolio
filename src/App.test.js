import { personalInfo, projects, industryProjects, skillCategories } from './data/portfolioData';

describe('Portfolio Core Data Integrity', () => {
  test('personalInfo contains valid name, email, and social links', () => {
    expect(personalInfo.name).toBe('Ashmeet Singh');
    expect(personalInfo.email).toBeTruthy();
    expect(personalInfo.socials.github).toContain('github.com');
  });

  test('industryProjects catalog contains real-world commercial deliverables', () => {
    expect(industryProjects.length).toBe(5);
    industryProjects.forEach((proj) => {
      expect(proj.title).toBeTruthy();
      expect(proj.liveUrl).toMatch(/^https?:\/\//);
      expect(proj.industry).toBeTruthy();
      expect(proj.image).toBeDefined();
    });
  });

  test('projects catalog is populated with valid entries', () => {
    expect(projects.length).toBeGreaterThan(0);
    projects.forEach((proj) => {
      expect(proj.title).toBeTruthy();
      expect(proj.tech.length).toBeGreaterThan(0);
    });
  });

  test('skill categories contain valid competencies', () => {
    expect(skillCategories.length).toBeGreaterThan(0);
    skillCategories.forEach((cat) => {
      expect(cat.skills.length).toBeGreaterThan(0);
    });
  });
});
