export default interface PatentInfo {
    title: string;
    tags: Array<string>;
    status: string;
    patentId: string;
    url: string;
    problem: string;
    problemKeywords: Array<string>;
    solution: string;
    solutionKeywords: Array<string>;
    summary: string;
  }